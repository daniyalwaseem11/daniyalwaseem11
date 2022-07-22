<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "../Footer/Footer.vue";
import Header from "../Header/Header.vue";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>
