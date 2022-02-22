<template>
  <div class="container">
    <NavTab />
    <h1>express</h1>
  </div>
</template>

<style scoped lang="scss">
  @import '../assets/scss/main.scss';
  .container {
    margin: 0 auto;
    width: 100%;
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
