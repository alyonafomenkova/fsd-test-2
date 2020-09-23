import './masked-text-field.scss';
import 'inputmask/dist/jquery.inputmask';

class MaskedTextField {
  constructor(input) {
    this.input = input;
    this.settings = {
      alias: 'datetime',
      inputFormat: 'dd.mm.yyyy',
      placeholder: 'дд.мм.гггг'
    };
  }

  init() {
    $(this.input).inputmask(this.settings);
  }
}

const inputs = document.querySelectorAll('.js-masked-text-field__input');

inputs.forEach((it) => {
  const input = new MaskedTextField(it);
  input.init();
});
