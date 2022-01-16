<template>
  <nav class="navbar">
    <div class="container">
      <h1 class="navbar-title">PORTFOLIO</h1>
      <label for="navbar-toggle" class="navbar-toggle-label" >
        <i class="far fa-caret-square-down hamburger"></i>
      </label>
      <input type="checkbox"
      class="navbar-toggle" name="navbar-toggle" id="navbar-toggle" v-show="none">
      <div class="wrapper">
        <div class="navbar-links">
          <a href="#" target="_blank" class="nav-item">
            <i class="far fa-address-card item-icon"></i>
            <span class="item-title">Resume</span></a>
          <a href="#" target="_blank" class="nav-item">
            <i class="fab fa-github item-icon"></i>
            <span class="item-title">GitHub</span></a>
          <a href="#" target="_blank" class="nav-item">
            <i class="far fa-file-alt item-icon"></i>
            <span class="item-title">Blog</span></a>
          <a href="#" target="_blank" class="nav-item">
            <i class="far fa-envelope-open item-icon"></i>
            <span class="item-title">Contact me</span></a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
  @import '../assets/scss/main.scss';
  @import '../assets/scss/mixin.scss';
  .navbar {
    position: fixed;
    width: 100%;
    height: 110px;
    background-color: $darkGray;
    color: $white;
    @include pad {
      height: 180px;
    }
    .container {
      position: relative;
      width: 100%;
      height: 100%;
      @include flex (row, space-around, center);
      &::before, &::after {
        position: absolute;
        content: '';
        width: 90%;
        height: 2px;
        background-color: $white;
      }
      &::before {
        left: 0;
        top: 20px;
      }
      &::after {
        right: 0;
        bottom: 23px;
      }
      .navbar-title {
        font-family: $mainEnglishWords;
        font-weight: bold;
        font-size: 35px;
        cursor: default;
        @include pad {
         font-size: 55px
        }
      };
      .navbar-toggle-label {
        .hamburger {
          font-size: 25px;
          cursor: pointer;
          @include pad {
            font-size: 42px
          }
          @include pc {
            display: none;
          }
        }
      }
      .navbar-toggle {
        &:checked ~ .wrapper {
          opacity: 1;
          transform: scale(1,1);
          @include pc {
            all : unset;
          }
        }
      }
      .wrapper {
        width: 100%;
        position: absolute;
        top: 100%;
        background-color: $white;
        opacity: 0;
        transform: scale(1,0);
        transform-origin: top;
        transition: transform 0.5s 
        ease-in-out;
        @include pc {
          transform: unset;
          opacity: 1;
          position: unset;
          background-color: unset ;
          width: unset;
          margin-top: 90px;
        }
        .navbar-links {
          width: 100%;
          @include flex (column, flex-end, center);
          @include pc {
            width: unset;
            @include flex (row, space-around, center);
            gap: 30px;
          }
          .nav-item {
            position: relative;
            width: 50%;
            @include flex (row, space-between, center);
            margin: 20px 0;
            @include pc {
              width: unset;
              gap: 10px;
            }
            &:hover > .item-title {
              color: $mainYellow;
              font-weight: bold;
              font-size: 25px;
            }
            &:hover > .item-icon {
              color: $mainYellow;
              font-size: 45px;
            }
            &::after {
              content:'';
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: 120%;
              width: 170%;
              height: 2px;
              background-color: $lightGray;
              @include pc {
                display: none;
              }
            }
            .item-icon {
              font-size: 30px;
              @include pad {
                font-size: 39px;
              }
            }
            .item-title {
              font-size: 18px;
              color: $black;
              @include pad {
                font-size: 28px
              }
            }

          }
        }
      }
      
    }
  }
</style>

<script>

export default {
  data () {
    return {
      none: false,
    }
  }
}
</script>
