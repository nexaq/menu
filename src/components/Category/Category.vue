<template>
  <div :class="classNames(`p-7 cursor-pointer gradient rounded-3xl shadow`, this.class)">
    <div class="pt-8 pb-10">
      <img src="@/assets/burger-1.png" alt="" class="block ml-auto mr-auto" />
    </div>
    <div class="text-2xl text-white text-center">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import classNames from "classnames";

export default defineComponent({
  methods: {classNames},
  props: {
    title: {
      required: true,
      type: String,
    },
    class: {
      type: String,
    }
  }
})
</script>

<style scoped>
  .gradient {
    background: linear-gradient(180deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 100%);
  }
  .shadow {
    box-shadow: 3px 5px 21px 0 rgba(0,0,0,0.25);
  }
</style>