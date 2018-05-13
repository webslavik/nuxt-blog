<template>
  <div class='container'>
    <h1>Posts</h1>
    <posts-list :posts='loadingPosts' />
  </div>  
</template>

<script>
import PostsList from '~/components/Posts/PostsList'

export default {
  components: {
    PostsList
  },
  data() {
    return {
      loadingPosts: []
    }
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadingPosts: [
           {
            id: '1',
            title: 'Post title 1',
            content: 'Post content 1 ...',
            thumbnailPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmM0Vrv6cN8NwY4B_xogydQrbRXioqF2pqywA4emSjMNO7wAJ'
          },
          {
            id: '2',
            title: 'Post title 2',
            content: 'Post content 2 ...',
            thumbnailPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmM0Vrv6cN8NwY4B_xogydQrbRXioqF2pqywA4emSjMNO7wAJ'
          },
        ]
      })
    }, 1500)
  }
}
</script>

<style scoped>

</style>


