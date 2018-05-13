<template>
  <div class='container'>
    <h1>{{ loadedPosts.title }}</h1>
    <div>
      <div>Last updated on {{ loadedPosts.date }}</div>
      <div>Written by {{ loadedPosts.author }}</div>
    </div>
    <p>{{ loadedPosts.content }}</p>
    <div>
      Post feedback
    </div>
  </div>  
</template>

<script>
import axios from 'axios'

export default {
  name: 'Post',
  asyncData(context) {
    return axios
      .get(`https://nuxt-blog-b7aa3.firebaseio.com/posts/${context.params.id}.json`)
      .then(response => {
        return {
          loadedPosts: response.data
        }
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>

</style>


