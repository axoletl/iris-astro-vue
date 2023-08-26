<template>
  <div class="test animate-in animate-in--block" v-html="data.body"></div>
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
  max-width: 40rem;
  margin-bottom: 1rem;
}
</style>
