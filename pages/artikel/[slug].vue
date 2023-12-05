<script setup>
import { useRuntimeConfig } from '#app';
import { useAsyncData, useFetch } from 'nuxt/app';

const config = useRuntimeConfig();
const route = useRoute();

const slug = route.params.slug;

const endpoint = 'https://api.imavi.org/imavi/articles/view/' + slug;

/**
 * Hits the payload for client-side nav, but hits the CMS when reloading or direct navigation through entering a URL
 * Removing the `key` option resolves this
 * */
const { data: artikelDetail } = await useFetch(endpoint, {
  headers: {
    Id: '6163b0c663bd513e8b3b8553',
    Secret: '2213be40-3625-4111-9b52-e828b5d335d8',
    partner: 'cim',
  },
  key: '/articles' + route.params.slug,
});

// // const {data: article} = await useAsyncData(route.fullPath, () => {
// //   return  $fetch(endpoint)
// // })
</script>

<template>
  <v-container>
    <div style="margin-top: 100px" class="ptserrifText">
      <h1 class="text-h4">{{ artikelDetail.title }}</h1>
      <div class="text-end">
        <p style="margin-top: 12px; margin-bottom: 12px">{{ artikelDetail.publishDate }}</p>
        <p>Oleh: {{ artikelDetail.author }}</p>
      </div>
      <p v-html="artikelDetail.content"></p>
    </div>
    <div class="text-center mt-4">
      <NuxtLink to="/artikel"><v-btn>Kembali</v-btn></NuxtLink>
    </div>
  </v-container>
</template>
