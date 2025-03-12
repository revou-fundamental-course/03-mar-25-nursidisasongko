document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelector(".slides");
    const dots = document.querySelectorAll(".dot");
    const totalSlides = document.querySelectorAll(".slide").length;

    function nextSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0; // Kembali ke slide pertama
        }
        slides.style.transform = `translateX(${-index * 100}%)`;

        // Perbarui status titik indikator
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Ganti slide otomatis setiap 3 detik
    setInterval(nextSlide, 3000);
});
document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai input
    let nama = document.getElementById("full-name").value;
    let tanggalLahir = document.getElementById("birth-date").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let pesan = document.getElementById("pesan").value;

    // Menampilkan timestamp saat submit
    let timestamp = new Date().toString();

    // Menampilkan data di dalam output
    document.getElementById("timestamp").textContent = timestamp;
    document.getElementById("output-nama").textContent = nama;
    document.getElementById("output-tanggal").textContent = tanggalLahir;
    document.getElementById("output-gender").textContent = gender;
    document.getElementById("output-pesan").textContent = pesan;

    // Menampilkan div output
    document.getElementById("output").style.display = "block";

    // Mengubah teks heading dengan pesan selamat datang
    document.getElementById("welcome-message").innerHTML = `Hai ${nama}, Selamat Datang di Website SMK Negeri Maju Jaya!`;

    // Mengosongkan form setelah submit
    document.getElementById("message-form").reset();
});

