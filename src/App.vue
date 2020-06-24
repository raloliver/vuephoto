<template>
  <div class="wrap">
    <h1 class="center">{{title}}</h1>
    <ul class="list">
      <li class="item" v-for="photo of photos" :key="photo._id">
        <img :src="photo.url" :alt="photo.titulo" />
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
</style>
