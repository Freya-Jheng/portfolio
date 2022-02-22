<template>
  <div class="container">
    <NavTab />
    <!-- All Works -->
    <div class="box">
      <div class="cards-container">
        <div class="card" v-for="work in works" :key="work.id">
          <div class="text">
            <span>{{work.category}}</span>
            <h3>{{work.title}}</h3>
            <a :href="work.link" class="project-link"><i class="fas fa-angle-double-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
  @import '../assets/scss/main.scss';
  .container {
    outline: 2px solid purple;
    width: 100%;
    padding-top: 150px;
    @include pad {
    }
    
  }
</style>

<script>
import NavTab from '../components/NavTab.vue'
import {v4 as uuidv4} from 'uuid'
export default {
  components: {
    NavTab,
  },
  data () {
    return {
      works: [
        {
          id: uuidv4(),
          category: "Vue",
          title: "Restaurants Forum",
          link: "https://freya-jheng.github.io/shopping-cart/"
        },
        {
          id: uuidv4(),
          category: "Vue",
          title: "Restaurants Forum",
          link: "https://freya-jheng.github.io/shopping-cart/"
        },
        {
          id: uuidv4(),
          category: "Vue",
          title: "Restaurants Forum",
          link: "https://freya-jheng.github.io/shopping-cart/"
        },
         {
          id: uuidv4(),
          category: "Vue",
          title: "Restaurants Forum",
          link: "https://freya-jheng.github.io/shopping-cart/"
        },
         {
          id: uuidv4(),
          category: "Vue",
          title: "Restaurants Forum",
          link: "https://freya-jheng.github.io/shopping-cart/"
        },
      ],
    }
  }
}
</script>
