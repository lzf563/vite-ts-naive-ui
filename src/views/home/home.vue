<template>
    <div>
      <headerBox></headerBox>
      <div class="contentBox">
          <div class="leftBox">
            <navMenuBox/>
          </div>
          <div class="rightBox">
              <router-view/>
          </div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent , onMounted } from 'vue'
import headerBox from '../../components/header/index.vue';
import navMenuBox from "../../components/navMenu/index.vue";
export default defineComponent({
  components: {
    headerBox, navMenuBox
  },
  setup() {
      const getRightBoxWidth = ()=>{
          let leftBox= document.getElementsByClassName('leftBox');
          console.log(leftBox);
          console.log(leftBox[0]);
          let rightBox = document.getElementsByClassName('rightBox');
          console.log(rightBox);
          console.log(rightBox[0]);
          console.log(typeof("calc(100% - " +  leftBox[0].offsetWidth + "px)"))
          rightBox[0].style.width = "calc(100% - " +  leftBox[0].offsetWidth + "px)" ;
      }
      onMounted(()=>{
        getRightBoxWidth();
      });
  }
})
</script>

<style lang="scss" scope>
  .contentBox{
    display: flex;
    justify-content: space-between;
    .leftBox{
      width: 290px;
      height: 300px;
      // background-color: violet;
    }
    .rightBox{
      height: 300px;
      // background-color: yellow;
    }
  }
</style>
