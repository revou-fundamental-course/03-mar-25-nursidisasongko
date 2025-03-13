var slideIndex = 1;
showDivs(slideIndex);

// Fungsi untuk tombol Next/Prev
function plusDivs(n) {
    showDivs(slideIndex += n);
}

// Fungsi untuk menampilkan slide
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("img-slideshow");

    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }

    // Sembunyikan semua gambar
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    // Tampilkan gambar yang sesuai
    x[slideIndex - 1].style.display = "block";
}


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
    document.getElementById("welcome-message").innerHTML = `Hai ${nama}, Selamat Datang di Website SMK Negeri Maju Jaya!`;

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
