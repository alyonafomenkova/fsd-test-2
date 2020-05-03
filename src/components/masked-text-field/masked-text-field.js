import './masked-text-field.scss';
import 'inputmask/dist/jquery.inputmask';

jQuery(function() {
  const $selector = $('.masked-text-field__input');
  const options = {
    alias: 'datetime',
    inputFormat: 'dd.mm.yyyy',
    placeholder: 'дд.мм.гггг'
  }
  $selector.inputmask(options);
});
