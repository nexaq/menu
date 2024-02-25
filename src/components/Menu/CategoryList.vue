<template>
  <div class="flex flex-wrap justify-center width ml-auto mr-auto">
    <div class="w-1/3 p-4" v-for="index in 5" :key="index">
      <Dish title="Burgers" />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Dish from "@/components/Category/Category.vue";

export default defineComponent({
  components: {Dish}
})
</script>

<style scoped>
  .width {
    max-width: 790px;
  }
</style>