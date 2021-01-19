<script>
// @ is an alias to /src

import Comments from "@/components/ProductPage/Comments";
import productImagenInfo from "@/components/ProductPage/ProductImageAndInfo";
import FiveCarousel from "@/components/Carousel/FiveCarousel";
import { mapActions,mapGetters } from "vuex";
export default {
  name: "ProductPage",
  components: {
    Comments,
    productImagenInfo,
    FiveCarousel,
  },
  head() {
    return {
      title: this.getTitle,
      //meta taglar sayfa hakkında açıklayıcı bilgiler bulundururlar.
      meta: [
        { name: "description",  content: this.getTitle,},
      ], 
    };
  },
  beforeMount(){
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      getProductWithId: "getProductWithId"
    }),
    getTitle(){
      return !this.getProductWithId(this.productId)? "Vatan Bilgisayar" : this.getProductWithId(this.productId).name
    }
  },
  data() {
    return {
      productId: this.$route.params.productId,
      currentimg: 0,
      productData:{}
    };
  },
  methods: {
    ...mapActions({
    fetchProducts:  'Products/fetchProducts',
    }),
    updateimg(index) {
      this.currentimg = index;
    },
    AddToBasket() {
      this.showFancy = true;
    },
  },
};
</script>
<template>
  <body class="has-top-banner" tabindex="0">
    <div class="deneme" v-if="!this.getProductWithId(this.productId)">
      <img  src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif" alt="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/source.gif">
    </div>
    <main v-else>
      <input type="hidden" id="visilabs-categoryId" value="notebook"  />
      <div class="wrapper-breadcrumb">
        <div class="global-container">
          <div class="row">
            <div class="col-xs-12">
              <ul class="breadcrumb" style="text-align: left">
                <li>
                  <a
                    href="https://www.vatanbilgisayar.com/bilgisayar"
                    class="bradcrumb-item"
                    >Bilgisayar</a
                  >
                </li>
                <li>
                  <a class="bradcrumb-item">{{ getProductWithId(productId).productType }}</a>
                </li>
                <li>
                  <a class="bradcrumb-item">{{ getProductWithId(productId).name }}</a>
                </li>
                <li>
                  <a class="bradcrumb-item">{{ getProductWithId(productId).code }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <productImagenInfo :productId="productId" /> 
      <FiveCarousel :message="'Bu Ürüne Bakanlar Bunlara da Baktı'" />
      <Comments :productId="productId" /> 
    </main>
  </body>
</template>