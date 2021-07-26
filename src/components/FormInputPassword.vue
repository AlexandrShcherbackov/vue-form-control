<template>
  <FormInput
    size="normal"
    :palette="palette"
    :value="value"
    :type="_type"
    :disabled="_disabled"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="$slots.label" #label>
      <slot name="label" />
    </template>
    <template #append>
      <slot name="append" v-bind="{ shown: localShown, show, hide }">
        <div
          v-if="value.length"
          class="flex flex-row items-center justify-center cursor-pointer"
          @click.stop="toggle"
        >
          <span class="text-13px underline text-primary-300 select-none">
            <template v-if="shown">
              Скрыть
            </template>
            <template v-else>
              Показать
            </template>
          </span>
        </div>
      </slot>
    </template>
  </FormInput>
</template>

<script>
import FormInput from '@/components/FormInput.vue';

export default {
  name: 'FormInputPassword',
  components: {
    FormInput,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    palette: {
      type: String,
      default: 'white',
    },
    onToggle: {
      type: Function,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledIfHidden: {
      type: Boolean,
      default: false,
    },
    shown: {
      type: Boolean,
    },
  },
  data() {
    return {
      localShown: this.shown,
    };
  },
  computed: {
    _type() {
      if (this.localShown) {
        return 'text';
      }
      return 'password';
    },
    _disabled() {
      let { disabled } = this;
      if (this.disabledIfHidden && !this.localShown) {
        disabled = disabled || !this.localShown;
      }
      return disabled;
    },
  },
  methods: {
    hide() {
      this.localShown = false;
      this.$emit('hidden');
      this.$emit('update:shown', false);
    },
    show() {
      this.localShown = true;
      this.$emit('shown');
      this.$emit('update:shown', true);
    },
    defaultToggle() {
      if (this.localShown) {
        this.hide();
      } else {
        this.show();
      }
    },
    toggle() {
      if (typeof this.onToggle === 'undefined') {
        this.defaultToggle();
      } else {
        const { shown: localShown, hide, show } = this;
        this.onToggle({ shown: localShown, hide, show });
      }
    },
  },
};
</script>
