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

  _setupBind() {
    this._handleControlsButtonClick = this._handleControlsButtonClick.bind(this);
    this._handleDotButtonClick = this._handleDotButtonClick.bind(this);
  }

  _showSlides() {
    const slides = this.card.querySelectorAll('.js-room-info-cards__mySlides');
    let i;

    this._setupDom();

    if (this.slideIndex > slides.length) { this.slideIndex = 1; }
    if (this.slideIndex < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'none';
    }
    for (i = 0; i < this.dotButtons.length; i += 1) {
      this.dotButtons[i].className = this.dotButtons[i].className.replace(' room-info-cards__dot_active', '');
    }
    slides[this.slideIndex - 1].style.display = 'block';
    this.dotButtons[this.slideIndex - 1].className += ' room-info-cards__dot_active';
  }

  _handleControlsButtonClick(n) {
    return () => {
      this.slideIndex = +this.slideIndex + n;
      this._showSlides();
    };
  }

  _handleDotButtonClick(evt) {
    this.slideIndex = evt.target.getAttribute('data-number');
    this._showSlides();
  }

  _addListeners() {
    const prevButtons = this.card.querySelectorAll('.js-room-info-cards__prev-link');
    const nextButtons = this.card.querySelectorAll('.js-room-info-cards__next-link');

    this._setupDom();
    this._setupBind();
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

const cards = document.querySelectorAll('.js-room-info-cards__slideshow-container');

cards.forEach((it) => {
  const card = new RoomInfoCard(it);
  card.createCard();
});
