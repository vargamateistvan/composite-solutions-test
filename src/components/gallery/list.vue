<template>
  <div class="gallery">
    <template v-for="(picture, index) in gallery" :key="index">
      <gallery-item
        :picture="picture"
        @showPicture="showPicture"
      ></gallery-item>
    </template>
    <gallery-dialog
      :showDialog="showDialog"
      @closeDialog="closeDialog"
      :gallery="gallery"
      :currentPictureId="currentPictureId"
    ></gallery-dialog>
  </div>
</template>

<script>
import axios from "axios";
import galleryItem from "./item.vue";
import galleryDialog from "./dialog.vue";

export default {
  components: { galleryItem, galleryDialog },
  data() {
    return {
      gallery: [],
      currentPictureId: null,
      showDialog: false,
    };
  },

  methods: {
    async getGallery() {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=50"
      );

      this.gallery = data;
    },
    showPicture(pictureId) {
      this.currentPictureId = pictureId;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
  },
  mounted() {
    this.getGallery();
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;

  &-show {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &-button {
    margin: 0 10px;
    padding: 5px;
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 10px;
  }
}
</style>
