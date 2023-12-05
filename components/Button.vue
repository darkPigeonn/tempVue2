<template>
  <div>
    <v-btn class="buttonStyle ptSerif">
      {{ btnTitle }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    btnTitle: String,
  },
};
</script>
