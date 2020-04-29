import './masked-text-field.scss';
import 'jquery-mask-plugin';


jQuery(function() {
  console.log("MASK");
  $('.masked-text-field_date').mask('00.00.0000');
  // $('.masked-text-field_date').mask('00.00.0000', {
  //   translation: {
  //     'Z': {
  //       pattern: /[0-9]/,
  //       optional: true
  //     }
  //   }
  // });
});
