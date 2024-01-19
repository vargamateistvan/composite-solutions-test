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

<style lang="scss">
input[type="button"] {
  margin-left: 10px;
  padding: 5px;
  font-size: 16px;
  background: #213547;
  color: white;
}

input[type="text"] {
  padding: 5px;
  font-size: 16px;
}
</style>
