<template>
  <div>
    
    <div v-motion-pop-visible-once   class="flex flex-col md:mx-auto items-center text-primary justify-center  mx-4 md:w-1/2 my-14  p-10 md:p-16 bg-fade rounded-2xl backdrop-blur backdrop-opacity-1 border border-fade shadow   ">
     <div class="text-4xl font-bold">Register</div>
     
     
     <form @submit.prevent="register " class="flex font-semibold gap-1  flex-col w-full ">
      <div class="flex font-semibold gap-1 flex-col w-full" > 
        <label class="" for="First name">First Name</label>
        <input        v-on:input="error.FirstName = ''" type="text" class="py-2 rounded-md focus:outline  focus:outline-primary px-2" placeholder="First Name"  v-model="FirstName"  />
        <span class="text-red-700" v-if="error.FirstName"> {{ error.FirstName }} </span>
      </div>
      <div class="flex font-semibold gap-1 flex-col w-full" > 
        <label class="" for="Last name">Last Name</label>
        <input v-on:input="error.LastName = ''"  type="text" class="py-2 rounded-md focus:outline  focus:outline-primary px-2" placeholder="Last Name"  v-model="LastName"  />
        <span class="text-red-700" v-if="error.LastName"> {{ error.LastName }} </span>
         
      </div>
      <div class="flex font-semibold gap-1 flex-col w-full" > 
        <label class="" for="Email">Email</label>
        <input v-on:input="error.email = ''"  type="email" class="py-2 rounded-md focus:outline  focus:outline-primary px-2" placeholder="Email"  v-model="email"  />
        <span class="text-red-700" v-if="error.email"> {{ error.email }} </span>
      
      </div>
      <div class="flex font-semibold gap-1 flex-col w-full" > 
        <label class="" for="Password">Password</label>
        <input v-on:input="error.password = ''"  type="password" class="py-2 rounded-md focus:outline  focus:outline-primary px-2" placeholder="Password"  v-model="password"  />
        <span class="text-red-700" v-if="error.password"> {{ error.password }} </span>
        
      </div>
       <button class="py-2 hover:bg-secondary transition-colors rounded-md px-2 my-2 bg-primary text-white" type="submit">Register</button>
     </form>
   </div>
   <div v-if="loading" class="loading">
    <div class="spinner"></div>  
    </div>
   </div>
</template>

<script setup>
// import InputField from '@/Constant/InputField.vue';
import { ref } from 'vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();
const loading = ref(false)
const router = useRouter()


// import store from '@/store';
const FirstName = ref('')
const LastName = ref('')
const email=ref('')
const password=ref('')
const error = ref({
  FirstName: '',
  LastName: '',
  email: '',
  password: ''
})

const Validator =()=>{
  const validated = ref(true)
  if(FirstName.value === ''){
    error.value.FirstName = 'First Name is required'
    validated.value = false
  }
    else if(!FirstName.value.match(/^[a-zA-Z]+$/)){
      error.value.FirstName = 'First Name must be alphabets only'
      validated.value = false
    }
  if(LastName.value === ''){
    error.value.LastName = 'Last Name is required'
    validated.value = false
  }
  if(email.value === ''){
    error.value.email = 'Email is required'
    validated.value = false
  }
  else if((!/\S+@\S+\.\S+/.test(email.value))){
    error.value.email = 'please enter a valid email'
    validated.value = false
  }
  if(password.value === ''){
    error.value.password = 'Password is required'
    validated.value = false
  }
  else if (password.value.length < 8) {
      this.errors.password = 'Password must be at least 8 characters long.';
      validated.value = false;
    }
    return validated.value === true
  }

const register = async ()=>{
  if (!Validator()) return
  if( Validator()){

  const user = {
    FirstName: FirstName.value,
    LastName: LastName.value,
    email: email.value,
    password: password.value
  }
  try{
    loading.value = true
    await store.dispatch('register', user)
    loading.value = false
  }catch(err){
    console.log(err)
  }
}
}
if(store.state.user){
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
  to {transform: rotate(360deg);}
}
</style>




       <!-- <InputField type="text" placeholder="First Name" name="First name" v-model="FirstName"/>
       <InputField type="text" placeholder="Last Name" name="Last name" v-model="LastName" />
       <InputField type="email" placeholder="Email" name="Email" v-model="email" />
       <InputField type="password" placeholder="Password" name="Password" v-model="password" /> -->
