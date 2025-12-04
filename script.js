const button = document.getElementById("themeBtn");

// Variabel untuk mengecek apakah mode gelap aktif
let darkMode = false;

// Event listener ketika tombol diklik
button.addEventListener("click", function () {
    console.log("Tombol Tema diklik");

    darkMode = !darkMode;
    // Tambah atau hapus class "dark-mode" pada body
    document.body.classList.toggle("dark-mode");

    // Ubah teks tombol
    if (darkMode) {
        button.textContent = "Ubah ke Light Mode";
    } else {
        button.textContent = "Ubah ke Dark Mode";
    }
});

// Tombol Sapaan
const sayHiBtn = document.getElementById("sayHiBtn");
const greeting = document.getElementById("greeting");

sayHiBtn.addEventListener("click", function () {
    console.log("Tombol Sapa Saya diklik");

    let nama = prompt("Siapa nama kamu?");

    if (nama && nama.trim() !== "") {
        greeting.innerText = "Halo, " + nama + "!";
    } else {
        greeting.innerText = "Halo, pengunjung!";
    }
});


/* ============================================================
   REFLEKSI SINGKAT – TUGAS JAVASCRIPT DASAR
   ============================================================
Bagian yang paling membuat saya bingung di awal adalah bagaimana cara 
menghubungkan tombol di HTML dengan fungsi yang ada di JavaScript. Saya 
sempat ragu apakah harus menggunakan onclick langsung di dalam tag HTML 
atau memakai addEventListener di file script. Setelah mencoba beberapa kali, 
membaca error di console, dan memahami cara kerja DOM, akhirnya saya mengerti
bahwa addEventListener adalah cara yang lebih rapi dan lebih dianjurkan.

Saya juga sempat mengalami masalah sederhana namun cukup mengganggu, JavaScript 
saya tidak terbaca sama sekali. Ternyata penyebabnya hanya salah penamaan file, saya 
menulis scrip.js bukannya script.js. Setelah melihat pesan error di console, saya 
langsung menyadari kesalahannya. Momen itu membuat saya belajar bahwa hal kecil seperti 
penamaan file sangat mempengaruhi jalannya program.

Momen “WOW” saya muncul ketika semua fitur akhirnya bekerja. Tema halaman benar-benar 
berubah saat tombol saya klik, dan sapaan dinamis juga tampil sesuai nama yang saya 
masukkan.
*/