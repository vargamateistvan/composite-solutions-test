<template>
  <dialog ref="dialog">
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
        this.$refs.dialog.showModal();
      } else {
        this.$emit("closeDialog");
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
dialog::backdrop {
  background: rgba(0, 0, 0, 0.75);
}
</style>
