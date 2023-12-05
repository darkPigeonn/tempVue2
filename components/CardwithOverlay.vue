<template>
  <v-container>
    <v-row>
      <v-col v-for="(people, index) in arrayData" :key="index" :cols="12" :lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="people.src" height="200px" cover></v-img>

          <v-card-title class="cardOverlay" style="color: var(--onNavbar)"> {{ people.nama }} </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    arrayData: Array,
  },
};
</script>
