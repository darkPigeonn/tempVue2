<template>
  <v-container>
    <v-row> <img src=/assets/images/bg_end.jpg alt="" style="width: 100%" /> </v-row>
    <v-row>
      <v-col :cols="12" :lg="6">
        <H3 :h3title="'SMPK RONGGOLAWE'" :h3Color="'var(--primaryColor)'" />
        <P pTitle="Jl. K.H Ahmad Dahlan no.4 <br> tuban jawatimur" />
        <P :pTitle="'<b>Telephone</b>:082332773100/(0356) 321672 '" />
        <P :pTitle="'<b>Email</b>:smpkatolikronggolawe@gmail.com'" />
      </v-col>
      <v-col :cols="12" :lg="6">
        <H3 :h3title="'Sosial Media Kami'" :h3Color="'var(--primaryColor)'" />
        <P class="mt-2" :pTitle="`Ikuti juga kegiatan - kegiatan kami di sosial media kami`" />
        <div class="mt-3">
          <NuxtLink to="https://twitter.com/spero_ofc?lang=en"><i class="social fa-brands fa-twitter ms-2" style="padding: 12px; border-radius: 50%"></i></NuxtLink>
          <NuxtLink to="https://www.facebook.com/smpk.ronggolawetbn/"><i class="social fa-brands fa-facebook ms-2" style="padding: 12px; border-radius: 50%"></i></NuxtLink>
          <NuxtLink to="https://www.instagram.com/smpkatolikronggolawe/"><i class="social fa-brands fa-instagram ms-2" style="padding: 12px; border-radius: 50%"></i></NuxtLink>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
