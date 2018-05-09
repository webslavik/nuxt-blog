<template>
  <div>
    <the-header />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import Logo from '~/components/Logo'

export default {
  components: {
    TheHeader,
    Logo
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
</style>
