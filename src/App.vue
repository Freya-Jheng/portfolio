<template>
  <div id="app">
    <Navbar />
    <main class="main">
    </main>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './views/Navbar.vue'

export default {
  components: {
    Navbar,
  }
}
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200;700;800;900&family=Neonderthaw&family=Noto+Sans&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  @import 'assets/scss/main.scss';
  @import 'assets/scss/reset.scss';
  @import 'assets/scss/mixin.scss';

  #app {
    font-family: $mainEnglishWords;
    text-align: center;
    color: $black;
  }

</style>

