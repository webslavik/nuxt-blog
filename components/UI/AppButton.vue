<template>
  <button
    class='button'
    :type='type'
    :class='btnStyle'
    v-bind='$attrs'
    v-on='$listeners'>
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    type: {
      type: String,
      required: true
    },
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .button {
    display: inline-flex;
    height: 36px;
    margin: 0 4px;
    padding: 0 16px;
    border: 0;
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    cursor: pointer;
    outline: none;
  }

  .success {
    background-color: #4caf50;
    color: white;
  }

</style>


