<template>
    <router-view/>
</template>

<script lang="ts">
import Home from './views/home/home.vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Home
  }
})
</script>

<style>

</style>
