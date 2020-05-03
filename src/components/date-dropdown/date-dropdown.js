import './date-dropdown.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';

jQuery(function() {
  const $start = $('#start1-id');
  const $end = $('#end1-id');
  const $filter = $('#filter1-id');
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
    range: true,
    multipleDatesSeparator: ' - ',
  };
  const additionalOptionsForStartInput = {
    onSelect: function (fd, d, picker) {
      const $applyButton = $start.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
      $start.val('');
      $end.val('');
        $applyButton.click(() => {
          event.preventDefault();
          event.stopPropagation();
          $start.datepicker().data('datepicker').hide();
          $start.val(fd.split('-')[0]);
          $end.val(fd.split('-')[1]);
        })
    }
  };
  const additionalOptionsForFilterInput = {
    dateFormat: 'dd M',
    onSelect: function (formattedDate, date) {
      const $applyButton = $filter.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
      $applyButton.click(() => {
        event.preventDefault();
        event.stopPropagation();
        $filter.datepicker().data('datepicker').hide();
      })
    }
  };
  const additionalOptionsForEndInput = {
    onSelect: function (fd, d, picker) {
      const $applyButton = $end.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
      $start.val('');
      $end.val('');
      $applyButton.click(() => {
        event.preventDefault();
        event.stopPropagation();
        $end.datepicker().data('datepicker').hide();
        $start.val(fd.split('-')[0]);
        $end.val(fd.split('-')[1]);
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

  $start.addClass('datepicker-here');
  $start.datepicker(createOptions(additionalOptionsForStartInput));
  $end.datepicker(createOptions(additionalOptionsForEndInput));
  $filter.datepicker(createOptions(additionalOptionsForFilterInput));
  addApplyButton($start);
  addApplyButton($end);
  addApplyButton($filter);
});
