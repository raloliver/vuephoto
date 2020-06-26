<template>
  <button @click="callToAction()" class="button danger" :type="type">{{ label }}</button>
</template>

<script>
export default {
  props: ["type", "label"],
  methods: {
    callToAction() {
      $this.emit('eventEmitter')
    }
  }
};
</script>

<style scoped>
.button {
  display: inline-block;
  padding: 10px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1.2em;
}

.danger {
  background: firebrick;
  color: white;
}

.default {
  background: darkcyan;
  color: white;
}
</style>
