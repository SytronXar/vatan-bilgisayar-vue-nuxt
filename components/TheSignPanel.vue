<script>
import PasswordInput from "@/components/ThePasswordInput";
import firebase from "firebase";
export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.alreadyLogged = true;
      } else {
        this.alreadyLogged = false;
      }
    });
  },
  name: "login",
  data: function() {
    return {};
  },
  components: {
    PasswordInput
  },
  props: {
    openLogin: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      email: "",
      password: "",
      name: "",
      phone: "",
      showPassword: true,
      alreadyLogged: false
    };
  },
  methods: {
    Updateuser() {},
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // Kayıt işlemi sadece email ve şifre ile oluşturuluyor, baştan isim ve numara ekleyemiyoruz.
            alert("Hesap " + this.email + " başarıyla oluşturuldu");
            // Email ve şifre ile kullanıcı oluşturduktan sonra hesabın isim ve numarasını güncelliyoruz.
            var kullanici = firebase.auth().currentUser;
            alert("Kullanıcıya giriş yapıldı");
            kullanici.updateProfile({
              displayName: this.name,
              phoneNumber: this.phone
            });
            alert("İsim " + this.name + " güncellendi");
            alert("Telefon " + this.phone + " güncellendi");
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );

      e.preventDefault();
    },
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(this.email + " ile giriş yaptınız");
            this.$router.push("/");
          },
          err => {
            alert(err.message);
          }
        );

      e.preventDefault();
    }
  }
};
</script>
<template>
  <main class="signup basket-signup clear-singin">
    <div v-if="!alreadyLogged" class="clearfix">
      <div id="signup-form-container" class="signup-form">
        <ul class="nav" id="loginTab">
          <li :class="{ active: openLogin === true }">
            <nuxt-link
              :to="{
                name: 'login-signstate',
                params: { openLogin: true, signstate: 'signin' }
              }"
              >Giriş Yap</nuxt-link
            >
          </li>
          <li :class="{ active: openLogin === false }">
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
        <div class="tab-content">
          <div
            class="tab-pane collapse fade"
            :class="{ 'active in': openLogin === true }"
            id="signin-section"
          >
            <form
              action="/login?returnUrl=%2F"
              class="form-horizontal"
              id="loginform"
              method="post"
              role="form"
              novalidate="novalidate"
            >
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="gbAHXuwnjQKPJ_WYqrg-4L5dda4-n2F_720137md34MZdsnrkhPs6AOi0ipTtQmiGxE718vf4Edd7hiHU9YuBwZlLFU1"
              />
              <div class="form-group">
                <!--Email-->
                <label for="">E-mail</label>
                <input
                  class="form-control email-input text-box single-line"
                  data-val="true"
                  data-val-email="Geçersiz e-posta adresi"
                  data-val-length="E-Posta alanı en az 5 ve en fazla 100 karakter olmalıdır."
                  data-val-length-max="100"
                  data-val-length-min="5"
                  data-val-required="E-Posta alanı boş geçilemez"
                  id="email"
                  name="Email"
                  placeholder="ad.soyad@example.com"
                  type="email"
                  value=""
                  v-model="email"
                  v-mode.lazy="email"
                />
                <span
                  class="field-validation-valid text-danger"
                  data-valmsg-for="Email"
                  data-valmsg-replace="true"
                  style="font-size=12px !important;"
                ></span>
              </div>
              <div class="form-group">
                <label for="">Şifre</label>
                <div class="input-group">
                  <input
                    data-val="true"
                    data-val-required="Şifre alanı boş geçilemez"
                    id="pass"
                    name="Password"
                    v-model="password"
                    placeholder="****"
                    :type="showPassword ? 'password' : 'text'"
                    class="form-control"
                    @input="$emit('change', $event.target.value)"
                  /><span
                    data-valmsg-for="Password"
                    data-valmsg-replace="true"
                    class="field-validation-valid text-danger"
                  ></span>
                  <div class="input-group-addon">
                    <span
                      class="toggle-password-visible"
                      @click="
                        {
                          showPassword = !showPassword;
                        }
                      "
                      ><i class="icon-eye-alt"></i
                    ></span>
                  </div>
                </div>
              </div>
              <input
                type="hidden"
                class="g-recaptcha-response"
                name="g-recaptcha-response"
                value="03AGdBq24ZvTSTNyoEQoj7vLJs1qQoinpKK_9qpwdzKEn6QGM2jADZTexIZhJv4g38zuutPvz9dxetUQCP6_kSxLbt6QOTvEmu2GvMFEYypAipr1klO5GIXyPymtbIL58qBUWaNvq-MSDKJRmxpz1N7OQsQ6oZlzDvhap0hECjXMt5HueoViJfTr_PhsWxM8DaSwsqc27HeoOgeeir2_b3bDKzcvzNrv3c8EjNcADawfprhftITFPs-Ii9iQjNKghtWTKeLEzUsNqXPpYhulZtaEw0qGl3Poq1n8_xbzILniOOHXdV6mUVYDjnnZUOBVTnomS6z7wJf3_OI9UtBRExlJQ8s-9Zhoa5jlHzbkW8AAXLqYFtUUb88brzxxKPpFKggljJdYX7eY1uYrbNCH_w9418xGqlT4D_YDhott0ZilFgKkbiMvoCK_w"
              />
              <div class="form-group text-center">
                <button
                  id="login-button"
                  v-on:click="login"
                  type="submit"
                  class="btn btn-primary signup-form__button"
                  @click="login"
                >
                  GİRİŞ YAP
                </button>
              </div>
              <div class="form-group text-center">
                <a
                  href="/uyeBilgi/sifremiunuttum?ReturnUrl=%2Flogin%2F%3FreturnUrl%3D%252F%26logtab%3Dsignup"
                  class="signup-form__forgot"
                  >Şifremi Unuttum</a
                >
              </div>
              <div class="form-group text-center">
                <div class="or">Veya</div>
              </div>
              <div class="form-group text-center">
                <a
                  href="javascript:void(0)"
                  onclick="loginWithFacebook()"
                  class="signup-form__facebook-login"
                  ><i class="fab fa-facebook-f"></i>FACEBOOK İLE BAĞLAN</a
                >
              </div>
            </form>
          </div>
          <div
            class="tab-pane"
            id="signup-section"
            :class="{ 'active in': openLogin === false }"
          >
            <form
              action="/Account/Register?returnUrl=%2F"
              class="form-horizontal"
              method="post"
              role="form"
              novalidate="novalidate"
            >
              <input
                name="__RequestVerificationToken"
                type="hidden"
                value="0Bzg77OdBClXPwRaznZX_4xONEQ1msAdpiEoQWUw3XRk5jCXFrVs6LdH4FpxQkiOFhm4bV3Pf7k_vDb1Do9y6UuHy5M1"
              />
              <div style="color: red"></div>
              <div class="form-group">
                <label for="">İsim Soyisim<sup>*</sup></label>
                <input
                  class="form-control text-box single-line"
                  data-val="true"
                  data-val-maxlength="İsim Soyisim alanı en fazla 50 karakter olmalıdır"
                  data-val-maxlength-max="50"
                  data-val-regex="Adınızı ve soyadınızı arada boşluk bırakarak doğru giriniz."
                  data-val-regex-pattern="^\s*([a-zA-ZğüşöçıİĞÜŞÖÇ\.-]{2,})(\s+([a-zA-ZğüşöçıİĞÜŞÖÇ\. -]{2,}))+\s*$"
                  data-val-required="İsim Soyisim alanı boş geçilemez"
                  id="Name"
                  v-model="name"
                  name="Name"
                  placeholder=""
                  type="name"
                  value=""
                />
                <span
                  class="field-validation-valid text-danger"
                  data-valmsg-for="Name"
                  data-valmsg-replace="true"
                ></span>
              </div>
              <div class="form-group">
                <label for="">E-mail Adresi<sup>*</sup></label>
                <input
                  class="form-control email-input text-box single-line"
                  data-val="true"
                  data-val-email="Geçersiz e-posta adresi"
                  data-val-length="E-Mail Adresi alanı en az 5 ve en fazla 100 karakter olmalıdır."
                  data-val-length-max="100"
                  data-val-length-min="5"
                  data-val-remote="Bu e-posta zaten kayıtlı."
                  data-val-remote-additionalfields="*.Email"
                  data-val-remote-type="POST"
                  data-val-remote-url="/Account/IsEmailAlreadyExists"
                  data-val-required="E-Mail Adresi alanı boş geçilemez"
                  id="Email"
                  v-model="email"
                  name="Email"
                  placeholder=""
                  type="email"
                  value=""
                  list="email-options"
                /><datalist id="email-options"></datalist>
                <span
                  class="field-validation-valid text-danger"
                  data-valmsg-for="Email"
                  data-valmsg-replace="true"
                ></span>
              </div>
              <div class="form-group">
                <label for="">Şifre<sup>*</sup></label>
                <div class="input-group w-100">
                  <div class="db-block">
                    <input
                      class="form-control text-box single-line"
                      data-val="true"
                      data-val-minlength="En az 6 karakter girmelisiniz."
                      data-val-minlength-min="6"
                      data-val-required="Şifre alanı boş geçilemez"
                      id="Password"
                      v-model="password"
                      name="Password"
                      placeholder=""
                      type="password"
                      value=""
                    />
                    <div class="input-group-addon">
                      <a href="#" class="toggle-password-visible"
                        ><i class="icon-eye-alt"></i
                      ></a>
                    </div>
                  </div>
                  <span
                    class="field-validation-valid text-danger"
                    data-valmsg-for="Password"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div>
              <div class="form-group">
                <label for="">Cep Telefonu<sup>*</sup></label>
                <input
                  class="form-control phone-input text-box single-line"
                  data-val="true"
                  data-val-regex="Geçerli telefon numarası giriniz"
                  data-val-regex-pattern="^(\+\s?)?((?<!\+.*)\(\+?\d+([\s\-\.]?\d+)?\)|\d+)([\s\-\.]?(\(\d+([\s\-\.]?\d+)?\)|\d+))*(\s?(x|ext\.?)\s?\d+)?$"
                  data-val-required="Cep Telefonu alanı boş geçilemez"
                  id="PhoneNumber"
                  v-model="phone"
                  name="PhoneNumber"
                  placeholder=""
                  type="tel"
                  value=""
                  inputmode="text"
                />
                <span
                  class="field-validation-valid text-danger"
                  data-valmsg-for="PhoneNumber"
                  data-valmsg-replace="true"
                ></span>
              </div>
              <input
                type="hidden"
                class="g-recaptcha-response"
                name="g-recaptcha-response"
                value="03AGdBq24ZvTSTNyoEQoj7vLJs1qQoinpKK_9qpwdzKEn6QGM2jADZTexIZhJv4g38zuutPvz9dxetUQCP6_kSxLbt6QOTvEmu2GvMFEYypAipr1klO5GIXyPymtbIL58qBUWaNvq-MSDKJRmxpz1N7OQsQ6oZlzDvhap0hECjXMt5HueoViJfTr_PhsWxM8DaSwsqc27HeoOgeeir2_b3bDKzcvzNrv3c8EjNcADawfprhftITFPs-Ii9iQjNKghtWTKeLEzUsNqXPpYhulZtaEw0qGl3Poq1n8_xbzILniOOHXdV6mUVYDjnnZUOBVTnomS6z7wJf3_OI9UtBRExlJQ8s-9Zhoa5jlHzbkW8AAXLqYFtUUb88brzxxKPpFKggljJdYX7eY1uYrbNCH_w9418xGqlT4D_YDhott0ZilFgKkbiMvoCK_w"
              />
              <div class="form-group">
                <div style="color: red"></div>
              </div>
              <div class="form-group">
                <div>
                  <label class="wrapper-checkbox">
                    <input
                      data-val="true"
                      data-val-required="The Kampanya Maili field is required."
                      id="AcceptCampaignMail"
                      name="AcceptCampaignMail"
                      type="checkbox"
                      value="true"
                    /><input
                      name="AcceptCampaignMail"
                      type="hidden"
                      value="false"
                    />
                    <span
                      class="field-validation-valid"
                      data-valmsg-for="AcceptCampaignMail"
                      data-valmsg-replace="true"
                    ></span>
                    <span class="checkmark"></span>
                    Kampanyalar ile ilgili eposta mesajları almak istiyorum.
                  </label>
                </div>
              </div>
              <div class="form-group signup-form__kvkk clearfix">
                Kişisel Verilerin Korunması Kanunu hakkında detaylı bilgi almak
                için
                <a
                  href="/kisisel-verilerin-korunmasi"
                  target="_blank"
                  class="btn-link"
                  >tıklayınız.</a
                >
                <br />
                Gönder butonuna basarak
                <a
                  href="#"
                  class="btn-link button-acik-riza-metni"
                  data-original-title=""
                  title=""
                  >Açık Rıza Metnini</a
                >
                okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
              </div>
              <div class="form-group text-center">
                <button
                  v-on:click="register"
                  type="submit"
                  class="btn btn-primary signup-form__button"
                >
                  GÖNDER
                </button>
              </div>
            </form>
          </div>
          <div class="tab-pane collapse fade"></div>
        </div>
        <div class="signup-form__footer">
          <img
            src="https://www.vatanbilgisayar.com/assets/dist/images/signup_logos.png"
            alt="Logos"
          />
        </div>
      </div>
    </div>
    <!--Giriş yapıldıysa-->
    <div v-if="alreadyLogged" class="row">
    <div class="col-xs-12">
      <div class="empty-basket">
        <div class="empty-basket-content">
          <span class="icon-website"></span>
        </div>
        <h2 style="color: red">Bu sayfaya erişemezsiniz !</h2>
        <h4>Zaten giriş yapmışsınız.</h4>
        <img
          style="width: 640px; height: 512px"
          src="https://www.freepnglogos.com/uploads/minions-png/minions-png-the-minion-language-despicable-38.png"
        />
        <p>Eğer isterseniz Anasayfa'ya geri dönebilirsiniz.</p>
        <a
          class="btn btn-primary signup-form__button change-password-form__button"
          href="/"
          >ANASAYFA</a
        >
      </div>
    </div>
  </div>
  </main>
</template>
