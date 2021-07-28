<template>
  <div>
    <DatePicker
      :ref="uid"
      :value="value"
      :model-config="modelConfig"
      :min-date="minDate"
      :max-date="maxDate"
      :is-range="isRange"
      :is-dark="isDark"
      :title-position="titlePosition"
      :show-weeknumbers="showNumbersOfWeek"
      trim-weeks
      mode="date"
      color="primary"
      v-on="{
        ...$listeners,
        input: ($event) => $emit('input', $event),
      }"
    >
      <template #header-title="{ monthLabel, yearLabel }">
        <span class="font-semibold">{{ monthLabel }} {{ yearLabel }}</span>
      </template>
      <template #header-left-button>
        <div class="w-4 h-4">
          <!-- eslint-disable -->
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 2.17139L5 8.17139L11 14.1714" stroke="#1B1B1C" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <!-- eslint-enable -->
        </div>
      </template>
      <template #header-right-button>
        <div class="w-4 h-4">
          <!-- eslint-disable -->
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 2.17139L11 8.17139L5 14.1714" stroke="#1B1B1C" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <!-- eslint-enable -->
        </div>
      </template>
    </DatePicker>
  </div>
</template>

<script>
import uniqid from 'uniqid';
import { DatePicker, setupCalendar } from 'v-calendar';

setupCalendar({
  masks: {
    weekdays: 'W',
    input: ['YYYY/MM/DD'],
  },
});

export default {
  name: 'FormDateBase',
  props: {
    value: {
      validator: (value) => value instanceof Date || typeof value === 'object' || value === null,
      default: null,
    },
    minDate: {
      validator: (value) => value instanceof Date || typeof value === 'undefined',
      default: undefined,
    },
    maxDate: {
      validator: (value) => value instanceof Date || typeof value === 'undefined',
      default: undefined,
    },
    isRange: {
      type: Boolean,
      default: false,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
    titlePosition: {
      type: String,
      default: 'center',
    },
    showNumbersOfWeek: {
      type: [Boolean, String],
      default: false,
    },
  },
  components: {
    DatePicker,
  },
  data() {
    return {
      uid: uniqid(),
    };
  },
  computed: {
    _vc() {
      return this.$refs[this.uid];
    },
    modelConfig() {
      return {
        timeAdjust: '12:00:00',
      };
    },
  },
  methods: {
    move(event) {
      if (typeof this._vc?.move === 'function') {
        this._vc.move(event);
      }
    },
    focusDate(event) {
      if (typeof this._vc?.focusDate === 'function') {
        this._vc.focusDate(event);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin vc-primary-theme {
  --primary-100: theme('colors.primary.50');
  --primary-200: theme('colors.primary.100');
  --primary-300: theme('colors.primary.150');
  --primary-400: theme('colors.primary.200');
  --primary-500: theme('colors.primary.250');
  --primary-600: theme('colors.primary.300');
  --primary-700: theme('colors.primary.350');
  --primary-800: theme('colors.primary.400');
  --primary-900: theme('colors.primary.350');
}
::v-deep .vc-container {
  @include vc-primary-theme;
  @apply border-none;
  @apply font-open-sans;
  min-width: 352px;
  .vc-header,
  .vc-arrows-container {
    @apply py-3;
    @apply px-6;
    @apply h-14;
  }
  .vc-header {
    @apply capitalize;
  }
  .vc-arrows-container {
    @apply flex;
    @apply flex-row;
    @apply items-center;
    @apply space-x-2;
    .vc-arrow {
      @apply border-none;
      @apply w-4;
      @apply h-4;
      &:hover {
        @apply bg-transparent;
      }
    }
  }
  .vc-weeks {
    @apply px-3;
    @apply pb-3;
  }
  .vc-weekday {
    @apply text-xs;
    @apply uppercase;
    @apply font-semibold;
    @apply pt-0;
    @apply pb-4;
    @apply relative;
     &:after {
        content: '';
        @apply block;
        @apply w-full;
        @apply h-px;
        @apply bg-neutral-200;
        @apply absolute;
        @apply bottom-0;
        @apply left-1/2;
        @apply transform;
        @apply -translate-x-1/2;
     }
  }
  .vc-day {
    @apply my-1;
    &:not(.is-not-in-month).week-1,
    &.is-not-in-month.in-prev-month.week-from-end-1 {
      @apply mt-4;
    }
    &.is-not-in-month {
      .vc-day-content {
        @apply opacity-100;
        @apply text-neutral-300;
      }
    }
  }
  .vc-day-content {
    @apply text-xs;
    &.is-disabled {
      @apply opacity-100;
      @apply text-neutral-300;
    }
  }
}
</style>
