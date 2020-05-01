import './date-dropdown.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';

jQuery(function() {
  const $start = $('#start');
  const $end = $('#end');
  const baseOptions = {
    startDate: new Date(),
    prevHtml: '<button class="buttons datepicker--nav-prev" type="button"><span>arrow_back</span></button>',
    nextHtml: '<button class="buttons datepicker--nav-next" type="button"><span>arrow_forward</span></button>',
    navTitles: {
      days: 'MM yyyy',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2'
    },
    clearButton: true,
    autoClose: false,
  };
  const additionalOptionsForStartInput = {
    onSelect: function (formattedDate, date) {
      const $applyButton = $start.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
      $end.data('datepicker').update('minDate', date);
      $applyButton.click(() => {
        event.preventDefault();
        event.stopPropagation();
        $start.datepicker().data('datepicker').hide();
        $end.focus();
      })
    }
  };
  const additionalOptionsForEndInput = {
    onSelect: function (formattedDate, date) {
      const $applyButton = $end.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
      $start.data('datepicker').update('maxDate', date);
      $applyButton.click(() => {
        event.preventDefault();
        event.stopPropagation();
        $end.datepicker().data('datepicker').hide();
      })
    }
  };
  const addApplyButton = ($datepickerInput) => {
    const applyButtonHtml = '<span class="datepicker--button" data-action="apply">Применить</span>';
    const $buttons = $datepickerInput.data('datepicker').$datepicker.find('.datepicker--buttons');
    $buttons.append(applyButtonHtml);
  };
  const createOptions  = (additionalOptions) => {
    const options = $.extend({}, baseOptions, additionalOptions);
    return options;
  };

  $start.datepicker(createOptions(additionalOptionsForStartInput));
  $end.datepicker(createOptions(additionalOptionsForEndInput));
  addApplyButton($start);
  addApplyButton($end);
});
