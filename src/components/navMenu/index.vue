<template>
    <div>
        <h2 @click="toHome">导航栏</h2>
        <n-menu @update:value="handleUpdateValue" :options="menuOptions"></n-menu>
    </div>
</template>

<script lang="ts">
const menuOptions = [
    {
      label:"第一个页面",
      key:'/one',
    }
];

import { defineComponent } from 'vue'
import { useRoute, useRouter} from "vue-router";

export default defineComponent({
  setup() {
      const route = useRoute();
      const router = useRouter();

      console.log(menuOptions);
      const handleUpdateValue = (key, item)=>{
        console.log(key);
        console.log(typeof(key));
        router.push({
          path: key,
        })
      }
      const toHome = ()=>{
        router.push("/");
      }

      return{
        menuOptions,
        handleUpdateValue,
        toHome,
      }
  },
})
</script>


<style>

</style>