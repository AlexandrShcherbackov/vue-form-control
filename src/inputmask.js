import Vue from 'vue';
import Inputmask from 'inputmask/lib/inputmask';
import 'inputmask/lib/extensions/inputmask.numeric.extensions';

Vue.directive('mask', {
  bind: (el, binding) => {
    Inputmask(binding.value).mask(el);
  },
  unbind: (el) => {
    if (typeof el.inputmask?.remove === 'function') {
      el.inputmask.remove();
    }
  },
});
