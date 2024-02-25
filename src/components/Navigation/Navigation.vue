<template>
  <ul class="flex gap-14 items-center">
    <Item title="Home" />
    <Item title="Where" />
    <Item title="Edit" />
  </ul>
</template>

<script>
import Item from "@/components/Navigation/Item.vue";

export default {
  components: {Item}
}
</script>

<style lang="scss" scoped>

</style>