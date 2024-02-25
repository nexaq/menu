<template>
  <footer class="flex justify-between">
    <Container>
      <div class="grid-cols-2 grid mb-10 items-center">
        <div class="contacts">
          <h3 class="text-super-gold text-4xl mb-5">Some Restaurant</h3>
          <div class="border-b-2 border-b-white opacity-25 mb-5" />
          <div class="text-white text-xl">MONDAY - SATURDAY: 11 A.M. to 2 P.M.</div>
          <div class="text-white text-xl mb-5">SUNDAY - 11 A.M. to 8 P.M.</div>
          <div class="border-b-2 border-b-white opacity-25 mb-5" />
          <div class="text-white text-lg mb-5">
            Somewhere street 77 <br> Russia, Moscow
          </div>
        </div>
        <div>
          <video src="@/assets/burger.mp4" autoplay muted loop class="video aspect-square object-cover rounded-full" />
        </div>
      </div>
    </Container>

  </footer>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Container from "@/components/Container.vue";

export default defineComponent({
  components: {Container},
})
</script>

<style scoped>
  .video {
    height: 100%;
    aspect-ratio: 1/1;
  }
  .contacts {
    max-width: 400px;
  }
</style>