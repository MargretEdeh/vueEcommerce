<template>
  <div class=" mx-5 md:mx-0 my-10 md:my-20">
    <div class="bg-secondary animate__animated animate__fadeInLeft relative my-28  flex md:w-3/4  md:mx-auto h- md:h-72">
      <div class="flex-1 flex-col w-1/2" ></div>
      <div class="lg:w-80 -top-5 md:-top-10 md:left-60 lg:left-8 left-20 absolute w-44 h-44 lg:h-80">
        <Vue3Lottie
          :animationData="theAnimation"
          :loop="true"
          :autoplay="true"
          :rendererSettings="{ preserveAspectRatio: 'xMidYMid slice' }"
        />
      </div>

      <div v-for="content in view" :key="content" class="my-44   relative  md:my-32 lg:my-10 lg:w-3/4 px-3  md:px-20">
        <h1 class="lg:text-4xl text-2xl text-center md:text-start text-primary font-bold" >{{ content.title }} </h1>
        <p class="italic text-center md:text-start font-medium md:text-base text-lg text-white ">{{ content.body }}</p>
          <Icon @click="Previous" class="absolute top-60 md:top-16 md:px-1 px-3 py-3 md:py-3  rounded-full bg-slate-300 left-0 md:left-2 " icon="material-symbols:arrow-back-ios-rounded" color="#320281" width="50" height="50" />
          <Icon @click="next" class=" absolute top-60 ml-6 md:top-16 md:px-1 md:py-3 px-3 py-3  rounded-full bg-slate-300 left-[80%] md:left-[85%] lg:left-[90%] " icon="material-symbols:arrow-forward-ios-rounded" color="#320281" width="50" height="50" />
  
      </div>
    </div>

    <div  class="  mx-auto lg:absolute flex  my-5 flex-col">       
      <div v-motion-pop class=" flex  flex-col md:grid md:grid-cols-2 lg:grid-cols-5 gap-7 my-4 mx-auto "> 
      <div  class="flex flex-col shadow-sm  shadow-primary mx-4 px-3 py-3 rounded-xl  " v-for="each in example" :key="each">
        <img :src="each.thumbnail" alt="pic" class="w-40  h-40 mx-auto">
        <h1 class="text-primary font-bold text-center text-2xl" >{{ each.title }} </h1>
        <p class="text-secondary font-semibold" >Price:${{ each.price }} </p>
      </div>
      </div>
      <h1 class="text-primary font-bold text-center italic text-xl md:text-4xl" >Come Shop in our Virtual Market!!! </h1>

    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { Vue3Lottie } from "vue3-lottie";
import shoppingCart from "../shoppingCart.json";
import { contentData } from "@/Data/data";
import "vue3-lottie/dist/style.css";
import { Icon } from "@iconify/vue";
import axios from "axios";

const example =ref('')

axios.get("https://dummyjson.com/products?limit=5&skip=30")
  .then(res => {
    example.value = res.data.products
  })
  .catch(err => {
    console.log(err)
  })

const display = ref(1)
const total = ref(contentData.length)
const perDisplay = ref(1)
const totalPage = computed(() => Math.ceil(total.value / perDisplay.value))
const skip = ref(display.value * perDisplay.value - perDisplay.value)
const view = computed(() => contentData.slice(skip.value, skip.value + perDisplay.value))
const next = ()=>{
  if(display.value < totalPage.value){
    display.value++
    skip.value= display.value * perDisplay.value -perDisplay.value
    view.value = computed(() => contentData.slice(skip.value, skip.value + perDisplay.value))
  }
}
const Previous = ()=>{
  if(display.value>1){
    display.value--
    skip.value= display.value * perDisplay.value -perDisplay.value
    view.value = computed(() => contentData.slice(skip.value, skip.value + perDisplay.value))
    
  }
}

const theAnimation = computed(() => shoppingCart);
</script>

// import axios from 'axios' // import { ref, onMounted } from 'vue' // const
products = ref([]) // const FetchProducts = async () => { // try { // const res
= await axios.get('https://dummyjson.com/products') // // console.log(res.data)
// products.value = res.data.products // console.log(products.value) // } catch
(err) { // console.error(err) // } // } // onMounted(FetchProducts)
