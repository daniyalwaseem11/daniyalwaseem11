<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "../Footer/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
