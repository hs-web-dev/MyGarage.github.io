let current = 0;
const slides = document.getElementById("slides");
const totalSlides = slides.children.length;

function updateSlider() {
    slides.style.transform = `translateX(-${current * 100}%)`;
}

window.changeSlide = function(direction) {
    current += direction;

    if (current < 0) current = 0;
    if (current > totalSlides - 1) current = totalSlides - 1;

    updateSlider();
};

updateSlider();

