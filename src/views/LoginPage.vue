<template>
  <div>
    <div
      class="flex flex-col md:mx-auto mx-4 items-center text-primary justify-center md:w-1/2 my-20 relative p-16 bg-fade rounded-2xl backdrop-blur backdrop-opacity-1 border border-fade shadow"
    >
      <div class="text-4xl font-bold">Login</div>
      <form
        @submit.prevent="login"
        class="flex font-semibold gap-1 flex-col w-full"
      >
        <div class="flex font-semibold gap-1 flex-col w-full">
          <label class="" for="Email">Email</label>
          <input
            v-on:input="error.email = ''"
            type="email"
            class="py-2 rounded-md focus:outline focus:outline-primary px-2"
            placeholder="Email"
            v-model="email"
          />
          <span class="text-red-700" v-if="error.email">
            {{ error.email }}
          </span>
        </div>
        <div class="flex font-semibold gap-1 flex-col w-full">
          <label class="" for="Password">Password</label>
          <input
            v-on:input="error.password = ''"
            type="password"
            class="py-2 rounded-md focus:outline focus:outline-primary px-2"
            placeholder="Password"
            v-model="password"
          />
          <span class="text-red-700" v-if="error.password">
            {{ error.password }}
          </span>
        </div>

        <!-- <InputField type="email" placeholder="Email" name="Email" @inputValue="email" />
       <InputField type="password" placeholder="Password" name="Password" @inputValue="password" /> -->
        <button
          class="py-2 hover:bg-secondary transition-colors rounded-md px-2 my-2 bg-primary text-white"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
    <div v-if="loading" class="loading">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script setup>
// import InputField from '@/Constant/InputField.vue';
import { ref, watch } from "vue";
// import store from '@/store';
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const loading = ref(false);
const store = useStore();
const email = ref("");
const password = ref("");
const error = ref({
  email: "",
  password: "",
});
const Validator = () => {
  const validated = ref(true);
  if (email.value === "") {
    error.value.email = "Email is required";
    validated.value = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    error.value.email = "please enter a valid email";
    validated.value = false;
  }
  if (password.value === "") {
    error.value.password = "Password is required";
    validated.value = false;
  } else if (password.value.length < 8) {
    this.errors.password = "Password must be at least 8 characters long.";
    validated.value = false;
  }
  return validated.value === true;
};
watch(!store.state.user, (newVal) => {
  if (newVal) {
    const router = useRouter();
    router.push(`/product/$store.state.id`);
  }
});

const login =async () => {
  if (!Validator()) {
    return;
  }
  if (Validator()) {
    try {
      loading.value = true;
      await store.dispatch("login", { email: email.value, password: password.value });
      loading.value = false;
      console.log(email.value, password.value);
    } catch (err) {
      console.log(err);
    }
  }
};
if(store.state.user){
  const router = useRouter();
  router.push(`/product/:id`);
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #320281;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
