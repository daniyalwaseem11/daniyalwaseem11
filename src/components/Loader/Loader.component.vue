<template>
  <orbit-spinner :animation-duration="1200" :size="565" color="#1884CD" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { OrbitSpinner } from "epic-spinners";
export default defineComponent({
  name: "LoaderComponent",
  components: { OrbitSpinner },
});
</script>
