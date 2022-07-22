<template>
  <div>
    <Header />
    <div>
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "../Footer/Footer.vue";
import Header from "../Header/Header.vue";
export default defineComponent({
  components: {
    Footer,
    Header,
  },
});
</script>
