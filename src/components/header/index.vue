<template>
    <div class="header">
      <h2>我的头部</h2>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name:'headerBox',



})
</script>


<style lang="scss" scope>
 .header{
    width: 100%;
    height: 70px;
    background-color: aqua;
    line-height: 68px;
    text-align: center;
    h2{
      color: red;
    }
  }
  
</style>