<template>
<div>
    <div class="md:w-[90%] gap-6 flex md:flex-row flex-col my-10 mx-5">
        <div class="md:w-1/2">
            <img :src="each.thumbnail" alt="pic" class="w-full  h-96 ">
            <h1 class="text-primary font-bold text-5xl" >{{ each.title }} </h1>
            <p class="text-secondary text-2xl font-bold " >Price:${{ each.price }} </p>
        </div>
        <div class=" md:w-1/3"> 
            <div class="flex flex-col gap-5 px-5 py-2 text-primary text-lg shadow-xl  h-96 border" > 
                <h1>Available Stock: <span class="font-bold"> {{ each.stock }} </span></h1>
                <h1>Desc : <span class="font-bold"> {{ each.description }} </span> </h1>
                <h1>Brand : <span class="font-bold"> {{ each.brand }} </span> </h1>
                <h1>Ratings : <span class="font-bold"> {{ each.rating }} </span> </h1>
                <h1>Discount : <span class="font-bold"> {{ each.discountPercentage }} % off </span> </h1>

            </div>
        </div>
        <Icon
        @click="History"
        class="md:mx-5 sticky inset-0"
        icon="ic:baseline-arrow-back"
        color="#320281"
        width="60"
        height="50"
      />
    </div>
    <div class="flex flex-col md:flex-row"> 
        <div class="md:flex  grid  mx-3 grid-cols-2 gap-5 my-10 ">
        <img :src="each.images[0]" alt="product" class="w-60 rounded-xl  h-60 ">    
        <img :src="each.images[2]" alt="product" class="w-60 rounded-xl  h-60 ">    
        <img :src="each.images[3]" alt="product" class="w-60 rounded-xl   h-60 ">    
        <img :src="each.images[4]" alt="product" class="w-60 rounded-xl  h-60 ">    
        </div>
        <div class="flex items-center gap-5 mx-4" > 
            <button class="md:py-3 md:px-5 py-3 px-1 bg-primary  rounded-lg text-white shadow-2xl  hover:text-primary hover:bg-secondary hover:font-semibold" > Add a Review  </button>
            <button class="md:py-3 md:px-5 py-3 px-1 bg-primary  rounded-lg text-white shadow-2xl  hover:text-primary hover:bg-secondary hover:font-semibold ">Add to Cart </button>
            <button class="md:py-3 md:px-5 py-3 px-1 bg-primary  rounded-lg text-white shadow-2xl  hover:text-primary hover:bg-secondary hover:font-semibold ">Whishlist </button>

        </div>
    </div>
</div>  
</template>
<script setup>

import { Icon } from "@iconify/vue";
import {useRouter} from 'vue-router'
import { ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
const router = useRouter();
const History = () => {
  router.go(-1);
};
const route = useRoute()
const each = ref([])
axios.get(`https://dummyjson.com/products/${route.params.id}`)
.then(res => {
  each.value = res.data
  console.log(each.value)
})
.catch(err => {
  console.log(err)
})
console.log(route.params.id)

</script>