<template>
  <div class="wrap">
    <h1 class="center">{{ title }}</h1>
    <ul class="list">
      <li class="item" v-for="photo of photos" :key="photo._id">
        <vue-panel :title="photo.titulo">
          <img class="w-100" :src="photo.url" :alt="photo.titulo" />
        </vue-panel>
      </li>
    </ul>
  </div>
</template>

<script>
  import Panel from './components/shared/panel/Panel.vue'
  export default {
    name: "app",
    components: {
      'vue-panel': Panel
    },
    data() {
      return {
        title: "Welcome to Vue Photo",
        photos: []
      };
    },
    created() {
      this.$http
        .get("http://localhost:3000/v1/fotos")
        .then(res => res.json())
        .then(
          photos => (this.photos = photos),
          err => console.error(err)
        );
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

  .item {
    display: inline-block;
  }

  .w-100 {
    width: 100%;
  }
</style>
