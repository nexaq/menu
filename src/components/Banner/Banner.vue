<template>
  <Container>
    <div class="min-h-screen flex items-center">
      <div class="banner relative overflow-hidden">
        <h1 class="font-bold text-super-gold text-super-big title block">
          <span class="relative z-10">BEST BBQ</span>
          <img src="./food.png" alt="BBQ" class="foodImage absolute block w-4/5">
        </h1>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";

export default {
  components: {Container}
}
</script>

<style lang="scss" scoped>
.banner {
  height: 850px;
}

.title {
  margin-top: 100px;
}

.foodImage {
  top: 15%;
  left: -5%;
}
</style>