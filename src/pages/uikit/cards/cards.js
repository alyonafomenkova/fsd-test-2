import './cards.scss';
import '../../../components/search-form/search-form.js';
import '../../../components/registration-form/registration-form.js';
import '../../../components/login-form/login-form.js';
import '../../../components/booking-form/booking-form.js';
import '../../../components/room-info-cards/room-info-cards.js';
import '../../../../node_modules/air-datepicker/dist/js/datepicker.min.js';

jQuery(function() {
  const $filter = $('.datepicker--onCard');
  let startDate = new Date();
  let endDate = new Date();
  startDate.setDate(startDate.getDate() + 2);
  endDate.setDate(endDate.getDate() + 5);
  const selectDates = [startDate, endDate];
  const baseOptions = {
    startDate: new Date(),
    prevHtml: '<button class="button datepicker--nav-prev" type="button"><span>arrow_back</span></button>',
    nextHtml: '<button class="button datepicker--nav-next" type="button"><span>arrow_forward</span></button>',
    navTitles: {
      days: 'MM yyyy',
      months: 'yyyy',
      years: 'yyyy1 - yyyy2'
    },
    clearButton: true,
    autoClose: false,
    range: true,
    multipleDatesSeparator: ' - ',
    dateFormat: 'dd M',
    onSelect: function (formattedDate, date) {
      const $applyButton = $filter.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
      $applyButton.click(() => {
        event.preventDefault();
        event.stopPropagation();
        $filter.datepicker().data('datepicker').hide();
      })
    },
  };

  const addApplyButton = ($datepickerInput) => {
    const applyButtonHtml = '<span class="datepicker--button" data-action="apply">Применить</span>';
    const $buttons = $datepickerInput.data('datepicker').$datepicker.find('.datepicker--buttons');
    $buttons.append(applyButtonHtml);
  };

  $filter.datepicker(baseOptions);
  addApplyButton($filter);
  $('.datepicker--onCard').datepicker().data('datepicker').selectDate(selectDates);
});
