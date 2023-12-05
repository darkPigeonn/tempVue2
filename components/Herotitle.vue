import type { Herotitle } from '#build/components';
<template>
  <div class="hero herotitle">
    <h1 class="text-lg-h4 text-h5">{{ herotitle }}</h1>
  </div>

  <div: :style="{display: 'flex', justifyContent: 'center', marginTop: '4px'}">
    <p class="text-lg-h5 text-h6 font-weight-bold heroParagraph">{{ herodesc }}</p>
  </div:>
</template>

<script>
export default {
  props: {
    herotitle: String,
    herodesc: String,
  },
};
</script>
