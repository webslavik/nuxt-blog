<template>
  <div class='container'>
    <h1>Create new post</h1>
    <admin-post-form />
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm'

export default {
  name: 'NewPost',
  components: {
    AdminPostForm
  },
}
</script>

<style scoped>

</style>

