
<template>
  <div>
    {{name}}
  </div>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    data: function() {
      return {
        name: 'Hello World!',
      }
    },
  });
</script>

<style>
body {
  color: white;
  background-color: black;
}
</style>
<style lang="scss">
$primary-color: white;
$bg: black;
body {
  color: $primary-color;
  background-color: $bg;
}
</style>
