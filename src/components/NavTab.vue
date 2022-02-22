<template>
  <nav class="nav-tab">
    <ul class="categories">
      <li v-for="item in items" :key="item.id" class="category">
        <router-link class="item-tile" :to="item.path" >
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  @import '../assets/scss/main.scss';
  .nav-tab {
    width: 100%;
    margin-top: 10px;
    @include pad {
      margin: 50px 0;
    }
    .categories {
      width: 100%;
      @include flex (row, center, center);
      flex-wrap: wrap;
      gap: 8%;
      .category {
        position: relative;
        font-size: 18px;
        font-family: $BeVietnam;
        font-weight: 500;
        margin-bottom: 10px;
        .item-tile {
          text-decoration: none;
          color: $black;
        }
        @include pad {
          font-size: 25px;
        }
        &:hover {
          font-weight: 600;
          &::after {
            position: absolute;
            top: 120%;
            left: 0;
            content: " ";
            width: 100%;
            border-bottom: 3px solid $mainYellow;
          }
        }
      }
    }
    
  }
</style>

<script>
import {v4 as uuidv4} from 'uuid'

export default {
  data () {
    return {
      items: [
        {
          id: uuidv4(),
          title: 'All',
          path:'/freya-portfolio'
        },
        {
          id: uuidv4(),
          title: 'Vue.js',
          path:'/freya-portfolio/Vue'
        },
        {
          id: uuidv4(),
          title: 'RWD',
          path:'/freya-portfolio/RWD'
        },
        {
          id: uuidv4(),
          title: 'Bootstrap',
          path:'/freya-portfolio/Bootstrap'
        },
        {
          id: uuidv4(),
          title: 'Express',
          path:'/freya-portfolio/Express'
        },
        {
          id: uuidv4(),
          title: 'React',
          path:'/freya-portfolio/React'
        },
      ],
    }
  }
}


</script>
