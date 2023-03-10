<template>
  <div>
    <div class="bg-white py-3 " >
      <div>
        <h1 class="text-primary text-3xl px-5">StarCart</h1>
      </div>
    </div>
  <div class="lottie relative">
<Vue3Lottie :animationData=" theAnimation "   :loop="true" :autoplay="true" :rendererSettings="{preserveAspectRatio: 'xMidYMid slice'}" />
  </div>
  <div> 
  <p class="text-center">Made with ❤️ by </p> 
</div>
  </div>
</template>
<script  setup>
import {computed} from 'vue'
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