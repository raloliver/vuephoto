<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <li v-for="photo of photos" :key="photo._id">
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
    let promise = this.$http.get("http://localhost:3000/v1/fotos");
    promise.then(res => {
      res.json().then(photos => (this.photos = photos));
    });
  }
};
</script>

<style lang="scss">
</style>