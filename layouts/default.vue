<template>
  <div>
    <FastShippingAd />
    <TheWrapper />
    <CategoryDropbar />
    <!-- Nuxt router -->
    <Nuxt />

    <BottomOfPage />
  </div>
</template>
<script>
import TheWrapper from "@/components/PageHead/TheWrapper";
import CategoryDropbar from "@/components/PageHead/CategoryDropbar";
import FastShippingAd from "@/components/PageHead/FastShippingAd";
import BottomOfPage from "@/components/PageFooter/BottomOfPage";
import { mapGetters, mapActions } from "vuex";
export default {
  head: {
    script: [
      {
        src: "https://kit.fontawesome.com/ce94c72459.js",
        crossorigin: "anonymous",
      },
    ],
  },
  components: {
    TheWrapper,
    CategoryDropbar,
    FastShippingAd,
    BottomOfPage,
  },
  data() {
    return {
      title: "",
    };
  },
  created() {
    this.fetchProducts();
    this.fetchCartItems();
  },
  methods: {
    ...mapActions({
      fetchProducts: "fetchProducts",
      fetchCartItems: "fetchCartItems",
    }),
  },
  mounted() {
    document.addEventListener("dragstart", (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    });
    document.addEventListener("blur", () => {
      this.title = document.title;
      document.title = "Fırsatları kaçırma, buraya bak :)";
      console.log("başlık değişti");
    });
    document.addEventListener("focus", () => {
      document.title = this.title;
    });
  },
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
