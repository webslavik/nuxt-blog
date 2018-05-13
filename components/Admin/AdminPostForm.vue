<template>
  <form @submit.prevent="onSave">
    <app-input type='text' v-model='postData.author'>
      Author:
    </app-input>

    <app-input type='text' v-model='postData.title'>
      Title:
    </app-input>

    <app-input type='text' v-model='postData.thumbnailPath'>
      Thumbnail:
    </app-input>

    <app-input controllType='textarea' v-model='postData.content'>
      Description:
    </app-input>
    
    <app-button type='submit' btnStyle='success'>
      Save
    </app-button>
    <app-button type='button' @click='$router.push("/admin")'>
      Cancel
    </app-button>
  </form>
</template>

<script>
export default {
  name: 'NewPost',
  props: {
    post: Object,
    required: false
  },
  data() {
    return {
      postData: this.post 
        ? { ...this.post } 
        : {
          author: '',
          title: '',
          thumbnailPath: '',
          content: ''
        }
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.postData)
    }
  }
}
</script>

<style scoped>

</style>

