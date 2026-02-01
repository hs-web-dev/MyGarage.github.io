let current = 0;
const totalSlides = 12;
const slides = document.getElementById("slides");

function updateSlider() {
    const step = 100 / totalSlides; // pourcentage par slide
    slides.style.transform = `translateX(-${current * step}%)`;
}

function changeSlide(direction) {
    current += direction;

    if (current < 0) current = 0;
    if (current > totalSlides - 1) current = totalSlides - 1;

    updateSlider();
}

updateSlider();
