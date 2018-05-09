<template>
  <div class='container'>
    <div>
      <nuxt-link to='/admin/new-post' tag='button'>Create post</nuxt-link>
    </div>
    <hr>
    <posts-list />
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

</style>

