<template>
  <v-app>
    <NavMenu />
    <Toobar />
    <Carousel />
    <Footer />
  </v-app>
</template>

<script>
import NavMenu from "./components/NavMenu.vue";
import Carousel from "./components/Carousel.vue";
import Toobar from "./components/Toobar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",

  components: { NavMenu, Carousel, Toobar, Footer },

  data: () => ({
    //
  }),
};
</script>
