const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.carousel-card');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;

function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);


// --------------------------------------------------------------
document.getElementById('nextButton2').addEventListener('click', function() {
    moveCarousel(1);
});

document.getElementById('prevButton2').addEventListener('click', function() {
    moveCarousel(-1);
});

let currentIndex2 = 0;

function moveCarousel(direction) {
    const carouselTrack = document.querySelector('.carousel-track');
    const totalItems = document.querySelectorAll('.carousel-card').length;
    currentIndex2 += direction;

    if (currentIndex2 < 0) {
        currentIndex2 = totalItems - 1;  // Volta para o último item
    } else if (currentIndex >= totalItems) {
        currentIndex2 = 0;  // Vai para o primeiro item
    }

    const offset = -currentIndex2 * 100;  // Calcula o deslocamento baseado no índice
    carouselTrack.style.transform = `translateX(${offset}%)`;
}
