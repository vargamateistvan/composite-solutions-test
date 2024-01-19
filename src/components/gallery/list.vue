<template>
  <div class="gallery">
    <template v-for="(picture, index) in gallery" :key="index">
      <gallery-item
        :picture="picture"
        @showPicture="showPicture"
      ></gallery-item>
    </template>
    <dialog ref="dialog">
      <div class="gallery-show">
        <input
          v-show="currentPictureId !== 1"
          class="gallery-button"
          type="button"
          value="<"
          @click="lastPicture"
        />
        <img :src="currentPicture?.url" :alt="currentPicture?.title" />
        <input
          v-show="currentPictureId !== gallery.length"
          class="gallery-button"
          type="button"
          value=">"
          @click="nextPicture"
        />
      </div>
    </dialog>
    <!-- <gallery-dialog
      :showDialog="showDialog"
      @closeDialog="closeDialog"
      :gallery="gallery"
      :currentPictureId="currentPictureId"
    ></gallery-dialog> -->
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
  computed: {
    currentPicture() {
      if (!this.currentPictureId) return;
      return this.gallery.find(
        (picture) => picture.id === this.currentPictureId
      );
    },
  },
  methods: {
    async getGallery() {
      const { data } = await axios(
        "https:jsonplaceholder.typicode.com/photos?_page=1&_limit=50"
      );

      this.gallery = data;
    },
    showPicture(pictureId) {
      this.currentPictureId = pictureId;
      this.$refs.dialog.showModal();
    },
    closeDialog() {
      this.showDialog = false;
    },
    lastPicture() {
      if (this.currentPictureId === 1) return;
      --this.currentPictureId;
    },
    nextPicture() {
      if (this.currentPictureId === this.gallery.length) return;
      ++this.currentPictureId;
    },
    listenOutsideClick() {
      const dialog = this.$refs.dialog;
      dialog.addEventListener("click", ($event) => {
        if ($event.target === dialog) {
          dialog.close();
        }
      });
    },
  },
  mounted() {
    this.getGallery();
    this.listenOutsideClick();
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
