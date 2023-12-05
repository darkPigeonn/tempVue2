<template>
  <img :src="logosrc" class="mt-5" :style="{ maxWidth: logowidth }" />
</template>

<script>
export default {
  props: {
    logosrc: String,
    logowidth: String,
  },
};
</script>
