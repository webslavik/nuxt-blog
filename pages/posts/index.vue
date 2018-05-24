<template>
  <div class='container'>
    <h1>Posts</h1>
    <PostsList :posts='loadedPosts' />
  </div>  
</template>

<script>
import PostsList from '@/components/Posts/PostsList'

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

</style>


