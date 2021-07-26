<template>
  <div id="app" class="flex flex-row flex-wrap items-start justify-start -ml-5 p-8 bg-gray-400 w-full h-screen">
    <FormInput
      v-model="textInput1"
      placeholder="text placeholder 1"
      class="w-52 pl-5 pb-5"
      @keyup.enter="enterHandler('textInput2')"
    >
      <template #label>
        Input type text
      </template>
    </FormInput>
    <FormInput
      v-model="textInput2"
      ref="textInput2"
      size="normal"
      placeholder="text placeholder 2"
      invalid
      class="w-52 pl-5 pb-5"
    >
      <template #label>
        invalid Input type text
      </template>
    </FormInput>
    <FormInput
      v-model="textInput3"
      size="auto"
      placeholder="text placeholder 3"
      classes="rounded-lg"
      class="w-52 pl-5 pb-5"
    >
      <template #label>
        Input type text height auto
      </template>
    </FormInput>
    <FormInput
      v-model="textInput4"
      type="number"
      placeholder="text placeholder 4"
      class="w-52 pl-5 pb-5"
    >
      <template #label>
        Input type number
      </template>
      <template #append>
        <div class="flex flex-col">
          <button
            class="flex items-center justify-center w-8 h-1/2 border-l border-b border-whitesmoke"
            @click="increment"
          >
            <span class="vertical-arrow"></span>
          </button>
          <button
            class="flex items-center justify-center border-l border-t border-whitesmoke w-8 h-1/2 -m-t-1"
            @click="decrement"
          >
            <span class="vertical-arrow active"></span>
          </button>
        </div>
      </template>
    </FormInput>
    <FormInput
      v-model="textInput5"
      placeholder="text placeholder 5"
      class="w-52 pl-5 pb-5"
      @click="inputClickHandler"
    >
      <template #prepend>
        <div class="flex justify-center items-center cursor-pointer">
          <img src="@/assets/cloud.svg" alt="">
        </div>
      </template>
    </FormInput>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput.vue';

export default {
  name: 'App',
  components: {
    FormInput,
  },
  data() {
    return {
      textInput1: 'textInput1',
      textInput2: 'textInput2',
      textInput3: 'textInput3',
      textInput4: 10,
      textInput5: '',
    };
  },
  methods: {
    increment() {
      this.textInput4 = Number(this.textInput4) + 1;
    },
    decrement() {
      this.textInput4 = Number(this.textInput4) - 1;
    },
    enterHandler(v) {
      this.$refs[v].focusInput();
    },
    inputClickHandler(e, api) {
      if (api) {
        api.api.focusInput();
      }
    },
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
