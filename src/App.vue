<template>
  <div class="min-h-screen bg-super-orange">
    <Header/>
    <Banner/>
    <div class="pb-20">
      <Container>
        <Tabs v-bind:items="tabItems">
          <template v-slot:body="{ active }">
            <div v-if="active === 1">
              <Dishes />
            </div>
            <div v-if="active === 2">
              SECOND
            </div>
          </template>
        </Tabs>
      </Container>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from "@/components/Header.vue";
import Tabs from "@/components/Tabs/Tabs.vue";
import Banner from "@/components/Banner/Banner.vue";
import Container from "@/components/Container.vue";
import Dishes from "@/components/Menu/CategoryList.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: 'App',
  components: {
    Footer,
    Dishes,
    Container,
    Banner,
    Tabs,
    Header
  },
  data: () => {
    return {
      tabItems: [
        {
          key: 1,
          name: 'Food',
        },
        {
          key: 2,
          name: 'Drinks',
        },
      ]
    }
  }
});
</script>

<style lang="scss">

</style>
