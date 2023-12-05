<template>
  <v-container>
    <v-row>
      <v-col v-for="(people, index) in arrayData" :key="index" :cols="12" :lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="people.src" height="200px" cover></v-img>
          <div style="padding: 12px">
            <h3 style="color: var(--primaryColor)">{{ people.nama }}</h3>
            <p>{{ people.desc }}</p>
          </div>
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
