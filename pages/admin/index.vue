<template>
  <div class='container'>
    <div>
      <nuxt-link to='/admin/new-post' tag='button'>Create post</nuxt-link>
    </div>
    <hr>
    <posts-list :is-admin='true' />
  </div>

</template>

<script>
import PostsList from '~/components/Posts/PostsList'

export default {
  components: {
    PostsList
  }
}
</script>

<style scoped>

</style>

