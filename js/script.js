let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;

function nextSlide() {
    if (index < totalSlides - 1) {
        index++; // Geser ke slide berikutnya
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
}

// Pindah slide otomatis setia
