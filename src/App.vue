<template>
  <div id="app" class="flex flex-row flex-wrap items-center justify-center -ml-5 p-8 bg-gray-400 w-full h-screen">
    <FormDateBase
      v-model="dateA.current"
      :min-date="dateA.minDate"
      :max-date="dateA.maxDate"
      show-numbers-of-week
    />
  </div>
</template>

<script>
import FormDateBase from '@/components/FormDateBase.vue';

export default {
  name: 'App',
  components: {
    FormDateBase,
  },
  data() {
    return {
      dateA: {
        current: new Date('December 17, 1995 03:24:00'),
        minDate: new Date('December 17, 1985 03:24:00'),
        maxDate: new Date('December 17, 2005 03:24:00'),
      },
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vertical-arrow {
  @apply relative;
  @apply inline-block;
  width: 10px;
  height: 10px;

  &:before, &:after {
    @apply block;
    @apply absolute;
    @apply top-2/4;
    content: '';
    width: 6.5px;
    height: 1.5px;
    border-radius: 1px;
    transition: all ease 0.2s;
    background-color: #434343;
  }

  &:before {
    @apply left-0;
    transform: translateY(-20%) rotate(45deg);
  }

  &:after {
    @apply right-0;
    transform: translateY(-20%) rotate(-45deg);
  }

  &.active {
    &:before {
      transform: translateY(-50%) rotate(-45deg);
    }

    &:after {
      transform: translateY(-50%) rotate(45deg);
    }
  }
}
</style>
