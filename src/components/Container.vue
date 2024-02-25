<template>
  <div class="container w-full ml-auto mr-auto max-w-96">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>