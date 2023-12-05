<template>
  <div class="heroDefaultTitle">
    <h1 class="text-lg-h4 text-h5">{{ heroDefaultTitle }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    heroDefaultTitle: String,
  },
};
</script>
