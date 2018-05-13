<template>
  <div>
    <div class="hero" />
    <div class="container">
      <h1 class='home-title'>Awesome posts</h1>
      <posts-list :posts='loadedPosts' />
    </div>
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
      loadedPosts: []
    }
  },
  asyncData(context, callback) {
    console.log(context)
    setTimeout(() => {
      callback(null, {
        loadedPosts: [
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
  },
  created() {
    this.$store.dispatch('setPosts', this.loadedPosts)
    console.log(this.$store.getters.loadedPosts)
  }
}
</script>

<style scoped>
  .hero {
    height: 200px;
    background-image: url('~assets/img/hero.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .home-title {
    margin-bottom: 24px;
  }

</style>
