<script>
// @ is an alias to /src

import Comments from "@/components/Comments";
import productImagenInfo from "@/components/productImagenInfo";
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
      /* title: this.getProductWithId(this.productId).name,
      //meta taglar sayfa hakkında açıklayıcı bilgiler bulundururlar.
      meta: [
        { name: "description",  content: this.getProductWithId(this.productId).name },
      ], */
    };
  },
  created(){
    console.log("productId eşittir :" + this.productId)
    //console.log("nullmu?="+this.getProductWithId(this.productId)!=null?"null değil":"null")
    //console.log(this.$store.state.Products.data.find(data => data.id === this.productId).name)
  },
  beforeMount(){
    this.fetchProducts()
  },
  computed: {
    ...mapGetters({
      getProductWithId: "Products/getProductWithId"
    })
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
    <div v-if="!this.getProductWithId(this.productId)">Loading Please wait...</div>
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
