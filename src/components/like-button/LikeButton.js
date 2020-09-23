import './like-button.scss';

const ACTIVE_BUTTON_CLASS = 'like-button_active';

class LikeButton {
  constructor(likeButton) {
    this.likeButton = likeButton;
  }

  init() {
    this._setupBind();
    this._setIconForActiveButton();
    this.likeButton.addEventListener('click', this._handleLikeButtonClick);
  }

  _setupBind() {
    this._handleLikeButtonClick = this._handleLikeButtonClick.bind(this);
  }

  _setIconForActiveButton() {
    if (this.likeButton.classList.contains(ACTIVE_BUTTON_CLASS)) {
      this._toggleLikeIcon(this.likeButton);
    }
  }

  _toggleLikeIcon(button) {
    const likeIcon = button.querySelector('.js-like-button__icon');
    const isActiveButton = button.classList.contains(ACTIVE_BUTTON_CLASS);

    isActiveButton ? likeIcon.innerHTML = 'favorite' : likeIcon.innerHTML = 'favorite_border';
  }

  _updateCountOfLikes(button) {
    const countOfLikes = button.querySelector('.js-like-button__count-likes');
    const isActiveButton = button.classList.contains(ACTIVE_BUTTON_CLASS);
    let oldValue = Number(countOfLikes.innerText);
    let newValue;

    isActiveButton ? (newValue = oldValue + 1) : (newValue = oldValue - 1);
    countOfLikes.innerHTML = newValue;
  }

  _handleLikeButtonClick(evt) {
    evt.stopPropagation();
    const targetButton = evt.target;
    targetButton.classList.toggle(ACTIVE_BUTTON_CLASS);
    this._toggleLikeIcon(targetButton);
    this._updateCountOfLikes(targetButton);
  }
}

const likeButtons = document.querySelectorAll('.js-like-button');

likeButtons.forEach((it) => {
  const likeButton = new LikeButton(it);
  likeButton.init();
});
