<template>
  <div class="wrap">
    <h1 class="center">{{title}}</h1>
    <ul class="list">
      <li class="item" v-for="photo of photos" :key="photo._id">
        <div class="panel">
          <h2 class="panel-header"> {{photo.titulo}}</h2>
          <div class="panel-content">
            <img class="w-100" :src="photo.url" :alt="photo.titulo" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "app",
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
</style>
