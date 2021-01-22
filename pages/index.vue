<template>
  <div class="anasayfa">
    <GununFirsatlari />
    <div class="wrapper-product wrapper-product--light visilabs-best_seller">
      <TwoCarousel :message="'Webe Özel Sınırlı Stok'" />
      <FiveCarousel :message="'En Çok Satanlar'" />
      <FiveCarousel :message="'Favori Kategorinizde En Çok Satanlar'" />
    </div>
  </div>
</template>

<script>
import GununFirsatlari from "@/components/GununFirsatlari";
import TwoCarousel from "@/components/Carousel/TwoCarousel";
import FiveCarousel from "@/components/Carousel/FiveCarousel";
import { mapActions } from "vuex";
export default {
  components: {
    GununFirsatlari,
    TwoCarousel,
    FiveCarousel
  },
  head(){
    return {
      title: "VATAN BİLGİSAYAR - Teknoloji & Bilgisayar Hiperstore'u"
    }
  },
  methods: {
    ...mapActions({
    fetchProducts:  'fetchProducts',
    }),
  },
  created(){
    this.fetchProducts()
  }
};
</script>