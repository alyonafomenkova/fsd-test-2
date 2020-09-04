import '../button/button.js';
import '../logo/logo.js';
import '../modal/modal.js';
import './header.scss';

const toggleMenuButtons = document.querySelectorAll('.js-header__toggle-menu-btn');
const toggleSubmenuList = document.querySelectorAll('.header__nav-item.header__submenu');
const headerNavMenu = document.querySelectorAll('.js-header__main-nav');
const userNames = document.querySelectorAll('.js-header__user-name');
const handleSubmenuButtonClick = () => {
  const submenu = event.target.closest('.header__submenu');
  if (submenu.classList.contains('header__submenu_state_closed')) {
    submenu.classList.remove('header__submenu_state_closed');
    submenu.classList.add('header__submenu_state_opened');
  } else {
    submenu.classList.add('header__submenu_state_closed');
    submenu.classList.remove('header__submenu_state_opened');
  }
};

userNames.forEach((name) => {
  const headerWrapper = name.closest('.js-header__buttons-wrapper');
  headerWrapper.classList.add('header__buttons-wrapper_state_authorized');
});

toggleMenuButtons.forEach((button) => {
  button.classList.remove('header__toggle-menu-btn_state_without-js');
  button.classList.add('header__toggle-menu-btn_state_with-js');
});

headerNavMenu.forEach((navMenu) => {
  const wrapper = navMenu.closest('.header__content-wrapper');
  const list = navMenu.querySelector('.js-header__nav-list');
  wrapper.classList.remove('header__content-wrapper-menu_state_opened');
  wrapper.classList.add('header__content-wrapper-menu_state_closed');
});

toggleMenuButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const wrapper = button.closest('.header__content-wrapper');
    if (wrapper.classList.contains('header__content-wrapper-menu_state_closed')) {
      wrapper.classList.remove('header__content-wrapper-menu_state_closed');
      wrapper.classList.add('header__content-wrapper-menu_state_opened');
    } else {
      wrapper.classList.add('header__content-wrapper-menu_state_closed');
      wrapper.classList.remove('header__content-wrapper-menu_state_opened');
    }
  });
});

toggleSubmenuList.forEach((submenu) => {
  const button = submenu.querySelector('.header__toggle-submenu-btn');
  button.classList.remove('header__toggle-submenu-btn_state_without-js');
  button.classList.add('header__toggle-submenu-btn_state_with-js');
  submenu.addEventListener('click', handleSubmenuButtonClick)
});
