<template>
  <div class='container'>
    <h1>Posts</h1>
    <posts-list :posts='loadedPosts' />
  </div>  
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>

<style scoped>

</style>


