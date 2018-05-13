<template>
  <div class="admin-post-page container">
    <div class='update-form'>
      <admin-post-form :post='loadedPost' />
    </div>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  name: 'NewPost',
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: 'Jack',
        title: 'Post title',
        content: 'Some new awesome content',
        thumbnailPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmM0Vrv6cN8NwY4B_xogydQrbRXioqF2pqywA4emSjMNO7wAJ',
      }
    }
  }
}
</script>

<style scoped>

</style>
