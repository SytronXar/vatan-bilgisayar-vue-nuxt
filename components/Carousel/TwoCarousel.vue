<script>
// @ is an alias to /src
import ProductJs from "@/store/Products";
import TwoCarouselButton from "@/components/Carousel/TwoCarouselButton";
import CarouselDot from "@/components/Carousel/CarouselDot";
export default {
  props: {
    Message: {
      type: String,
      required: true
    }
  },
  components: {
    TwoCarouselButton,
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
    }
  },
  data() {
    return {
      nItem: ProductJs.data.length,
      Products: ProductJs.data,
      carouselItemWidth: 665,
      carouselItemMarginR: 6,
      owlStageX: 0,
      owlGrab: false,
      grabInterval: undefined,
      mouseX: 0,
      nCarouselItem:2
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
  <div class="wrapper-product wrapper-product--dark wrapper-product--limited">
    <div class="global-container">
      <div class="global-component-header clearfix">
        <h3 class="global-component-header__title">{{Message}}</h3>
      </div>
      <div class="owl-carousel owl-carousel-two owl-theme owl-loaded owl-drag" :class="{ 'owl-grab': owlGrab }">
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
            <TwoCarouselButton
              :productId="product.id"
              v-for="product in Products"
              :key="product.id"
            />
          </div>
        </div>
        <div class="owl-nav disabled">
          <button type="button" role="presentation" class="owl-prev">
            <span aria-label="Previous">‹</span></button
          ><button type="button" role="presentation" class="owl-next">
            <span aria-label="Next">›</span>
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
      <div class="text-center">
        <a
          href="/webeozel-urunler"
          class="btn btn-default btn-transparent btn-global mb-mrtop-0"
        >
          <span>TÜMÜNÜ GÖR</span>
          <span class="icon-arrow-right"></span>
        </a>
      </div>
    </div>
  </div>
</template>