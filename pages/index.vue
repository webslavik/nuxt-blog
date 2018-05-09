<template>
  <div>
    <div class="hero" />

    <div class="container">
      <h1 class='home-title'>Awesome posts</h1>

      <ul class='posts-list'>
        <post-preview 
          id='1' 
          image='https://heroichollywood.b-cdn.net/wp-content/uploads/2017/05/Black-Lightning-2018-e1493653683576.jpg?x42694' 
          title='Post title 1'
          text='Some short description'/>
        <post-preview 
          id='2' 
          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmM0Vrv6cN8NwY4B_xogydQrbRXioqF2pqywA4emSjMNO7wAJ' 
          title='Post title 2'
          text='Some short description'/>
      </ul>
    </div>
  </div>
</template>

<script>
import PostPreview from '~/components/PostPreview'


export default {
  components: {
    PostPreview
  }
}
</script>

<style scoped>
  .container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }

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

  .posts-list {
    display: flex;
  }

  .posts-list {
    list-style-type: none;
  }
</style>
