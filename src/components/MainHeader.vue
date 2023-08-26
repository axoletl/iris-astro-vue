<template>
  <header class="header">
    <h1>{{ meta.title }}</h1>
    <a :href="base">Home</a>
    <a :href="`${base}about`">About</a>
    <a :href="`${base}not-found`">Invalid Page (WIP)</a>
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
      base: import.meta.env.BASE_URL
    }
  },
}
</script>
<style lang="scss">
.header {
  display: flex;
  width: 100%;
  padding: 2rem;

  h1 {
    background-color: #000;
    color: #fff;
    padding: 0.25rem;
    font-weight: $bold;
    margin-right: auto;
  }

  a {
    margin-left: 2rem;
  }

  p {
    margin-left: 1rem;
    margin-right: -1rem;
  }
}
</style>
