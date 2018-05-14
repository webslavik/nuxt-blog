<template>
  <div class="admin-post-page container">
    <div class='update-form'>
      <admin-post-form @submit='onSubmit' :post='loadedPost' />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  name: 'EditPost',
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(`https://nuxt-blog-b7aa3.firebaseio.com/posts/${context.params.postId}.json`)
      .then(response => {
        return {
          loadedPost: { ...response.data, id: context.params.postId }
        }
      })
      .catch(error => context.error())
  },
  methods: {
    onSubmit(postData) {
      this.$store.dispatch('editPost', postData)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
