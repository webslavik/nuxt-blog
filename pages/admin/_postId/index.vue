<template>
  <div class="admin-post-page container">
    <div class='update-form'>
      <admin-post-form :post='loadedPost' />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  name: 'EditPost',
  components: {
    AdminPostForm,
  },
  asyncData(context) {
    return axios
      .get(`https://nuxt-blog-b7aa3.firebaseio.com/posts/${context.params.postId}.json`)
      .then(response => {
        return {
          loadedPost: response.data
        }
      })
      .catch(error => context.error())
  },
}
</script>

<style scoped>

</style>
