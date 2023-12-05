<template>
  <div :style="{ backgroundImage: `url(${backgroundSrc})`, backgroundSize: 'cover', backgroundRepeat: 'repeat', height: '40vh' }">
    <div style="background: linear-gradient(rgba(75, 177, 85, 0.9), rgba(75, 177, 85, 0.9)); height: 100%; display: flex; align-items: center">
      <v-container>
        <v-row>
          <v-col :cols="12" :lg="6" class="text-center text-lg-left">
            <H3 :h3title="'Bergabunglah bersama kami'" :h3Color="'var(--onNavbar)'" />
            <P :pColor="'var(--onNavbar)'" class="mt-2" :pTitle="'Menjadi pribadi yang cerdas,Trampil,Berprestasi, Berkarakter, dan Berlandaskan Cinta Kasih'" />
          </v-col>
          <v-col :cols="12" :lg="6" class="d-flex justify-center justify-lg-end align-center">
            <ButtonOutlined :btnOutlineTitle="'bergabung'" :backgroundProp="'rgba(255,255,255,0)'" :btnOutlineColor="'var(--onNavbar)'" />
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
