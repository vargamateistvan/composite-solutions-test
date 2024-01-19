<template>
  <navigation-bar></navigation-bar>
  <router-view />
</template>

<script>
import navigationBar from "./components/navigation-bar.vue";
export default {
  components: { navigationBar },
};
</script>
