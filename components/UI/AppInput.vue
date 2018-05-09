<template>
  <div class='input-controll'>
    <label><slot/></label>

    <input 
      v-if='controllType === "input"'
      v-bind='$attrs'
      v-on='$listeners'
      :value='value'
      @input='$emit("input", $event.target.value)'>

    <div>{{ value }}</div>

    <textarea
      v-if='controllType === "textarea"'
      rows='10'
      :value='value'
      @input='$emit("input", $event.target.value)'>
    </textarea>

  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    controllType: {
      type: String,
      default: 'input'
    },
    value: {
      // type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .input-controll label {
    display: block;
    margin-bottom: 4px;
  }

  .input-controll input {
    display: block;
  }
</style>

