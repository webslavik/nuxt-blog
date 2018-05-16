<template>
  <div class='container'>
    <div>
      <nuxt-link to='/admin/new-post' tag='button'>Create post</nuxt-link>
      <button @click='logout'>Log out</button>
    </div>
    <hr>
    <posts-list :posts='loadedPosts' :is-admin='true' />
  </div>

</template>

<script>
export default {
  name: 'Admin',
  middleware: ['check-auth', 'auth'],
  head: {
    title: 'Blog Admin'
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.push('/admin/auth')
    }
  }
}
</script>

<style scoped>

</style>

