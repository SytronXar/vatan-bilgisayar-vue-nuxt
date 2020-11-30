<template>
  <div class="product-list__image-safe">
    <nuxt-link
      :to="{ name: 'productId', params: { productId: productId } }"
      class="product-list__image-safe-link sld product-pic-slider owl-carousel owl-loaded owl-drag"
      :class="{ 'owl-grab': owlGrab }"
      title=""
    >
      <div
        class="owl-stage-outer"
        @mousemove="onMouseMovement()"
        :ref="referance"
        @mouseleave="onMouseLeave()"
      >
        <div
          class="owl-stage"
          :style="{
            transform: 'translate3d(' + owlStageX + 'px, 0px, 0px)',
            transition: 'all 0.25s  ease 0s',
            width: owlStageWidth + 'px',
          }"
        >
          <!-- carousel buttons -->
          <ProductCarouselButton
            :imageSrc="image"
            v-for="image in productData.images"
            :key="image"
            :itemWidth="itemWidth"
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
      <div class="owl-dots disabled"></div
    ></nuxt-link>
    <ul class="img-slide-thumbs">
      <CarouselDot
        @clicked="onDotClick"
        :outerLenght="outerLenght"
        :owlStageX="owlStageX"
        :nDot="nItem"
        :dotNumber="n"
        v-for="n in nItem"
        :key="n"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductCarouselButton from "@/components/Carousel/ProductCarousel/ProductCarouselButton";
import CarouselDot from "@/components/Carousel/ProductCarousel/ProductCarouselDots";
export default {
  props: {
    productId: {
      type: String,
      required: true,
    },
    itemWidth: {
      type: Number,
      required: true,
    },
  },
  components: {
    ProductCarouselButton,
    CarouselDot,
  },
  computed: {
    ProductHref() {
      return this.productData.name.toLowerCase().replace(/\s/g, "-");
    },
    owlStageWidth() {
      return this.carouselItemX * this.nItem;
    },
    nDot() {
      return Number(
        (this.owlStageWidth / (this.carouselItemX * this.nItem)).toFixed()
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
    getElementPosX() {
      return this.$refs[this.referance].getBoundingClientRect().left;
    },
    nItem() {
      return this.productData.images.length;
    },
  },
  data() {
    return {
      carouselItemWidth: this.itemWidth /* 179.625, */,
      carouselItemMarginR: 0,
      owlStageX: 0,
      grabInterval: undefined,
      mouseX: 0,
      owlGrab: false,
      nCarouselItem: 1,
      productData: this.$store.state.Products.data.find((data) => data.id === this.productId),
      referance: this.productId + "oso",
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
    onMouseMovement() {
      var pX = this.getElementPosX;
      var mouseX = event.pageX;
      var diff = mouseX - pX;
      var newTo = Number(
        Math.max((this.nItem * diff) / this.carouselItemX - 1, 0).toFixed()
      );
      console.log(newTo);
      this.owlStageX = newTo * this.outerLenght * -1;
    },
    onMouseLeave() {
      this.owlStageX = 0;
    },
  },
  mounted() {
    /* var x = event.clientX; */
  },
};
</script>