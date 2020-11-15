<template>
  <div class="owl-item active" :style="{width: itemWidth +'px'}">
    <div class="slider-img">
      <img
        :src="imageSrc"
        :data-src="imageSrc"
        class="lazyimg"
      />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "UrunSayfasi",
  computed: {},
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    itemWidth:{
        type: Number,
        required:true
    }
  }
};
</script>