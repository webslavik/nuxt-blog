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
      axios
        .post('https://nuxt-blog-b7aa3.firebaseio.com/posts.json', {
          ...postData,
          date: new Date()
        })
        .then(response => {
          console.log(response)
        })
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>

