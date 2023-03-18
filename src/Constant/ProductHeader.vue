<template>
  <div>
    <div
      :class="{
        'bg-primary px-4   fixed gap-4 z-20 lg:z-0 lg:relative flex lg:flex-row flex-col  lg:items-center md:gap-5 w-full lg:h-16': true,
        '  relative h-[30px] bg-green-300 md:h-16 ': nav ,
      }"
    >
      <div>
        <Icon
          @click="toggleNav"
          class="hover:animate-spin lg:hidden ml-2"
          icon="ic:outline-menu"
          color="#fff"
          width="30"
          height="30"
        />
      </div>
      <div
        class="flex lg:flex-row flex-col"
        v-for="data in sideNavData"
        :key="data"
      >
        <div
          :class="{
            'flex lg:justify-between text-white w-40 hover:bg-secondary rounded-lg  px-1 py-2':
              !nav,
            'hidden md:flex lg:justify-between text-white w-40 hover:bg-secondary rounded-lg  px-1 py-2':
              nav,
          }"
        >
          <RouterLink class="flex gap-3" :to="data.link">
            <Icon :icon="data.icon" color="#fff" width="25" height="25" />
            {{ data.name }}
          </RouterLink>
          <div v-if="data.accordion">
            <Icon
              @click="toggleCategory"
              :class="{ 'rotate-90': showCategory }"
              icon="ic:baseline-keyboard-arrow-down"
              color="#fff"
              width="30"
              height="30"
            />
          </div>
        </div>
        <div
          v-show="showCategory"
          v-if="data.accordion"
          class="mx-auto w-60 h-72 overflow-y-scroll hide-scrollbars bg-primary z-40 top-24 lg:top-16 py-2 rounded-lg absolute"
        >
          <div v-if="isLoading" class="loading">
            <div class="spinner"></div>
          </div>
          <RouterLink
            v-for="category in categories"
            :key="category"
            :to="`/product${category.link}`"
            class="text-white"
          >
            <div
              @click="clickCategory"
              class="hover:bg-secondary list-none rounded-md w-60 px-5 py-2"
            >
              {{ category.name }}
            </div>
          </RouterLink>
        </div>
      </div>
      <div :class="{
            'flex lg:justify-between text-white w-40 hover:bg-secondary rounded-lg  px-1 py-2':
              !nav,
            'hidden md:flex lg:justify-between text-white w-40 hover:bg-secondary rounded-lg  px-1 py-2':
              nav,
          }" >
        <RouterLink  @click="logout" class="flex text-white  gap-3" to="/login">
            <Icon icon="carbon:logout" color="red" width="25" height="25" />
            logout
          </RouterLink>
         </div>
      
    </div>
  </div>
</template>

<script setup>
import { sideNavData } from "@/Data/data";
import { Icon } from "@iconify/vue";
import { useStore } from "vuex";
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

// const show = ref(true);
const isLoading = ref(false);
const router = useRouter();
const route = useRoute();
const store = useStore();
const categories = ref([]);
const showCategory = ref(false);
const nav = ref(true);

const toggleNav = () => {
  nav.value = !nav.value;
};

const toggleCategory = () => {
  showCategory.value = !showCategory.value;
};

const clickCategory = () => {
  showCategory.value = false;
  nav.value = !nav.value;
};
const logout =  () => {
   store.state.user=null;
   router.push("/login");
   store.dispatch("logout");
    console.log("logout");
};

watch(route.path, () => {
  isLoading.value = true;
  axios
    .get(`https://dummyjson.com/products/categories`)
    .then((res) => {
      categories.value = res.data.slice(0, 20).map((category) => ({
        name: category,
        link: `/category/${category}`,
      }));
      isLoading.value = false;
    })
    .catch((err) => {
      console.log(err);
    });
});

const fetchData = async () =>{ 
  isLoading.value = true;
  await  axios.get(`https://dummyjson.com/products/categories${route.path}`)
  .then((res) => {
    categories.value = res.data.slice(0, 20).map((category) => ({
      name: category,
      link: `/category/${category}`,
    }));
    isLoading.value = false;
  })
  .catch((err) => {
    console.log(err);
  });
}
onMounted(() => {
  fetchData();
});


</script>
<style scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4e09bd;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

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
