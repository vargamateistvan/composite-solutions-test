<template>
  <div class="gallery-item">
    <img
      :src="picture.thumbnailUrl"
      :alt="picture.title"
      @click="showPicture"
    />
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      albumId: Number,
      id: Number,
      thumbnailUrl: String,
      title: String,
      url: String,
    },
  },
  methods: {
    showPicture() {
      this.$emit("showPicture", this.picture.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.gallery-item {
  width: 150px;
  height: 150px;
}
</style>
