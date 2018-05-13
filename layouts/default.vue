<template>
  <div>
    <the-header />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/Navigation/TheHeader'

export default {
  components: {
    TheHeader,
  }
}
</script>

<style>
  html {
    font-family: 'Roboto', sans-serif;
  }

  body {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
