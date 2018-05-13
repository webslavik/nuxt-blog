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
import PostsList from '~/components/Posts/PostsList'

export default {
  name: 'Admin',
  components: {
    PostsList
  },
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

