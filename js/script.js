
let slideIndex = 0;
let slides = document.querySelectorAll(".img-slideshow");
let slideInterval;

// Fungsi untuk menampilkan slide dengan animasi geser
function showSlides(n) {
    slides.forEach(slide => {
        slide.classList.remove("active", "prev");
        slide.style.display = "none"; // Sembunyikan semua slide
    });

    if (n !== undefined) {
        slideIndex += n;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
    } else {
        slideIndex = (slideIndex + 1) % slides.length;
    }

    let prevIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
    slides[prevIndex].classList.add("prev");
    slides[slideIndex].classList.add("active");
    slides[slideIndex].style.display = "block";
}

// Fungsi untuk tombol Next/Prev
function plusDivs(n) {
    clearInterval(slideInterval); // Reset timer saat tombol ditekan
    showSlides(n);
    startAutoSlide(); // Mulai ulang slideshow otomatis
}

// Fungsi untuk menjalankan slideshow otomatis ke kiri
function startAutoSlide() {
    slideInterval = setInterval(() => showSlides(1), 3000);
}

// Jalankan slideshow otomatis saat halaman dimuat
showSlides();
startAutoSlide();


document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Mengambil nilai input
    let nama = document.getElementById("full-name").value;
    let alamat = document.getElementById("alamat").value;
    let nowa = document.getElementById("no-wa").value;
    let tanggalLahir = document.getElementById("birth-date").value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let pesan = document.getElementById("pesan").value;

    // Menampilkan timestamp saat submit
    let timestamp = new Date().toString();

    // Menampilkan data di dalam output
    document.getElementById("timestamp").textContent = timestamp;
    document.getElementById("output-nama").textContent = nama;
    document.getElementById("output-alamat").textContent = alamat;
    document.getElementById("output-nowa").textContent = nowa;
    document.getElementById("output-tanggal").textContent = tanggalLahir;
    document.getElementById("output-gender").textContent = gender;
    document.getElementById("output-pesan").textContent = pesan;

    // Menampilkan div output
    document.getElementById("output").style.display = "block";

    // Mengubah teks heading dengan pesan selamat datang
    document.getElementById("welcome-message").innerHTML = 
    `Hai <span style="color:rgb(148, 17, 8); font-size: 50px; font-weight: bold;">${nama}</span>, Selamat Datang di Website SMK Negeri Maju Jaya!`;

    // Mengosongkan form setelah submit
    document.getElementById("message-form").reset();
});

document.getElementById("no-wa").addEventListener("input", function () {
    let phoneInput = this.value;
    let phoneError = document.getElementById("phone-error");

    // Hanya boleh angka
    if (!/^\d*$/.test(phoneInput)) {
        this.value = phoneInput.replace(/\D/g, ""); // Hapus karakter selain angka
    }

    // Validasi panjang nomor (10-13 digit)
    if (phoneInput.length < 10 || phoneInput.length > 13) {
        phoneError.style.display = "block";
    } else {
        phoneError.style.display = "none";
    }
});
