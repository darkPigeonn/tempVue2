<template>
  <div class="navbar monserrat-text bg-blue">
    <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->
    <v-app-bar style="padding-bottom: 0px; width: 100vw">
      <v-app-bar-nav-icon class="d-lg-none d-xl-flex" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-container style="margin-top: 0" class="openSans">
        <v-row class="monserratText">
          <v-col :cols="10" :lg="3" style="padding: 0">
            <div style="display: flex; align-items: center">
              <img src="/assets/logo/smpk.png" style="height: 50px" />
              <p class="ms-2 text-lg-h6" style="color: var(--primaryColor)">SMPK Tuban Ronggolawe</p>
            </div>
          </v-col>
          <v-col :cols="10" :lg="9" style="padding: 0" class="navbarStyle align-center justify-end d-lg-flex">
            <div class="app-bar-link text-right d-flex">
              <div class="nuxtlink">
                <NuxtLink to="/" exact :class="{ 'active-link': isCurrentPage('/') }">BERANDA</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/about" exact :class="{ 'active-link': isCurrentPage('/about') }">PROFIL</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/akademik/" exact :class="{ 'active-link': isCurrentPage('/akademik') }">AKADEMIK</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/galeri" :class="{ 'active-link': isCurrentPage('/galeri') }"> GALERI</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/kontak" :class="{ 'active-link': isCurrentPage('/hubungikami') }"> HUBUNGI KAMI</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/berita" exact :class="{ 'active-link': isCurrentPage('/berita') }">BERITA</NuxtLink>
              </div>
              <div class="nuxtlink">
                <NuxtLink to="/artikel" exact :class="{ 'active-link': isCurrentPage('/artikel') }">ARTIKEL</NuxtLink>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary style="background-color: #27674e">
      <v-list>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/"> BERANDA</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" to="/about" v-bind="props"> PROFIL</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/akademik"> AKADEMIK</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>

        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/galeri"> GALERI</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/hubungikami"> HUBUNGI KAMI</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/berita"> BERITA</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
        <v-list-item>
          <v-menu>
            <template v-slot:activator="{ props }">
              <NuxtLink class="text-grey navstyle" v-bind="props" to="/artikel"> ARTIKEL</NuxtLink>
            </template>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    group: false,
    drawer: false,
    navbar: [
      {
        title: 'HOME',
        value: 'home',
      },
      // {
      //   title: 'ABOUT',
      //   value: 'about',
      // },
      // {
      //   title: 'JOIN US',
      //   value: 'join',
      // },
      // {
      //   title: "GARUM'S LIFE",
      //   value: 'garum',
      // },
      // {
      //   title: 'ARTICLE & PUBLICATION',
      //   value: 'article',
      // },
      {
        title: 'CONTACT',
        value: 'contact',
      },
    ],
    dropdown: [
      {
        title: 'ABOUT',
        link1: 'Our Profile',
        link2: 'Our Persons',
        link3: 'Vision & Mission',
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    isCurrentPage(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style>
.montserrat-text {
  font-family: 'Monserrat';
}
.app-bar-link a.active-link {
  /* Ganti dengan gaya khusus untuk tautan aktif */
  color: var(--primaryColor);
  font-weight: bold;
}
.app-bar-link a {
  font-size: 16px;
  text-decoration: none;
  color: #85868c;
}
.app-bar-link .nuxtlink {
  margin-right: 14px;
}
.app-bar-link a:hover {
  color: var(--primaryColor);
}
@media screen and (max-width: 600px) {
  .app-bar-link a {
    display: none;
  }
}

.dropdownlink a {
  text-decoration: none;
  color: #85868c;
}
.dropdownlink a:hover {
  color: #00509a;
}
.montserrat-text {
  font-family: 'Montserrat', sans-serif;
}
.daftarbtn {
  font-size: 12px;
}
</style>
