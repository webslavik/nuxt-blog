<template>
  <div>
    <div class="hero" />

    <div class="container">
      <h1 class='home-title'>Awesome posts</h1>

      <posts-list />
    </div>
  </div>
</template>

<script>
import PostsList from '~/components/posts/PostsList'

export default {
  components: {
    PostsList
  }
}
</script>

<style scoped>
  .hero {
    height: 200px;
    background-image: url('~assets/img/hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .home-title {
    margin-bottom: 24px;
  }

</style>
