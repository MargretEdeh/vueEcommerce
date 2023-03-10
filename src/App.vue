<template>
  <div class="lottie bg-primary ">
    <div class="bg-white flex py-4 justify-between px-10">
      <h1 class="text-4xl text-primary font-bold" >TechCart</h1>
      <div class="flex gap-10 "> 
        <div class="w-10 h-10 rounded-full bg-primary" ></div> // social media icons
        <div class="w-10 h-10 rounded-full bg-primary" ></div>
        <div class="w-10 h-10 rounded-full bg-primary" ></div>
        <div class="w-10 h-10 rounded-full bg-primary" ></div>
      </div>
    </div>
    <RouterView />
  <div class="lottie relative">
<Vue3Lottie :animationData=" theAnimation "   :loop="true" :autoplay="true" :rendererSettings="{preserveAspectRatio: 'xMidYMid slice'}" />
  </div>
  <div> 
   
  </div>
  </div>
</template>
<script  setup>
// import {Icon} from "@iconify/vue"
import { RouterView } from 'vue-router'
import {computed,} from 'vue'
import {Vue3Lottie} from 'vue3-lottie' 
import animationData from  './animationData.json'
import 'vue3-lottie/dist/style.css'
const theAnimation =computed(() => animationData)


</script>
<style scoped>
.lottie {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>