<template>
  <div>
    <h1>{{title}}</h1>
    <img :src="image.src" :alt="image.alt">
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Welcome to Vue Photo',
        photos: [

        ]
      }
    },
    created() {
      
    }
  }
</script>

<style lang="scss">
</style>