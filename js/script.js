let index = 0;
const slides = document.querySelector(".slides");
const indicators = document.querySelectorAll(".indicator");

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    index = (index + 1) % indicators.length;
    updateSlider();
}

setInterval(nextSlide, 3000);

indicators.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        index = i;
        updateSlider();
    });
});
