<template>
  <div v-if="store.state.user" class=" my-10 max-w-full">
    <div class=" w-10/12 md:w-1/2 border md:border-2 flex justify-between mx-auto py-1 px-2 rounded-xl shadow border-primary">
      <input
        class="outline-none w-full border-none md:px-2 md:py-2"
        type="text"
        placeholder="search"
        @input="searched"
        v-model="search"

      />
      <Icon icon="material-symbols:search" color="#320281" width="50" height="50" />
    </div>
    <div>
      <Icon
        @click="History"
        class="md:mx-5 sticky inset-0"
        icon="ic:baseline-arrow-back"
        color="#320281"
        width="60"
        height="50"
      />
      <div  class="grid gap-3 grid-cols-1 md:grid-cols-2 mx-auto w-[90%]  lg:w-[60%] my-5">
        <div
          class="py-5 rounded hover:bg-purple-200 shadow-2xl"
          v-for="product in products"
          :key="product"
        >
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-72 h-72 mx-auto"
          />
          <h1 class="text-center text-xl text-primary font-semibold">
            {{ product.title }}
          </h1>
          <div class="text-center">
            <p class="text-secondary font-bold">Price:${{ product.price }}</p>
            <div class="flex gap-4 items-center justify-center my-2">
              <button
                class="py-3 px-2 bg-primary rounded-lg text-white shadow-2xl hover:text-primary hover:bg-secondary hover:font-semibold"
              >
                Add to Cart
              </button>
              <RouterLink
                :to="{ name: 'EachProduct', params: { id: product.id } }"
              >
                <button
                  class="py-3 px-2 bg-secondary rounded-lg hover:text-white hover:bg-primary text-primary font-semibold shadow-2xl"
                >
                  Veiw More
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoading"   class="flex justify-center items-center">
      <div class="loader animate-spin ease-linear rounded-full border-8 border-t-8 border-gradient bg-secondary h-20 w-20 mb-4"></div>
      
    <!-- <h1 class="text-4xl">Loading.... </h1> -->
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
const router = useRouter();
const isLoading = ref(false);
const search = ref("");
const products = ref([]);

const fetchData = (id)=>{ 
  isLoading.value = true;
  
  axios
  .get(`https://dummyjson.com/products/category/${id}`)
  .then((res) => {
    isLoading.value = false;
    console.log(res.data);
    products.value = res.data.products;
    console.log(route.params.id);
    // isLoading.value = true;
  })
  .catch((err) => {
    console.log(err);
  });}


const searched =()=>{
  axios.get(`https://dummyjson.com/products/search?q=${search.value}`)
  .then((res)=>{
    console.log(res.data);
    products.value = res.data.products;
  })
}

const History = () => {
  router.go(-1);
};

const route = useRoute();

watch(
  () =>route.params.id ,
  (newVal) => {
    // isLoading.value=false
    fetchData(newVal)
  },
  { immediate: true, deep: true }
);

const store = useStore();
if (!store.state.user) {
  const router = useRouter();
  router.push("/login");
  alert("Please Login First");
}
 

  onMounted(() => {
    // isLoading.value = true;
    fetchData(route.params.id)
    // setTimeout(() => {
    //   isLoading.value = false;
    // }, 3000);
  });
</script>
<style scoped>
.loader {
  border-color: #fff transparent transparent transparent;
}


.border-gradient {
  border-image: linear-gradient(to right, #320281, #f8f8f8, #320281) 1;
  border-image-slice: 3;
  border-radius: 50%;
}

</style>
