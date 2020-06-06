import './date-dropdown.scss';
import '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';

class DateDropdown {
  constructor(dateDropdown) {
    this.dropdown = dateDropdown;
    this.baseOptions = {
      multipleDates: 2,
      startDate: new Date(),
      prevHtml: '<button class="button datepicker--nav-prev" type="button"><span>arrow_back</span></button>',
      nextHtml: '<button class="button datepicker--nav-next" type="button"><span>arrow_forward</span></button>',
      navTitles: {
        days: 'MM yyyy',
      },
      clearButton: true,
      autoClose: false,
      range: true,
      multipleDatesSeparator: ' - ',
    };
  }

  createOptions(additionalOptions) {
    const options = $.extend({}, this.baseOptions, additionalOptions);
    return options;
  };

  setSelectedDate($datepickerInput) {
    let startDate = new Date();
    let endDate = new Date();
    startDate.setDate(startDate.getDate() + 2);
    endDate.setDate(endDate.getDate() + 5);
    const selectDates = [startDate, endDate];
    $datepickerInput.datepicker().data('datepicker').selectDate(selectDates);
  }

  addApplyButton($datepickerInput) {
    const applyButtonHtml = '<span class="datepicker--button" data-action="apply">Применить</span>';
    const $buttons = $datepickerInput.data('datepicker').$datepicker.find('.datepicker--buttons');
    $buttons.append(applyButtonHtml);
  };

  initDateDropdown() {
    const $startDateInput = $(this.dropdown).find('.js-date-dropdown__input--first');
    const $endDateInput = $(this.dropdown).find('.js-date-dropdown__input--second');
    const additionalOptionsForStartInput = {
     onSelect: function (fd, d, picker) {
      const $applyButton = $startDateInput.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
       $startDateInput.val('');
       $endDateInput.val('');
        $applyButton.click(() => {
          event.preventDefault();
          event.stopPropagation();
          $startDateInput.datepicker().data('datepicker').hide();
          $startDateInput.val(fd.split('-')[0]);
          $endDateInput.val(fd.split('-')[1]);
        });
     }
    };
    const additionalOptionsForEndInput = {
      onSelect: function (fd, d, picker) {
        const $applyButton = $endDateInput.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
        $startDateInput.val('');
        $endDateInput.val('');
        $applyButton.click(() => {
          event.preventDefault();
          event.stopPropagation();
          $endDateInput.datepicker().data('datepicker').hide();
          $startDateInput.val(fd.split('-')[0]);
          $endDateInput.val(fd.split('-')[1]);
        });
      }
    };

    $startDateInput.addClass('datepicker-here');
    $startDateInput.datepicker(this.createOptions(additionalOptionsForStartInput));
    $endDateInput.datepicker(this.createOptions(additionalOptionsForEndInput));
    this.addApplyButton($startDateInput);
    this.addApplyButton($endDateInput);
  }

  initInlineDropdown() {
    const $inlineDatepicker = $(this.dropdown).find('.js-date-dropdown__item--inline');
    $inlineDatepicker.addClass('datepicker-here');
    $inlineDatepicker.datepicker(this.baseOptions);
    this.setSelectedDate($inlineDatepicker);
    this.addApplyButton($inlineDatepicker);
  }

  initFilterDropdown() {
    const $filterDateInput = $(this.dropdown).find('.js-date-dropdown__input--filter');
    const additionalOptionsForFilterInput = {
      dateFormat: 'd M',
      onSelect: function (formattedDate, date) {
        const $applyButton = $filterDateInput.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
        $applyButton.click(() => {
          event.preventDefault();
          event.stopPropagation();
          $filterDateInput.datepicker().data('datepicker').hide();
        })
      },
    };

    $filterDateInput.addClass('datepicker-here');
    $filterDateInput.datepicker(this.createOptions(additionalOptionsForFilterInput));
    this.setSelectedDate($filterDateInput);
    this.addApplyButton($filterDateInput);
  }

  init() {
    if (this.dropdown.classList.contains('js-date-dropdown--with-to-inputs')) {
      this.initDateDropdown();
    } else if (this.dropdown.classList.contains('js-date-dropdown--filter')) {
      this.initFilterDropdown();
    } else if (this.dropdown.classList.contains('js-date-dropdown--inline')) {
      this.initInlineDropdown();
    } else {
      throw new Error('Unknown datedropdown')
    }
  }
}

export default DateDropdown;
