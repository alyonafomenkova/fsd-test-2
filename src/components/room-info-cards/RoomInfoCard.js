import { boundMethod } from 'autobind-decorator';

class RoomInfoCard {
  constructor(card) {
    this.card = card;
    this.slideIndex = 1;
  }

  createCard() {
    this._showSlides();
    this._addListeners();
  }

  _setupDom() {
    this.dotButtons = this.card.querySelectorAll('.js-room-info-cards__dot');
  }

  _showSlides() {
    const slides = this.card.querySelectorAll('.js-room-info-cards__slides');
    let i;

    this._setupDom();

    if (this.slideIndex > slides.length) { this.slideIndex = 1; }
    if (this.slideIndex < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].classList.remove('room-info-cards__slides_visible');
    }
    for (i = 0; i < this.dotButtons.length; i += 1) {
      this.dotButtons[i].className = this.dotButtons[i].className.replace(' room-info-cards__dot_active', '');
    }
    slides[this.slideIndex - 1].classList.add('room-info-cards__slides_visible');
    this.dotButtons[this.slideIndex - 1].className += ' room-info-cards__dot_active';
  }

  @boundMethod
  _handleControlsButtonClick(n) {
    return () => {
      this.slideIndex = Number(this.slideIndex) + n;
      this._showSlides();
    };
  }

  @boundMethod
  _handleDotButtonClick(evt) {
    this.slideIndex = evt.target.getAttribute('data-number');
    this._showSlides();
  }

  _addListeners() {
    const prevButtons = this.card.querySelectorAll('.js-room-info-cards__prev-link');
    const nextButtons = this.card.querySelectorAll('.js-room-info-cards__next-link');

    this._setupDom();
    prevButtons.forEach((prevButton) => {
      prevButton.addEventListener('click', this._handleControlsButtonClick(-1));
    });
    nextButtons.forEach((nextButton) => {
      nextButton.addEventListener('click', this._handleControlsButtonClick(1));
    });
    this.dotButtons.forEach((dotButton) => {
      dotButton.addEventListener('click', this._handleDotButtonClick);
    });
  }
}

export default RoomInfoCard;
