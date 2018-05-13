<template>
  <div class='container'>
    <div>
      <nuxt-link to='/admin/new-post' tag='button'>Create post</nuxt-link>
    </div>
    <hr>
    <posts-list :posts='loadedPosts' :is-admin='true' />
  </div>

</template>

<script>
export default {
  name: 'Admin',
  head: {
    title: 'Blog Admin'
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

