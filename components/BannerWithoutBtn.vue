<template>
  <div :style="{ backgroundImage: `url(${backgroundSrc})`, backgroundSize: 'cover', backgroundRepeat: 'repeat', height: '40vh' }">
    <div style="background: linear-gradient(rgba(75, 177, 85, 0.9), rgba(75, 177, 85, 0.9)); height: 100%; display: flex; align-items: center">
      <v-container>
        <v-row>
          <v-col :cols="12" class="text-center">
            <H3 :h3title="'Misi SMPK RONGGOLAWE TUBAN'" :h3Color="'var(--onNavbar)'" />
            <P :pColor="'var(--onNavbar)'" class="mt-2" :pTitle="'Melaksanakan pembelajaran dan bimbingan secara efektif dan efisien'" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    backgroundSrc: String,
  },
};
</script>
