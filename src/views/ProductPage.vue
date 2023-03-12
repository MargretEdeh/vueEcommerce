<template>
  <div class="flex w-full">
    <div
      class="w-1/5 hide-scrollbars h-screen overflow-y-scroll  shadow-md shadow-secondary px-2 py-4 bg-primary flex flex-col"
    >
      <div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <Icon
              icon="mdi:cart-arrow-down"
              color="#fff"
              width="30"
              height="30"
            />
            <h1 class="text-3xl text-white font-bold">TechCart</h1>
          </div>
          <Icon
            class="hover:animate-spin"
            icon="ic:outline-menu"
            color="#fff"
            width="30"
            height="30"
          />
        </div>
      </div>
      <div class="mx-auto my-6 flex justify-center">
        <Icon icon="radix-icons:avatar" color="#fff" width="130" height="130" />
      </div>
      <div class="my-1" v-for="data in sideNavData" :key="data.name">
        <div class="flex flex-col">
          <div class="flex w-80= items-center rounded-lg hover:bg-secondary">
            <RouterLink
              :to="data.link"
              class="flex w-72 text-white px-8 py-2 items-center gap-3"
            >
              <Icon :icon="data.icon" color="#fff" width="30" height="30" />
              {{ data.name }}
            </RouterLink>
            <div v-if="data.accordion">
              <Icon
                @click="ShowNestedCategory"
                :class="{ 'rotate-90': showCategory }"
                icon="ic:baseline-keyboard-arrow-down"
                color="#fff"
                width="30"
                height="30"
              />
            </div>
          </div>
          <div v-show="showCategory" class="mx-auto" v-if="data.accordion">
            <RouterLink  
            v-for="category in categories"
                :key="category"  
             :to="category.link" class="text-white">
              <div class="hover:bg-secondary list-none rounded-md w-60 px-5 py-2">
                {{ category.name }}
              </div>
              </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full"> 
      <HeaderNav />
    </div>
    
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue";
import { sideNavData } from "@/Data/data";
import { RouterLink } from "vue-router";
import { ref } from "vue";
import HeaderNav from "@/Constant/HeaderNav.vue";
import axios from "axios";
const showCategory = ref(false);
const categories = ref([]);

const ShowNestedCategory = () => {
  showCategory.value = !showCategory.value;
};
axios
  .get("https://dummyjson.com/products/categories")
  .then((res) => {
    categories.value = res.data.slice(0,5).map((category) => ({
      name: category,
      link: `/category/${category}`,
    }));
  })
  .catch((err) => {
    console.log(err);
  });
</script>
