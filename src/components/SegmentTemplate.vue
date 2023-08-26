<template>
  <div class="test" v-html="data.body"></div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss">
.test {
  padding: 0 2rem;
}
</style>
