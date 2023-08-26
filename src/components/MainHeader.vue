<template>
  <header class="header">
    <h1>{{ meta.title }}</h1>
    <a :href="base">Home</a>
    <a :href="`${base}about`">About</a>
    <a :href="`${base}not-found`">Invalid Page</a>
    <p>→</p>
    <a :href="`${base}404`">404</a>
  </header>
</template>
<script>
import meta from '@/data/meta.json'

export default {
  data () {
    return {
      meta,
      base: import.meta.env.BASE_URL,
    }
  },
}
</script>
<style lang="scss">
.header {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem 2rem 1rem;

  h1 {
    background-color: #000;
    color: #fff;
    padding: 0.25rem;
    font-weight: $bold;
    margin-right: auto;
    margin-bottom: 1rem;
  }

  a {
    margin-left: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-left: 1rem;
    margin-right: -1rem;
    margin-bottom: 1rem;
  }
}
</style>
