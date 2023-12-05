<template>
  <h3 class="openSans text-lg-h4 text-h5 font-weight-bold" :style="{ color: h3Color }">{{ h3title }}</h3>
</template>

<script>
export default {
  props: {
    h3title: String,
    h3Color: String,
  },
};
</script>
