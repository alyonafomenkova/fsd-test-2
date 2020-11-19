import 'inputmask/dist/jquery.inputmask';

class MaskedTextField {
  constructor(input) {
    this.input = input;
    this.settings = {
      alias: 'datetime',
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'дд.мм.гггг',
    };
  }

  init() {
    $(this.input).inputmask(this.settings);
  }
}

export default MaskedTextField;
