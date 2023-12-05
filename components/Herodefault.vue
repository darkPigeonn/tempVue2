<template>
  <div :style="{ marginTop: '64px', backgroundImage: `url(${heroimage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '50vh' }">
    <div style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.6)" class="d-flex justify-center align-center">
      <HerodefaultTitle :heroDefaultTitle="'Tentang Kami'" />
    </div>
  </div>
</template>

<script>
import Herotitle from './Herotitle.vue';

export default {
  props: {
    heroimage: String,
  },
  components: { Herotitle },
};
</script>
