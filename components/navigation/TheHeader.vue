<template>
  <div>
    <div class="header">
      <nuxt-link class='logo' to='/' tag='div' >Hero Blog</nuxt-link>
      <div class='nav'>
        <nuxt-link to='/posts'>Blog</nuxt-link>
        <nuxt-link to='/about'>About</nuxt-link>
        <nuxt-link to='/admin'>Admin</nuxt-link>
      </div>
    </div>  

  </div>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid #ccc;
  }

  .logo {
    font-size: 18px;
    cursor: pointer;
  }

  .nav a {
    display: inline-flex;
    margin-left: 24px;
    text-decoration: none;
    color: #333333;
  }

  .nav a.nuxt-link-active {
    color: tomato;
  }

</style>

