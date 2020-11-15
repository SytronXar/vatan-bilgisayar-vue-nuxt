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
export default {}
</script>