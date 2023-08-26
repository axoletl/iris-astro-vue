<template>
  <header class="header">
    <h1>{{ meta.title }}</h1>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/not-found">Invalid Page (WIP)</a>
    <p>→</p>
    <a href="/404">404</a>
  </header>
</template>
<script>
import meta from '@/data/meta.json'
export default {
  data () {
    return {
      meta,
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
