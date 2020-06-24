<template>
  <div class="wrap">
    <h1 class="center">{{ title }}</h1>
    <input v-on:input="search = $event.target.value" type="search" class="d-block w-100" placeholder="search...">
    <ul class="list">
      <li class="d-inline" v-for="photo of filtredItems" :key="photo._id">
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
    computed: {
      filtredItems() {
        if (this.search) {
          //this 'i' it is for to get all, uppercase or not, forgot the sensitive case
          let filter = new RegExp(this.search.trim(), 'i')
          return this.photos.filter(photo => filter.test(photo.titulo))
        } else {
          return this.photos
        }
      }
    },
    data() {
      return {
        title: "Welcome to Vue Photo",
        photos: [],
        search: '',
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

  .d-inline {
    display: inline-block;
  }

  .w-100 {
    width: 100%;
  }

  .d-block {
    display: block;
  }
</style>
