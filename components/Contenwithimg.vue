<template>
  <div>
    <v-container>
      <v-row>
        <v-col :cols="12" :lg="6" class="">
          <img :src="imgSrc" alt="" style="width: 100%" />
        </v-col>
        <v-col :cols="12" :lg="5" class="ms-lg-10">
          <H3 :h3title="'Sejarah Berdirinya SMPK Ronggolawe Tuban'" :h3Color="'var(--primaryColor)'" />
          <P class="mt-2" :pTitle="'Di berdirikan tahun 1960.... Misi SMPK Ronggolawe Tuban adalah...'" :fontStyleprop="'Italic'" :pColor="'#000000'" />
          <Button class="mt-4" :btnTitle="'Baca lebih lanjut'" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: String,
  },
};
</script>
