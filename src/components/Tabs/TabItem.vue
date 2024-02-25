<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  props: {
    class: String,
    text: { type: String, required: true }
  },
})
</script>

<template>
  <a href="#" @click.prevent :class="`block p-2 text-4xl text-super-gold ${this.class}`">
    {{ text }}
  </a>
</template>

<style scoped>

</style>