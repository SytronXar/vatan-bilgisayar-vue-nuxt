<script>
// @ is an alias to /src
import FiveCarouselButton from "@/components/Carousel/FiveCarouselButton";
import CarouselDot from "@/components/Carousel/CarouselDot";
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  },
  components: {
    FiveCarouselButton,
    CarouselDot
  },
  computed: {
    owlStageWidth() {
      return this.carouselItemX * this.nItem;
    },
    nDot() {
      return Number((this.owlStageWidth / (this.carouselItemX * this.nCarouselItem)).toFixed());
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
      carouselItemWidth: 262.4,
      carouselItemMarginR: 6,
      owlStageX: 0,
      owlGrab: false,
      grabInterval: undefined,
      mouseX: 0,
      nCarouselItem:5
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
<template>
  <div
    class="wrapper-product wrapper-product--light wrapper-product-detail- no-pad-bot visilabs-alternate-products"
  >
    <div class="global-container">
      <div
        class="global-component-header global-component-header--small-gutter clearfix"
      >
        <h3
          class="global-component-header__title global-component-header--small-gutter__title"
        >
          {{ message }}
        </h3>
      </div>
      <div
        class="owl-carousel owl-carousel-arrows owl-theme owl-loaded owl-drag"
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
            <FiveCarouselButton
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
            class="owl-prev disabled"
            @click="onNavClick(1)"
          >
            <span class="btn-carousel-controls icon-angle-left"></span></button
          ><button
            type="button"
            role="presentation"
            class="owl-next"
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
</template>