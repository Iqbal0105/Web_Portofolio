# 🚀 Iqbal Aziz - Personal Developer Portfolio (Web, IoT, & ML)

Website portofolio pribadi modern berkinerja tinggi, responsif, dan interaktif yang dibangun menggunakan **Next.js 16 (Turbopack)**, **Tailwind CSS v4**, dan terintegrasi secara dinamis dengan **GitHub API**.

Website ini menampilkan karya unggulan, kompetensi keterampilan, serta latar belakang profesional di bidang **Full-Stack Web Development**, **Internet of Things (IoT)**, dan **Machine Learning**.

---

## ✨ Fitur Utama

- 🌐 **Integrasi Dinamis GitHub API**: Menghubungkan langsung repositori publik dari akun GitHub secara real-time menggunakan konsep server-side rendering dengan dynamic caching (mati di mode dev, aktif di mode prod).
- 🏷️ **Sistem Klasifikasi Kategori Otomatis (Auto-Tagging)**: Sistem secara cerdas memindai bahasa pemrograman utama dan kata kunci pada repositori untuk mengelompokkannya secara otomatis ke dalam kategori:
  - **Web Dev**: Next.js, React, Tailwind, PHP, Laravel, TypeScript.
  - **IoT & Hardware**: ESP32, Arduino, MQTT, C++.
  - **Machine Learning**: Python, TensorFlow, CNN, Data Classification.
- 📝 **Deskripsi Cerdas Otomatis (Auto-Fallback Description)**: Jika repositori Anda di GitHub tidak memiliki deskripsi, sistem kami secara dinamis membuat deskripsi profesional berbahasa Indonesia berdasarkan nama & bahasa pemrogramannya.
- 🔗 **Tautan Demo Kustom**: Mendukung integrasi tautan demo hidup eksternal kustom (contoh: menyuntikkan tautan aplikasi Streamlit `https://diabetes-preditction.streamlit.app` pada repositori klasifikasi Diabetes secara otomatis).
- 💎 **Desain Modern & Responsif (Glassmorphic Dark Mode)**: 
  - Estetika premium menggunakan gradasi warna harmonis (Emerald, Indigo, Rose).
  - Sentuhan visual efek kaca transparan (*Glassmorphism*) dan efek berpendar (*Neon Glow*).
  - Tampilan footer interaktif dengan dual-card simetris (Direct Email & GitHub).

---

## 🛠️ Teknologi yang Digunakan

- **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Runtime Engine**: Node.js & React 19
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Fetching**: GitHub Rest API v3 (dengan dukung otentikasi PAT Token)

---

## 🚀 Memulai (Panduan Lokal)

### 1. Kloning Repositori
```bash
git clone https://github.com/Iqbal0105/portfolio.git
cd portfolio
```

### 2. Pasang Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variables
Buat atau ubah file `.env.local` di root folder proyek:
```env
# Konfigurasi Integrasi GitHub API
GITHUB_USERNAME=Iqbal0105

# Opsional: Masukkan Personal Access Token (PAT) GitHub Anda jika terkena rate limit
# GITHUB_TOKEN=your_github_personal_access_token
```

### 4. Jalankan Server Pengembangan
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di peramban Anda untuk melihat hasilnya!

---

## 📦 Verifikasi Produksi (Build)

Untuk memvalidasi kesiapan kode dan mengompilasi proyek menjadi bundel produksi statis yang super cepat:
```bash
npm run build
```

---

## 🤝 Hubungi Saya

Mari berkolaborasi dan mendiskusikan peluang proyek menarik!
- **Email**: iqbalabdulaziz71@gmail.com
- **GitHub**: [@Iqbal0105](https://github.com/Iqbal0105)

