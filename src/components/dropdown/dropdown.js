import './dropdown.scss';
import '../../../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.js';

jQuery(function() {
  const menu = $('.iqdropdown');
  const clearButton = $('.iqdropdown-menu-buttons__clear');
  const $this = $(this);
  const setPlural = (count) => {
    if (count === 1) {
      return 'гость';
    } else if (count >= 2 && count <= 4) {
      return 'гостя';
    } else if (count === 0 || count >= 5) {
      return 'гостей';
    }
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
    onChange: (id, count, totalItems) => {
      if (totalItems > 0) {
        clearButton.click((event) => {
          event.preventDefault();
          count = 0;
          totalItems = 0;
          console.log("CLEAR", id, count, totalItems);
        });
      }
      console.log("onChange: ", id, count, totalItems);//
      //this.setSelectionText(totalItems);
    },
    // buttons to increment/decrement
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-item-display',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter'
    },
  };

  $('.iqdropdown').iqDropdown(options);

  $this.off('click').on('click', $this.click((event) => {
      console.log("$this: ", $this);//
      //event.preventDefault();
    console.log("event.target: ", event.target);
    const cond1 = $(event.target).hasClass('iqdropdown-selection');
    const cond2 = $(event.target).hasClass('iqdropdown-menu-buttons__apply');
      if (cond1 || cond2) {
        console.log("toggleClass: ", event.target);
        //$this.toggleClass('menu-open');
      }
    }));

  //});


  //console.log("totalItems: ", options.totalItems);
});
