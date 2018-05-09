<template>
  <div class='container'>
    <h1>Create new post</h1>
    
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
  </div>
</template>

<script>
import AppButton from '~/components/UI/AppButton'
import AppInput from '~/components/UI/AppInput'

export default {
  name: 'NewPost',
  components: {
    AppButton,
    AppInput
  },
  data() {
    return {
      postData: {
        author: '',
        title: '',
        thumbnailPath: '',
        content: ''
      }
    }
  },
  methods: {
    onSave() {
      console.log(this.postData)
    }
  }
}
</script>

<style scoped>

</style>

