<template>
  <v-btn class="buttonOutlineStyle" :style="{ border: '2px solid #ffffff', backgroundColor: backgroundProp, borderRadius: '50px', color: btnOutlineColor }">{{ btnOutlineTitle }} </v-btn>
</template>

<script>
export default {
  props: {
    btnOutlineTitle: String,
    backgroundProp: String,
    btnOutlineColor: String,
  },
};
</script>
