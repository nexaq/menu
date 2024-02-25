<template>
  <Container>
    <header class="pt-9 flex justify-between">
      <div class="font-bold text-3xl text-white underline">Some Restaurant</div>
      <Navigation />
    </header>
  </Container>
</template>

<script>
import Container from "@/components/Container.vue";
import Navigation from "@/components/Navigation/Navigation.vue";

export default {
  components: {Navigation, Container}
}
</script>

<style lang="scss" scoped>

</style>