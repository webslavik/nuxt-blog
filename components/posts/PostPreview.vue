<template>
  <nuxt-link class='post' :to='postLink' tag='li'>
    <div class='post-thumbnails'>
      <img :src='image' alt=''>
    </div>
    <div class="post-body">
      <div class='post-title'>{{ title }}</div>
      <div class='post-text'>{{ text }}</div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    isAdmin: {
      type: Boolean,
      required: true
    },
    id: {
      type: String | Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    postLink() {
      return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`
    }
  }
}
</script>

<style scoped>
  .post {
    max-width: 25%;
    width: 100%;
    margin-right: 24px;
    box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
    cursor: pointer;
  }
</style>


