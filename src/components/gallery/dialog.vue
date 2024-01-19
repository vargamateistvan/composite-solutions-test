<template>
  <dialog ref="dialog" @keydown.right="nextPicture" @keydown.left="lastPicture">
    <div class="gallery-show">
      <input
        v-show="pictureId !== 1"
        class="gallery-button"
        type="button"
        value="<"
        @click="lastPicture"
      />
      <img :src="currentPicture?.url" :alt="currentPicture?.title" />
      <input
        v-show="pictureId !== gallery.length"
        class="gallery-button"
        type="button"
        value=">"
        @click="nextPicture"
      />
    </div>
  </dialog>
</template>

<script>
export default {
  props: {
    gallery: Array,
    currentPictureId: Number,
    showDialog: Boolean,
  },
  watch: {
    showDialog: function (newVal) {
      if (newVal) {
        this.pictureId = this.currentPictureId;
        this.$refs.dialog.showModal();
      }
    },
  },
  data() {
    return {
      pictureId: 0,
    };
  },
  computed: {
    currentPicture() {
      if (!this.pictureId) return;

      return this.gallery.find((picture) => picture.id === this.pictureId);
    },
  },
  methods: {
    lastPicture() {
      if (this.pictureId === 1) return;
      --this.pictureId;
    },
    nextPicture() {
      if (this.pictureId === this.gallery.length) return;
      ++this.pictureId;
    },
    listenOutsideClick() {
      const dialog = this.$refs.dialog;
      dialog.addEventListener("click", ($event) => {
        if ($event.target === dialog) {
          dialog.close();
          this.$emit("closeDialog");
        }
      });
    },
  },
  mounted() {
    this.listenOutsideClick();
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.75);
  }

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
