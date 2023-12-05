<template>
  <v-container>
    <v-row>
      <v-col v-for="(people, index) in artikelData" :key="index" :cols="12" :lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="people.imageLink" height="200px" cover></v-img>

          <v-card-title style="color: var(--onNavbar)"> {{ people.title }} </v-card-title>
          <p v-html="people.author"></p>
          <div>
            <p style="padding: 8px; overflow: hidden; max-height: 100px" v-html="people.content"></p>
          </div>

          <NuxtLink :to="`/${link}/${people.slug}`"><Button style="padding: 12px" class="mt-3" :btnTitle="'Baca lebih lanjut'" /></NuxtLink>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    artikelData: Object,
    link: String,
  },
};
</script>
