import type { Style } from '#build/components'; import type { Style } from '#build/components'; import type { Herotitle } from '#build/components'; import type { Herotitle } from '#build/components'; import type { Style } from
'#build/components'; import type { Style } from '#build/components'; import type { resolveDirective } from 'vue';
<template>
  <div style="background-image: URL('assets/images/bg1.jpeg'); background-size: cover; height: 80vh">
    <div style="background-color: rgba(255, 255, 255, 0.7); height: 100%; display: flex; align-items: center; justify-content: center">
      <div>
        <div style="display: flex; justify-content: center">
          <div style="height: 30%">
            <Logo :logosrc="'assets/logo/logoyayasan.png'" :logowidth="'130px'" />
          </div>
          <div style="height: 30%">
            <Logo :logosrc="'assets/logo/smpk.png'" :logowidth="'100px'" />
          </div>
        </div>
        <div class="d-flex justify-center">
          <div class="hero heroText text-center">
            <Herotitle :herotitle="'SMP KATOLIK RONGGOLAWE TUBAN'" :herodesc="'Cerdas, Terampil, Berprestasi,Berkarakter dan Berlandaskan'" />
          </div>
        </div>
        <div style="display: flex; justify-content: center">
          <Button class="mt-4" :btnTitle="'Bergabung Bersama Kami'" />
        </div>
      </div>

      <!-- <div s: 40%; background-color: red">
        <Logo :logosrc="'assets/logo/logoyayasan.png'" />
      </div>
      <div s: 40%; background-color: blue">
        c
      </div> -->
    </div>
  </div>
</template>
