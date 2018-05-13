<template>
  <div class='container'>
    <h1>{{ loadingPost.title }}</h1>
    <div>
      <div>Last updated on {{ loadingPost.date }}</div>
      <div>Written by {{ loadingPost.author }}</div>
    </div>
    <p>{{ loadingPost.content }}</p>
    <div>
      Post feedback
    </div>
  </div>  
</template>

<script>
export default {
  name: 'Post',
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadingPost: {
          id: '1',
          title: `Post title - ${context.params.id}`,
          date: new Date(),
          author: 'Jack',
          content: 'Some awesome content post blab bla'
        },
      })
    }, 1000)
  }
}
</script>

<style scoped>

</style>


