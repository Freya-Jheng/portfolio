<template>
  <div id="portfolio">
    <Navbar />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './views/Navbar.vue'
export default {
  components: {
    Navbar,
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;700;800;900&family=Neonderthaw&family=Noto+Sans&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  @import 'assets/scss/main.scss';
</style>

