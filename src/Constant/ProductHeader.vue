<template>
  <div>
    <div> 
      <h1>Show</h1>
    </div>
    </div>
</template>


























































<!-- <template>
  <div class=" max-h-screen" > 
    <div  :class="{ 'bg-primary absolute z-10 lg:relative lg:top-0 left-0 w-full overflow-hidden top-16 h-screen flex-col lg:flex-row lg:h-14 shadow-md md:shadow-secondary px-2 py-4  flex  lg:items-center': !showNav , 'bg-primary h-12 transition-all md:max-w-full overflow-hidden  w-full duration-300 transform translate-x-0  lg:h-14 shadow-md md:shadow-secondary px-2 py-4  flex   lg:items-center': showNav}">
        <div>
          <div class="flex lg:hidden  items-center justify-between">
            <Icon
            @click="toggleNav"
              class="hover:animate-spin"
              icon="ic:outline-menu"
              color="#fff"
              width="30"
              height="30"
            />
          </div>
        </div>
        <div   class="my-1 flex flex-col " v-for="data in sideNavData" :key="data.name">
          <div class="flex  relative md:flex-col">
            <div class="flex ml-3 w-1/2 md:w-60   lg:w-40 px-2 items-center rounded-lg hover:bg-secondary">
              <RouterLink  @click="logout"
                :to="data.link"
                :class="{'lg:flex hidden w-72 text-white py-2 items-center gap-3':showNav, 'flex w-72 text-white py-2 items-center gap-3 ' : !showNav}"
              >
                <Icon :icon="data.icon" color="#fff" width="25" height="25" />
                {{ data.name }}
              </RouterLink>
              <div v-show="!showNav" v-if="data.accordion">
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
            <div  v-show="showCategory" class="mx-auto h-72 overflow-y-scroll hide-scrollbars bg-primary z-30 top-12 py-2 rounded-lg absolute" v-if="data.accordion" >
              <RouterLink  
              v-for="category in categories"

                  :key="category"  
                  :to="`/product${category.link}`"  class="text-white">
                <div @click="clickCategory" class="hover:bg-secondary list-none rounded-md w-60 px-5 py-2">
                  {{ category.name }}
                </div>
                </RouterLink>
            </div>
          </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { Icon } from "@iconify/vue";
  import { sideNavData } from "@/Data/data";
  import { RouterLink } from "vue-router";
  import { ref } from "vue";
  import { useStore } from "vuex";
  import {  useRouter } from "vue-router";
  // import HeaderNav from "@/Constant/HeaderNav.vue";
  import axios from "axios";
  const showNav = ref(true);
  const toggleNav = () => {
    showNav.value = !showNav.value;
    showCategory.value = false;
  };
  const route = useRouter();
  const showCategory = ref(false);
  const categories = ref([]);
  const store = useStore();
  const logout=()=>{
    showCategory.value = false;
    showNav.value = !showNav.value
    if(sideNavData[7].type === "logout"){
    store.dispatch("logout");
    route.push("/login");
    }
  }
  
  const ShowNestedCategory = () => {
    showCategory.value = !showCategory.value;

  };
  const clickCategory = () => {
    showCategory.value = !showCategory.value;
    showNav.value = !showNav.value;
  };
  
  axios
    .get("https://dummyjson.com/products/categories")
    .then((res) => {
      categories.value = res.data.slice(0,20).map((category) => ({
        name: category,
        link: `/category/${category}`,
      }));
    })
    .catch((err) => {
      console.log(err);
    });
  
  </script> -->