<template>
  <div class='container'>
    <h1>Create new post</h1>
    <admin-post-form @submit='onSubmit' />
  </div>
</template>

<script>
import axios from 'axios'

import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  name: 'NewPost',
  components: {
    AdminPostForm
  },
  methods: {
    onSubmit(postData) {
      this.$store.dispatch('addPost', postData)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>

