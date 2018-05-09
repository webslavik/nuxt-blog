<template>
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
</template>

<script>
import PostPreview from '~/components/posts/PostPreview'

export default {
  name: 'PostsList',
  components: {
    PostPreview
  }
}
</script>

<style scoped>
  .posts-list {
    display: flex;
  }
</style>


