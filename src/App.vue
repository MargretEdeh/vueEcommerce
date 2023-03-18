<template>
   <!-- to be move to a Header component -->
  <div :class="{'background ': true ,'bg-primary': layout}">
    <div class="bg-white shadow flex py-4 justify-between px-10">
      <div class="flex flex-row-reverse">
      <h1 class="text-2xl md:text-4xl text-primary font-bold" >TechCart</h1>
      <Icon icon="mdi:cart-arrow-down" color="#320281" width="40" height="40" />
      </div>
      <div class="flex gap-3 items-center md:gap-10 "> 
        <a href="https://www.instagram.com/margretedeh/" target="_blank" ><Icon class="w-6 h-6 md:w-10 md:h-10" icon="ri:instagram-fill" color="#320281"  /> </a>
        <a href="https://twitter.com/EdehMargret" target="_blank" ><Icon class="w-6 h-6 md:w-10 md:h-10" icon="ri:twitter-fill" color="#320281"  /></a>
        <a href="https://www.linkedin.com/in/margret-edeh-65505b200/" target="_blank" ><Icon class="w-6 h-6 md:w-10 md:h-10" icon="ri:linkedin-fill" color="#320281"  /></a>
        <a href="https://github.com/MargretEdeh" target="_blank" ><Icon class="w-6 h-6 md:w-10 md:h-10" icon="carbon:logo-github" color="#320281"  /></a>
        
      </div>
    </div>
    <div v-if="!layout"> 
      <ProductHeader/>
  
    </div>
  <div  v-if="layout" class="lottie relative">
<Vue3Lottie :animationData=" theAnimation "   :loop="true" :autoplay="true" :rendererSettings="{preserveAspectRatio: 'xMidYMid slice'}" />
  </div>
  <div> 
    <RouterView />
   
  </div>
  </div>
</template>
<script  setup>
import {Icon} from "@iconify/vue"
import { RouterView } from 'vue-router'
import {computed,} from 'vue'
import {Vue3Lottie} from 'vue3-lottie' 
import ProductHeader from "./Constant/ProductHeader.vue"
import animationData from  './animationData.json'
import 'vue3-lottie/dist/style.css'
import { useRoute } from "vue-router"
const theAnimation =computed(() => animationData)
const route = useRoute()
 const layout = computed(()=>{
  const preferedRoute = ['home', 'register', 'login']
  return preferedRoute.includes(route.name)
 })

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
.background{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>