<template>
    <div class="header">
      <!-- <n-avatar
        size="large" src="../../assets/logo.png"
      /> -->
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
    // background-color: aqua;
    line-height: 68px;
    box-shadow: 3px 3px 2px #eeeeee;
    margin-bottom: 5px;
    h2{
      text-align: center;
      color: red;
    }
  }
  
</style>