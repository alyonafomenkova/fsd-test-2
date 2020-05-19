import './room-info-cards.scss';
import '../rating/rating.js';

class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.prevButtons = this.carousel.querySelectorAll('.room-info-cards__prev-link');
    this.nextButtons = this.carousel.querySelectorAll('.room-info-cards__next-link');
    this.dotButtons = this.carousel.querySelectorAll('.room-info-cards__dot');
    this.controlsButtonClick = this.controlsButtonClick.bind(this);
    this.dotButtonClick = this.dotButtonClick.bind(this);
    this.slideIndex = 1;
  }

  showSlides() {
    const slides = this.carousel.querySelectorAll('.room-info-cards__mySlides');
    let i;
    if (this.slideIndex > slides.length) {this.slideIndex = 1}
    if (this.slideIndex < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < this.dotButtons.length; i++) {
      this.dotButtons[i].className = this.dotButtons[i].className.replace(' active', '');
    }
    slides[this.slideIndex-1].style.display = 'block';
    this.dotButtons[this.slideIndex-1].className += ' active';
  }

  controlsButtonClick(n) {
    return () => {
      this.slideIndex = +this.slideIndex + n;
      this.showSlides();
    };
  }

  dotButtonClick() {
    this.slideIndex = event.target.getAttribute('data-number');
    this.showSlides();
  };

  addListeners() {
    this.prevButtons.forEach((prevButton) => {
      prevButton.addEventListener('click', this.controlsButtonClick(-1));
    });
    this.nextButtons.forEach((nextButton) => {
      nextButton.addEventListener('click', this.controlsButtonClick(1));
    });
    this.dotButtons.forEach((dotButton) => {
      dotButton.addEventListener('click', this.dotButtonClick);
    });
  }

  createCarousel() {
    this.showSlides();
    this.addListeners();
  }
}

const carousels = document.querySelectorAll('.room-info-cards__slideshow-container');

carousels.forEach((it) => {
  const carousel = new Carousel(it);
  carousel.createCarousel();
});
