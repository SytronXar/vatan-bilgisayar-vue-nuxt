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
import TheWrapper from "@/components/TheWrapper";
import CategoryDropbar from "@/components/CategoryDropbar";
import FastShippingAd from "@/components/FastShippingAd";
import BottomOfPage from "@/components/BottomOfPage";
export default {
  components: {
    TheWrapper,
    CategoryDropbar,
    FastShippingAd,
    BottomOfPage,
  },
  head(){
    return {
      title: "VATAN BİLGİSAYAR - Teknoloji & Bilgisayar Hiperstore'u"
    }
  },
  methods: {},
  mounted() {
    document.addEventListener("dragstart", (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    });
  },
};
</script>