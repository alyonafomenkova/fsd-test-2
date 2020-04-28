import './dropdown.scss';
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

  function clear() {
    event.preventDefault();
    // count = 0;
    // totalItems = 0;
    // console.log("CLEAR", id, "count: ", count, "totalItems: ",totalItems);
    console.log("Reset!");
    $('.counter').html('0');
    $('.iqdropdown-selection').html('0 гостей');

    ///
    // adult, children, babies - const
    // children[1].remove() в функцию removeControls(...)
    $(".iqdropdown-menu-option")[0].children[1].remove();
    $(".iqdropdown-menu-option")[1].children[1].remove();
    $(".iqdropdown-menu-option")[2].children[1].remove();
    $('.iqdropdown').iqDropdown(options);
    ///
  }

  clearButton.click(clear);

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
    onChange: function(id, count, totalItems) {
      // clearButton.click(clear);
    },
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
  };
  $('.iqdropdown').iqDropdown(options);
});
