<template>
  <div class="wrapper-topbar-menu no-border-bottom">
    <div class="global-container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <ul class="topbar-menu">
            <li class="topbar-menu__item">
              <NuxtLink to="/webeozel-urunler" class="topbar-menu__link">
                <span class="icon-globe topbar-menu__icon"></span>
                <span class="topbar-menu__text">Web'e Özel</span>
              </NuxtLink>
            </li>
            <li class="topbar-menu__item">
              <a href="/firsat-urunler" class="topbar-menu__link">
                <span class="icon-arrow-down-percent topbar-menu__icon"></span>
                <span class="topbar-menu__text">Fırsat</span>
              </a>
            </li>
            <li class="topbar-menu__item">
              <a href="/yeni-urunler" class="topbar-menu__link">
                <span class="icon-warranty topbar-menu__icon"></span>
                <span class="topbar-menu__text">Yeni</span>
              </a>
            </li>
            <li class="topbar-menu__item">
              <a href="/pc-toplama" class="topbar-menu__link">
                <span class="icon-warranty topbar-menu__icon"></span>
                <span class="topbar-menu__text">PC Toplama</span>
              </a>
            </li>
            <li class="topbar-menu__item">
              <a href="/outlet" class="topbar-menu__link">
                <span class="icon-box-hand topbar-menu__icon"></span>
                <span class="topbar-menu__text">Outlet</span>
              </a>
            </li>
            <li class="topbar-menu__item">
              <a href="/magazalar" class="topbar-menu__link">
                <span class="icon-store-line topbar-menu__icon"></span>
                <span class="topbar-menu__text">Mağazalar</span>
              </a>
            </li>
            <li class="topbar-menu__item">
              <a href="/uyeBilgi/siparistakip" class="topbar-menu__link">
                <span class="icon-box-open topbar-menu__icon"></span>
                <span class="topbar-menu__text">Sipariş Takibi</span>
              </a>
            </li>
            <li class="topbar-menu__item">
              <a href="/iletisim" class="topbar-menu__link">
                <span class="icon-callcenter topbar-menu__icon"></span>
                <span class="topbar-menu__text">Bize Ulaşın!</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#nav {
  align-items: center;
  padding: 30px;
}

#nav a {
  color: #2c3e50;
  padding: 0 10px;
  text-decoration: none;
}

#nav a:first-child {
  color: #337ab7;
  padding: 0 10px;
  text-decoration: none;
}

/*#nav a.router-link-exact-active {
    font-weight: bold;
    color: #337ab7;
    text-decoration: none;
    }*/

#nav a.topbar-exact-active:first-child {
  font-weight: bold;
  color: #337ab7;
}
#nav a.topbar-exact-active {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
</style>
