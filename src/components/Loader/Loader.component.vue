<template>
  <orbit-spinner :animation-duration="1200" :size="565" color="#1884CD" />
</template>

<script>
import { OrbitSpinner } from "epic-spinners";
export default {
  name: "LoaderComponent",
  components: { OrbitSpinner },
};
</script>
