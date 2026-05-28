import fallbackData from "@/data/fallback.json";

export interface Project {
  name: string;
  originalName: string;
  description: string;
  topics: string[];
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
}

// Map of acronyms to keep uppercase
const ACRONYMS = new Set(["iot", "mqtt", "esp32", "ml", "cnn", "api", "cli", "php", "db", "ui", "ux", "js", "ts", "css", "html"]);

/**
 * Beautifies repository names by removing hyphens and formatting cases
 * e.g., smart-irrigation-system -> Smart Irrigation System
 * e.g., my-iot-project -> My IoT Project
 */
export function formatRepoName(name: string): string {
  if (!name) return "";
  return name
    .split(/[-_]+/)
    .map((word) => {
      const lower = word.toLowerCase();
      if (ACRONYMS.has(lower)) {
        return lower === "esp32" ? "ESP32" : lower.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

/**
 * Limits a description string to roughly 2 sentences or 150 characters
 */
export function limitDescription(desc: string | null): string {
  if (!desc) return "Tidak ada deskripsi proyek.";
  
  // Clean up whitespace
  const clean = desc.trim();
  
  // Find first two sentences
  const sentences = clean.split(/(?<=[.!?])\s+/);
  if (sentences.length > 2) {
    return sentences.slice(0, 2).join(" ");
  }
  
  if (clean.length > 150) {
    return clean.slice(0, 147) + "...";
  }
  
  return clean;
}

/**
 * Generates a highly descriptive fallback description in Indonesian based on repository name and language
 */
export function generateFallbackDescription(name: string, language: string | null): string {
  if (!name) return "Tidak ada deskripsi proyek.";
  
  const nameLower = name.toLowerCase();
  const langStr = language || "teknologi modern";

  // 1. Diabetes Prediction
  if (nameLower.includes("diabetes") && (nameLower.includes("predict") || nameLower.includes("prediksi"))) {
    return "Aplikasi Machine Learning berbasis Python untuk memprediksi potensi penyakit diabetes menggunakan model klasifikasi data klinis.";
  }
  
  // 2. Portfolio
  if (nameLower.includes("portfolio") || nameLower.includes("portofolio")) {
    return "Website portofolio interaktif dan modern berkinerja tinggi, menampilkan karya, keterampilan, dan integrasi otomatis dengan GitHub API.";
  }

  // 3. Smart File Compressor / Compres
  if (nameLower.includes("compres") || nameLower.includes("kompres")) {
    return `Aplikasi utilitas pintar berbasis ${langStr} untuk mengompresi file dan mengoptimalkan penyimpanan media secara efisien.`;
  }

  // 4. Smart Garden API / Irrigation
  if (nameLower.includes("garden") || nameLower.includes("irrigation")) {
    return "Sistem monitoring & otomatisasi penyiraman tanaman cerdas berbasis Internet of Things (IoT) dengan kendali sensor real-time.";
  }

  // 5. UMKM Gedangrejo / UMKM Landing Page
  if (nameLower.includes("umkm") || nameLower.includes("gedangrejo")) {
    return "Platform digitalisasi UMKM Desa Gedangrejo untuk memperluas pemasaran produk lokal secara interaktif dan informatif.";
  }

  // 6. SQL Test
  if (nameLower.includes("sql") || nameLower.includes("db")) {
    return "Kumpulan pengujian query SQL kompleks dan optimasi basis data relasional untuk efisiensi sistem informasi.";
  }

  // 7. Student Performance Tracker
  if (nameLower.includes("student") || nameLower.includes("performance") || nameLower.includes("tracker")) {
    return "Dashboard interaktif pelacakan rekam jejak nilai akademik dan visualisasi perkembangan belajar siswa secara real-time.";
  }

  // Generic patterns based on language
  if (langStr.toLowerCase() === "python") {
    return `Proyek pemrograman fungsional berbasis Python untuk otomatisasi dan pengolahan logika data tingkat lanjut.`;
  }
  if (["typescript", "javascript", "react", "nextjs"].includes(langStr.toLowerCase())) {
    return `Aplikasi web modern berbasis ${langStr} dengan antarmuka yang responsif, interaktif, dan berorientasi pengguna.`;
  }

  return `Proyek pengembangan sistem '${name}' yang diimplementasikan menggunakan teknologi ${langStr} secara terstruktur.`;
}

export async function getGithubProjects(): Promise<Project[]> {
  const username = process.env.GITHUB_USERNAME || "iqbaldev";
  const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`;

  let repos: any[] = [];
  let fetchedSuccessfully = false;
  const revalidateTime = process.env.NODE_ENV === "development" ? 0 : 3600; // 0 in dev to avoid cache issues, 1 hour in prod

  // Try fetching with GITHUB_TOKEN if provided
  if (process.env.GITHUB_TOKEN) {
    try {
      const response = await fetch(url, {
        next: { revalidate: revalidateTime },
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "Nextjs-Portfolio-App",
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      });

      if (response.ok) {
        repos = await response.json();
        fetchedSuccessfully = true;
      } else {
        console.warn(`GitHub API with token failed with status ${response.status}. Retrying without token...`);
      }
    } catch (error) {
      console.error("Error fetching from GitHub API with token, retrying without token...", error);
    }
  }

  // Fallback: Fetch without token (subject to public rate limit: 60 req/hour)
  if (!fetchedSuccessfully) {
    try {
      const response = await fetch(url, {
        next: { revalidate: revalidateTime },
        headers: {
          Accept: "application/vnd.github+json",
          "User-Agent": "Nextjs-Portfolio-App",
        },
      });

      if (response.ok) {
        repos = await response.json();
        fetchedSuccessfully = true;
      } else {
        throw new Error(`GitHub API returned status ${response.status}`);
      }
    } catch (error) {
      console.error("Error fetching projects from GitHub API, returning fallback data:", error);
      return getFallbackProjects();
    }
  }

  if (!Array.isArray(repos) || repos.length === 0) {
    console.warn("No repositories found or empty response from GitHub. Returning fallback data.");
    return getFallbackProjects();
  }

  // Map and enrich repositories dynamically
  const mappedProjects: Project[] = repos
    .filter((repo: any) => {
      // Exclude forks unless they are explicitly tagged for portfolio
      const topics = repo.topics || [];
      if (repo.fork && !topics.includes("portfolio") && !topics.includes("featured")) {
        return false;
      }
      return true;
    })
    .map((repo: any) => {
      // Create a unique set of topics
      const topics = new Set<string>((repo.topics || []).map((t: string) => t.toLowerCase()));
      
      // Auto-tag based on primary programming language
      if (repo.language) {
        const lang = repo.language.toLowerCase();
        topics.add(lang);
        if (lang === "typescript" || lang === "javascript" || lang === "php" || lang === "blade" || lang === "html" || lang === "css") {
          topics.add("web-dev");
        }
        if (lang === "c++" || lang === "c") {
          topics.add("iot");
          topics.add("embedded");
        }
        if (lang === "python") {
          topics.add("python");
        }
      }

      // Auto-tag based on name keywords to auto-categorize in portfolio UI
      const nameLower = repo.name.toLowerCase();
      const descLower = (repo.description || "").toLowerCase();
      const checkString = `${nameLower} ${descLower}`;

      // 1. Machine Learning & Python keywords
      if (
        checkString.includes("predict") ||
        checkString.includes("classification") ||
        checkString.includes("deep-learning") ||
        checkString.includes("machine-learning") ||
        checkString.includes("ml") ||
        checkString.includes("cnn") ||
        checkString.includes("tensorflow") ||
        checkString.includes("keras") ||
        checkString.includes("ai") ||
        checkString.includes("detection")
      ) {
        topics.add("machine-learning");
        topics.add("ml");
        topics.add("python");
      }

      // 2. IoT / Embedded keywords
      if (
        checkString.includes("iot") ||
        checkString.includes("esp32") ||
        checkString.includes("arduino") ||
        checkString.includes("mqtt") ||
        checkString.includes("sensor") ||
        checkString.includes("hardware") ||
        checkString.includes("smart-home") ||
        checkString.includes("garden") ||
        checkString.includes("irrigation")
      ) {
        topics.add("iot");
        topics.add("esp32");
      }

      // 3. Web Dev / Next.js / React keywords
      if (
        checkString.includes("web") ||
        checkString.includes("nextjs") ||
        checkString.includes("react") ||
        checkString.includes("tailwind") ||
        checkString.includes("laravel") ||
        checkString.includes("frontend") ||
        checkString.includes("backend") ||
        checkString.includes("landing") ||
        checkString.includes("website") ||
        checkString.includes("dashboard") ||
        checkString.includes("e-commerce")
      ) {
        topics.add("web-dev");
      }

      // Manual homepage override for specific projects
      let homepage = repo.homepage || null;
      if (nameLower.includes("diabetes") && (nameLower.includes("predict") || nameLower.includes("prediksi"))) {
        homepage = "https://diabetes-preditction.streamlit.app";
      }

      return {
        name: formatRepoName(repo.name),
        originalName: repo.name,
        description: repo.description
          ? limitDescription(repo.description)
          : generateFallbackDescription(repo.name, repo.language),
        topics: Array.from(topics),
        html_url: repo.html_url,
        homepage: homepage,
        stargazers_count: repo.stargazers_count || 0,
        isFeatured: repo.topics?.includes("portfolio") || repo.topics?.includes("featured"),
        updatedAt: repo.updated_at,
      };
    });

  // Split into featured (explicitly tagged) and other public repos
  const featuredProjects = mappedProjects.filter((p: any) => p.isFeatured);
  const otherProjects = mappedProjects.filter((p: any) => !p.isFeatured);

  // Sort other projects by stars then update recency
  otherProjects.sort((a: any, b: any) => {
    if (b.stargazers_count !== a.stargazers_count) {
      return b.stargazers_count - a.stargazers_count;
    }
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });

  // Combine them: priority to explicitly featured, then fill the rest from other repositories
  // Limit to a max of 12 beautiful cards to avoid cluttering
  const finalProjects = [...featuredProjects, ...otherProjects].slice(0, 12);

  if (finalProjects.length === 0) {
    console.warn("No public repositories found. Using fallback projects.");
    return getFallbackProjects();
  }

  // Clean the helper properties before returning
  return finalProjects.map(({ isFeatured, updatedAt, ...project }: any) => project);
}

function getFallbackProjects(): Project[] {
  return fallbackData.map((repo) => ({
    name: formatRepoName(repo.name),
    originalName: repo.name,
    description: limitDescription(repo.description),
    topics: repo.topics,
    html_url: repo.html_url,
    homepage: repo.homepage || null,
    stargazers_count: repo.stargazers_count,
  }));
}
