<template>
  <div>
    <TheTopBar />
    <div class="wrapper-topbar-menu menu-toptools">
      <div class="global-container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="navbar-header__content no-padding">
              <div class="navbar-header__area">
                <NuxtLink class="navbar-brand" to="/">
                  <img src="../../assets/images/logo.png" alt="Vatan Bilgisayar" />
                </NuxtLink>
              </div>
              <div class="navbar-header__area">
                <div class="search search-light hide">
                  <div class="search__form">
                    <input
                      autocomplete="off"
                      data-searchUrl="/Partial/Search"
                      id="navbar-search-input"
                      class="search__input"
                      type="text"
                      name="search"
                      placeholder="Aramak istediğiniz ürünü yazın"
                    />
                    <a href="javascript:void(0);" class="remove__button">
                      <span class="icon-times"></span>
                    </a>
                    <button class="search__button">
                      <span class="icon-search">
                        <i class="fa fa-search"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div class="navbar-header__area">
                <div class="wrap-button">
                  <div class="btn-group my-account">
                    <button
                      type="button"
                      id="btnMyAccount"
                      class="btn btn-primary btn-login dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                      @focus="OpenDropdown"
                      @blur="CloseDropdown"
                      @mouseover="getUserdata()"
                    >
                      <span class="icon-user"></span>
                      <span id="type">{{dropbarName}}</span>
                    </button>
                    <!-- v-show="parent_open && loginStatus === true" -->
                    <ul
                      class="dropdown-menu dropdown-menu-home account"
                      v-show="parent_open && isLoggedIn === true"
                    >
                      <li><a href="/uyeBilgi/uyeBilgi">Üyeliğim</a></li>
                      <li>
                        <a>{{ mailim + " " + name+" "+ uid }}</a>
                      </li>
                      <li><a href="/uyeBilgi/siparistakip">Siparişlerim</a></li>
                      <li>
                        <a href="/uyeBilgi/favorilistem">Favori Ürünlerim</a>
                      </li>
                      <li><a href="/uyeBilgi/uyeAdres">Adres Bilgilerim</a></li>
                      <li><a href="/uyeBilgi/mesaj">Mesajlarım</a></li>
                      <li v-on:click="logout">
                        <a>ÇIKIŞ <span class="icon-door-open"></span></a>
                      </li>
                    </ul>
                    <ul
                      class="dropdown-menu dropdown-menu-home login"
                      v-show="parent_open && isLoggedIn === false"
                    >
                      <li>
                        <nuxt-link
                          :to="{
                            name: 'login-signstate',
                            params: { openLogin: true, signstate: 'signin' }
                          }"
                          >Giriş Yap</nuxt-link
                        >
                      </li>
                      <li>
                        <nuxt-link
                          :to="{
                            name: 'login-signstate',
                            params: {
                              openLogin: false,
                              signstate: 'signup'
                            }
                          }"
                          >Üye Ol</nuxt-link
                        >
                      </li>
                    </ul>
                  </div>

                  <div class="btn-group referrer-search-area">
                    <i class="icon-search"></i>
                  </div>
                  <CartButton />
                </div>
              </div>
              <div id="navbar-search-results"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#navbar_brand img {
  height: 50px;
}
.button drop_down_arrow {
  float: right;
}
</style>
<script>
import TheTopBar from "../../components/PageHead/TheTopBar";
import CartButton from "../../components/PageHead/CartButton/TheCartButton";
import firebase from "firebase";
import { mapActions } from "vuex";
export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLoggedIn = true;
        this.dropbarName = "HESABIM";
      } else {
        this.isLoggedIn = false;
        this.dropbarName = "GİRİŞ";
      }
    });
  },
  components: {
    TheTopBar,
    CartButton
  },
  computed: {},
  props: {},
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      name: "",
      mailim: "",
      dropbarName: "GİRİŞ",
      uid:null
    };
  },
  methods: {
    ...mapActions({
      logout: "logout"
    }),
    getUserdata() {
      // Kullanıcı verilerini çekiyoruz.
      if (this.isLoggedIn) {
        // kullanici diye bir variable tanımladık. Email ile ismi çektik.
        var kullanici = firebase.auth().currentUser;
        this.mailim = kullanici.email;
        this.name = kullanici.displayName;
        this.uid=kullanici.uid
      }
    },
    OpenDropdown(event) {
      var Target = event.target;
      Target.setAttribute("aria-expanded", false);
      Target.parentElement.classList.add("open");
    },
    CloseDropdown(event) {
      var Target = event.target;
      Target.setAttribute("aria-expanded", true);
      setTimeout(() => Target.parentElement.classList.remove("open"), 250);
    },
    parent_open(event) {
      var Target = event.target;
      return Target.parentElement.classList.contains("open");
    }
  }
};
</script>
