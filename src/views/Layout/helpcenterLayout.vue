<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Footer from "../Footer/Footer.vue";
export default defineComponent({
  components: {
    Footer,
  },
});
</script>
