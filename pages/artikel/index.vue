<script setup>
import { useFetch } from '#app';
import { ref } from 'vue';

const endpoint = 'https://api.imavi.org/imavi/articles/get-all';
const { data: article } = await useFetch(endpoint, {
  headers: {
    Id: '6163b0c663bd513e8b3b8553',
    Secret: '2213be40-3625-4111-9b52-e828b5d335d8',
    partner: 'cim',
  },
});

const articles = ref(article.value);
</script>

<template>
  <v-container style="margin-top: 80px">
    <v-row class="d-flex justify-center">
      <H3 :h3Color="'var(--primaryColor)'" :h3title="'DAFTAR Artikel'"></H3>
    </v-row>

    <Artikel class="mt-4" :artikelData="articles" :link="'artikel'" />
  </v-container>
</template>
