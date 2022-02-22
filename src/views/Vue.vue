<template>
  <div class="container">
    <NavTab />
    <h1>Vue.js</h1>
  </div>
</template>

<style scoped lang="scss">
  @import '../assets/scss/main.scss';
  .container {
    width: 100%;
    margin: 0 auto;
    padding-top: 150px;
    @include pad {
      padding-top: 200px;
    }
  }
  
</style>

<script>
import NavTab from '../components/NavTab.vue'

export default {
  components: {
    NavTab,
  }
}
</script>
