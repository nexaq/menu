<template>
  <div>
    <div class="header ml-auto mr-auto flex justify-between">
      <TabItem
          v-for="{ name, key } in items"
          :text="name"
          :key="key"
          @click="tabClick(key)"
          :class="this.active === key ? 'border-b-super-red border-b-4' : ''"
      />
    </div>
    <div class="p-6 pt-12 pb-12">
      <slot name="body" :active="active"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import TabItem from "@/components/Tabs/TabItem.vue";


export default defineComponent({
  name: 'App',
  components: {TabItem},
  props: {
    items: {
      type: Array as PropType<Array<{ name: string, key: number }>>,
      required: true,
    }
  },
  methods: {
    tabClick(key: number) {
      this.active = key;
    }
  },
  data: function () {
    return {
      active: this.items[0].key,
    }
  }
});
</script>

<style lang="scss" scoped>
.header {
  max-width: 381px;
}
</style>