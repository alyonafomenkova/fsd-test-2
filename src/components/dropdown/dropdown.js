import './dropdown.scss';
import './dropdown.pug';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';

jQuery(function() {
  const menu = $('.iqdropdown');
  const $this = $(this);
  const clearButton = $('.iqdropdown-menu-buttons__clear');
  const setPlural = (count) => {
    if (count === 1) {
      return 'гость';
    } else if (count >= 2 && count <= 4) {
      return 'гостя';
    } else if (count === 0 || count >= 5) {
      return 'гостей';
    }
  };
  const clear = () => {
    event.preventDefault();
    $( ".iqdropdown-menu" ).find( ".iqdropdown-item-controls" ).remove();
    $('.iqdropdown').iqDropdown(options);
  };
  const options = {
    maxItems: Infinity,
    minItems: 0,
    setSelectionText: (itemCount, totalItems) => {
      if (menu.hasClass('menu-open')) {
        if (totalItems > 0) {
          clearButton.css({'visibility': 'visible'});
        } else {
          clearButton.css({'visibility': 'hidden'});
        }
        return totalItems + ' ' + setPlural(totalItems);
      }
    },
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
  };
  clearButton.click(clear);
  $('.iqdropdown').iqDropdown(options);
});
