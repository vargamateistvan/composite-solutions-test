<template>
  <div class="navigation-bar">
    <router-link class="navigation-bar-element" to="/todo">Todo</router-link>
    <router-link class="navigation-bar-element" to="/gallery"
      >Gallery</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navigation-bar {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  background: #213547;
  align-items: center;
  width: 100%;
  height: 50px;

  a.router-link-active {
    color: white;
  }

  a:hover {
    background: white;
    color: #213547;
  }

  &-element {
    color: grey;
    text-decoration: none;
    margin-left: 25px;
    padding: 10px;
    text-align: center;
  }
}
</style>
