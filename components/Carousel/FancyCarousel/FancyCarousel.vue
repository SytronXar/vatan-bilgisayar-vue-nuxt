<template>
  <div class="fancy-modal-body fancy-modal-list">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12">
          <h4>{{ message }}</h4>
        </div>
        <div class="col-xs-12">
          <div
            id="popupBundleList"
            data-productlineid="0"
            class="owl-modal-slider-bundle owl-carousel owl-theme owl-loaded owl-drag"
            :class="{ 'owl-grab': owlGrab }"
          >
            <div class="owl-stage-outer" @mousedown="StartGrab">
              <div
                class="owl-stage"
                :style="{
                  transform: 'translate3d(' + owlStageX + 'px, 0px, 0px)',
                  transition: 'all 0.25s  ease 0s',
                  width: owlStageWidth + 'px'
                }"
              >
                <!-- Owl button -->
                <FancyCarouselButton
                  :productId="product.id"
                  v-for="product in Products"
                  :key="product.id"
                />
              </div>
            </div>
            <div class="owl-nav">
              <button
                type="button"
                role="presentation"
                class="owl-prev"
                @click="onNavClick(1)"
              >
                <span
                  class="btn-carousel-controls icon-angle-left"
                ></span></button
              ><button
                type="button"
                role="presentation"
                class="owl-next disabled"
                @click="onNavClick(-1)"
              >
                <span class="btn-carousel-controls icon-angle-right"></span>
              </button>
            </div>
            <div class="owl-dots">
              <CarouselDot
                @clicked="onDotClick"
                :outerLenght="outerLenght"
                :owlStageX="owlStageX"
                :dotNumber="n"
                v-for="n in nDot"
                :key="n"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import FancyCarouselButton from "@/components/Carousel/FancyCarousel/FancyCarouselButton";
import CarouselDot from "@/components/Carousel/CarouselDot";
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  components: {
    FancyCarouselButton,
    CarouselDot
  },
  computed: {
    owlStageWidth() {
      return this.carouselItemX * this.nItem;
    },
    nDot() {
      return Number(
        (
          this.owlStageWidth /
          (this.carouselItemX * this.nCarouselItem)
        ).toFixed()
      );
    },
    outerLenght() {
      return this.nCarouselItem * this.carouselItemX;
    },
    minStageX() {
      return this.outerLenght - this.owlStageWidth;
    },
    carouselItemX() {
      return this.carouselItemWidth + this.carouselItemMarginR;
    },
    Products(){
      return this.$store.state.data
    },
    nItem(){
      return this.Products.length
    }
  },
  data() {
    return {
      carouselItemWidth: 289.333,
      carouselItemMarginR: 6,
      owlStageX: 0,
      owlGrab: false,
      grabInterval: undefined,
      mouseX: 0,
      nCarouselItem: 3
    };
  },
  methods: {
    onDotClick(dotNumber) {
      var toStageX = (dotNumber - 1) * this.outerLenght * -1;
      if (toStageX < this.minStageX) this.owlStageX = this.minStageX;
      else this.owlStageX = toStageX;
    },
    onNavClick(way) {
      var toStageX = this.owlStageX + this.carouselItemX * way;
      if (toStageX > 0) this.owlStageX = 0;
      else if (toStageX < this.minStageX) this.owlStageX = this.minStageX;
      else this.owlStageX = toStageX;
    },
    SetOwlStage(toStageX) {
      /*  if (toStageX > 0) this.owlStageX = 0;
      else if (toStageX < this.minStageX) this.owlStageX = this.minStageX;
      else  */ this.owlStageX = toStageX;
    },

    StartGrab(event) {
      console.log("interval start ");
      this.owlGrab = true;
      var currentMouseX = event.pageX;
      var tempOwlStageX = this.owlStageX;
      if (!this.grabInterval) {
        window.addEventListener("mouseup", this.StopGrab);
        window.addEventListener("mousemove", this.SetMousePosition);
        var Mdiff = this.mouseX - currentMouseX;
        /* var TmDiff=Mdiff */
        this.grabInterval = setInterval(
          function() {
            Mdiff = this.mouseX - currentMouseX;
            /* if (this.owlStageX > 0 || this.owlStageX < this.minStageX) {
              Mdiff = Mdiff /(this.nCarouselItem*Math.abs(TmDiff-Mdiff/TmDiff));
            } */
            this.SetOwlStage(tempOwlStageX + Mdiff);
          }.bind(this),
          50
        );
      }
    },
    SetMousePosition(event) {
      this.mouseX = event.pageX;
    },

    StopGrab() {
      console.log("interval stop ");
      clearInterval(this.grabInterval);
      window.removeEventListener("mousemove", this.SetMousePosition);
      window.removeEventListener("mouseup", this.StopGrab);
      this.grabInterval = null;
      this.owlGrab = false;
      if (this.owlStageX > 0) this.owlStageX = 0;
      else if (this.owlStageX < this.minStageX) this.owlStageX = this.minStageX;
    }
  },
  mounted() {
    /* var x = event.clientX; */
  }
};
</script>