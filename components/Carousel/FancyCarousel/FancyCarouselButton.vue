<template>
  <div class="owl-item active" style="width: 289.333px; margin-right: 6px">
    <div id="104376" class="item">
      <div class="most-popular-fancy">
        <nuxt-link
          :to="{
            name: 'productId',
            params: {
              productId: productId,
              producthref: ProductHref(),
            },
          }"
          class="most-popular-table d-table"
          ><div class="d-cell">
            <picture
              ><img
                :srcset="productData.images[0]"
                :alt="productData.name"
                :title="productData.name"
                class="img-responsive"
            /></picture>
          </div>
          <p class="d-cell">
            <span class="i-title">{{ productData.name }}</span>
          </p>
          <p class="d-cell">
            <span></span
            ><span class="old-price"
              >{{ formatPrice(productData.cost) }} TL</span
            ><span class="price"
              >{{ formatPrice(productData.cost * 0.9) }} <span>TL</span></span
            >
          </p></nuxt-link
        ><a
          href="javascript:void(0)"
          onclick="AddBundleFromPopUp(104376, 0, 0,103888,359,'MWVU2ZM/A')"
          class="btn btn-success"
          >HEMEN EKLE</a
        >
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "UrunSayfasi",
  computed: {},
  props: {
    productId: {
      type: String,
      required: true,
    },
  },
  components: {},
  data() {
    return {
      productData: this.$store.state.data.find(
        (data) => data.id === this.productId
      ),
    };
  },
  methods: {
    formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    ProductHref() {
      return this.productData.name.toLowerCase().replace(/\s/g, "-");
    },
  },
};
</script>