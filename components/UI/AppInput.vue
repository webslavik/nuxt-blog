<template>
  <div class='input-control'>
    <label><slot/></label>

    <input 
      v-if='controllType === "input"'
      v-bind='$attrs'
      :value='value'
      @input='$emit("input", $event.target.value)'>

    <textarea
      v-if='controllType === "textarea"'
      v-bind='$attrs'
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
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .input-control label {
    display: block;
    margin-bottom: 4px;
  }

  .input-controll input {
    display: block;
  }
</style>

