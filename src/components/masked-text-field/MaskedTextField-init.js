import 'inputmask/dist/jquery.inputmask';
import MaskedTextField from './MaskedTextField';

const inputs = document.querySelectorAll('.js-masked-text-field__input');

inputs.forEach((it) => {
  const input = new MaskedTextField(it);
  input.init();
});
