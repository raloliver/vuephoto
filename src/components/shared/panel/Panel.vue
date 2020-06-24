<template>
  <div class="panel">
    <h2 class="panel-header" @dblclick="isVisible = !isVisible">{{ title }}</h2>
    <transition name="fade">
      <div class="panel-content" v-show="isVisible">
        <slot> </slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: ['title'],
    data() {
      return {
        isVisible: true
      }
    }
  };
</script>

<style lang="scss" scoped>
  .panel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .panel-header {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  * {
    box-shadow: 5px 5px 5px;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }
</style>
