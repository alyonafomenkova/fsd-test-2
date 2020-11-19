import Dropdown from './Dropdown';

const dropdowns = document.querySelectorAll('.js-dropdown');

dropdowns.forEach((it) => {
  const dropdown = new Dropdown(it);
  dropdown.init();
});
