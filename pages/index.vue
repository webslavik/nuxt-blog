<template>
  <div>
    <div class="hero" />
    <div class="container">
      <h1 class='home-title'>Awesome posts</h1>
      <posts-list :posts='loadedPosts' />
    </div>
  </div>
</template>

<script>
import PostsList from '~/components/Posts/PostsList'

export default {
  components: {
    PostsList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
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
