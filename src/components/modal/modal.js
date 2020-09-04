import '../login-form/login-form.js';
import '../modal/modal.scss';
import '../registration-form/registration-form.js';

const body = document.querySelector('body');
const loginButton = document.querySelector('.button--login');
const registerButton = document.querySelector('.button--register');
const loginPopup = document.querySelector('.js-login-modal');
const registrationPopup = document.querySelector('.js-registration-modal');
const loginOverlay = document.querySelector('.js-login-modal__overlay');
const registrationOverlay = document.querySelector('.js-registration-modal__overlay');
const SwitchingClassName = {
  LOGIN: 'login-modal__show',
  REGISTER: 'registration-modal__show'
};
const KeyCode = {
  ESC: '27'
};

const hidePopups = () => {
  hideElementByClassName(loginPopup, SwitchingClassName.LOGIN);
  hideElementByClassName(registrationPopup, SwitchingClassName.REGISTER);
};

const hideElementByClassName = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
};

const toggleClassOnElement = (element, className) => {
  element.classList.toggle(className);
};

const handleLoginButtonClick = () => {
  toggleClassOnElement(loginPopup, SwitchingClassName.LOGIN);
};

const handleRegisterButtonClick = () => {
  toggleClassOnElement(registrationPopup, SwitchingClassName.REGISTER);
};

const handleEscKeydown = (evt) => {
  if (evt.keyCode == KeyCode.ESC) {
    hidePopups();
  }
};

if (loginOverlay) {
  loginOverlay.addEventListener('click', hidePopups);
}

if (registrationOverlay) {
  registrationOverlay.addEventListener('click', hidePopups);
}

loginButton.addEventListener('click', handleLoginButtonClick);
registerButton.addEventListener('click', handleRegisterButtonClick);
body.addEventListener('keydown', handleEscKeydown);
