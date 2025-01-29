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
const trackReviews = document.querySelector('.carousel-track-reviews');
const cardsReviews = document.querySelectorAll('.carousel-card-reviews');
const prevButtonReviews = document.getElementById('prevButtonReviews');
const nextButtonReviews = document.getElementById('nextButtonReviews');

let currentIndexReviews = 0;

function updateCarouselReviews() {
    const cardWidth = cardsReviews[0].getBoundingClientRect().width;
    trackReviews.style.transform = `translateX(-${currentIndexReviews * cardWidth}px)`;
}

nextButtonReviews.addEventListener('click', () => {
    if (currentIndexReviews < cardsReviews.length - 1) {
        currentIndexReviews++;
        updateCarouselReviews();
    }
});

prevButtonReviews.addEventListener('click', () => {
    if (currentIndexReviews > 0) {
        currentIndexReviews--;
        updateCarouselReviews();
    }
});

window.addEventListener('resize', updateCarouselReviews);
