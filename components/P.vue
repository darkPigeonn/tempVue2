<template>
  <p :style="{ fontStyle: fontStyleprop, color: pColor }" v-html="pTitle"></p>
</template>

<script>
export default {
  props: {
    fontStyleprop: String,
    pColor: String,
    pTitle: String,
  },
};
</script>
