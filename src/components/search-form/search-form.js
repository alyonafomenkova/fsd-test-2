import './search-form.scss';
import '../button/button.js';
import '../dropdown/dropdown.js';
import DateDropdown from '../date-dropdown/date-dropdown.js';

const dateDropdownList = document.querySelectorAll('.js-date-dropdown');
dateDropdownList.forEach((dateDropdown) => new DateDropdown(dateDropdown).init());
