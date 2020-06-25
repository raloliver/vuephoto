<template>
  <div class="wrap">
    <vue-menu :routes="routes" />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/Menu.vue";

export default {
  components: {
    "vue-menu": Menu
  },
  data() {
    return {
      routes
    };
  }
};
</script>

<style lang="scss">
.wrap {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.center {
  text-align: center;
}

.list {
  list-style: none;
}

.d-inline {
  display: inline-block;
}

.w-100 {
  width: 100%;
}

.d-block {
  display: block;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
