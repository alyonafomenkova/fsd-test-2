import 'air-datepicker/dist/js/datepicker.min.js';

class DateDropdown {
  constructor(dateDropdown) {
    this.dropdown = dateDropdown;
    this.baseOptions = {
      multipleDates: 2,
      minDate: new Date(),
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
      onShow(inst) {
        if (inst.el.value.length > 0) {
          inst.$datepicker.addClass('datepicker--selected');
        }
      },
    };
  }

  init() {
    if (this.dropdown.classList.contains('js-date-dropdown--with-to-inputs')) {
      this._initDateDropdown();
    } else if (this.dropdown.classList.contains('js-date-dropdown--filter')) {
      this._initFilterDropdown();
    } else if (this.dropdown.classList.contains('js-date-dropdown--inline')) {
      this._initInlineDropdown();
    } else {
      throw new Error('Unknown datedropdown');
    }
  }

  _createOptions(additionalOptions) {
    const options = $.extend({}, this.baseOptions, additionalOptions);
    return options;
  }

  static _setSelectedDate($datepickerInput) {
    const startDate = new Date();
    const endDate = new Date();
    startDate.setDate(startDate.getDate() + 2);
    endDate.setDate(endDate.getDate() + 5);
    const selectDates = [startDate, endDate];
    $datepickerInput.datepicker().data('datepicker').selectDate(selectDates);
  }

  static _addApplyButton($datepickerInput) {
    const applyButtonHtml = '<span class="datepicker--button" data-action="apply">Применить</span>';
    const $buttons = $datepickerInput.data('datepicker').$datepicker.find('.datepicker--buttons');
    $buttons.append(applyButtonHtml);
  }

  _initDateDropdown() {
    const $startDateInput = $(this.dropdown).find('.js-date-dropdown__input--first');
    const $endDateInput = $(this.dropdown).find('.js-date-dropdown__input--second');
    const additionalOptionsForStartInput = {
      onSelect(fd, d, picker) {
        const $applyButton = $startDateInput.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
        $startDateInput.val('');
        $endDateInput.val('');
        $applyButton.click((evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          $startDateInput.datepicker().data('datepicker').hide();
          $startDateInput.val(fd.split('-')[0]);
          $endDateInput.val(fd.split('-')[1]);
        });
        if (d) {
          picker.$datepicker.addClass('datepicker--selected');
        }
      },
    };
    const additionalOptionsForEndInput = {
      onSelect(fd, d, picker) {
        const $applyButton = $endDateInput.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
        $startDateInput.val('');
        $endDateInput.val('');
        $applyButton.click((evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          $endDateInput.datepicker().data('datepicker').hide();
          $startDateInput.val(fd.split('-')[0]);
          $endDateInput.val(fd.split('-')[1]);
        });
        if (d) {
          picker.$datepicker.addClass('datepicker--selected');
        }
      },
    };

    $startDateInput.addClass('datepicker-here');
    $startDateInput.datepicker(this._createOptions(additionalOptionsForStartInput));
    $endDateInput.datepicker(this._createOptions(additionalOptionsForEndInput));
    DateDropdown._addApplyButton($startDateInput);
    DateDropdown._addApplyButton($endDateInput);
  }

  _initInlineDropdown() {
    const $inlineDatepicker = $(this.dropdown).find('.js-date-dropdown__item--inline');
    $inlineDatepicker.addClass('datepicker-here');
    $inlineDatepicker.datepicker(this.baseOptions);
    DateDropdown._setSelectedDate($inlineDatepicker);
    $(this.dropdown).addClass('datepicker--selected');
    DateDropdown._addApplyButton($inlineDatepicker);
  }

  _initFilterDropdown() {
    const $filterDateInput = $(this.dropdown).find('.js-date-dropdown__input--filter');
    const additionalOptionsForFilterInput = {
      dateFormat: 'd M',
      onSelect(formattedDate, date, picker) {
        const $applyButton = $filterDateInput.datepicker().data('datepicker').$datepicker.find('.datepicker--button[data-action="apply"]');
        $applyButton.click((evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          $filterDateInput.datepicker().data('datepicker').hide();
        });
        if (date) {
          picker.$datepicker.addClass('datepicker--selected');
        }
      },
    };

    $filterDateInput.addClass('datepicker-here');
    $filterDateInput.datepicker(this._createOptions(additionalOptionsForFilterInput));
    DateDropdown._setSelectedDate($filterDateInput);
    DateDropdown._addApplyButton($filterDateInput);
  }
}

export default DateDropdown;
