let index = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(i) {
    index = (i + totalSlides) % totalSlides;
    slides.style.transform = `translateX(${-index * 320}px)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function preSlide() {
    showSlide(index - 1);
}

