<template>
  <div class="back">
    <q-input rounded standout v-model="text" placeholder="pesquisar" />
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      text: ref(""),
    };
  },
};
</script>
<style>
</style>
