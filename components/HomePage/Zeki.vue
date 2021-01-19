<template>
  <transition name="list">
    <div
      id="smallBanner"
      class="small-banner hidden-sm hidden-xs"
      v-show="bannerActive"
    >
      <div class="global-container">
        <a href="https://zeki.vatanbilgisayar.com/">
          <img
            src="https://cdn.vatanbilgisayar.com/Upload/BANNER//zeki/zeki2.jpg"
            alt="small banner"
            class="img-responsive small-banner__image lazy-init"
          />
        </a>
        <div
          id="smallBannerHide"
          class="small-banner__button"
          @click="bannerActive = false"
        >
          <span class="small-banner__text">Gizle</span>
          <span><i class="fas fa-times fa-lg"></i></span>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      bannerActive: true
    };
  },
  components: {},
  computed: {},
  props: {},
  methods: {
    RemoveBanner(event) {
      var Target = event.target;
      Target.classList.elementParent.remove("");
    }
  }
};
</script>
<style scoped>
.list-enter,
.list-leave-to {
  visibility: hidden;
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
</style>
