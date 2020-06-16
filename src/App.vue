<template>
  <h1>{{title}}</h1>
  <img :src="image.src" :alt="image.alt">
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'Welcome to Vue Photo',
        image: {
          src: 'https://storage.coverr.co/t/fx61sPhmdLbA5KY02aWMZ02rztv61oEhJ5',
          alt: 'Duck'
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
