<template>
  <ul class='posts-list'>
    <post-preview
      v-for='post in posts'
      :key='post.id'
      :is-admin='isAdmin'
      :id='post.id'
      :thumbnailPath='post.thumbnailPath' 
      :title='post.title'
      :content='post.content'/>
  </ul>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  name: 'PostsList',
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
  .posts-list {
    display: flex;
  }
</style>


