<template>
    <div class="flex flex-col mx-auto items-center text-primary justify-center w-1/2 my-10 relative p-16 bg-fade rounded-2xl backdrop-blur backdrop-opacity-1 border border-fade shadow   ">
     <div class="text-4xl font-bold">Register</div>
     <p> {{ FirstName }}</p>
     <form class="flex font-semibold gap-1  flex-col w-full ">
       <InputField type="text" placeholder="First Name" name="First name" v-model="FirstName"/>
       <InputField type="text" placeholder="Last Name" name="Last name" v-model="lastName" />
       <InputField type="email" placeholder="Email" name="Email" v-model="email" />
       <InputField type="password" placeholder="Password" name="Password" v-model="password" />
       <InputField type="password" placeholder="Confirm Password" name="Confirm Password" v-model="confirmPassword"  />

       <button class="py-2 hover:bg-secondary transition-colors rounded-md px-2 my-2 bg-primary text-white" type="submit">Register</button>
     </form>
   </div>
</template>

<script setup>
import InputField from '@/Constant/InputField.vue';
import { ref } from 'vue'

const FirstName=ref('')
const lastName =ref('')
const email =ref('')
const password =ref('')
const confirmPassword =ref('')
</script>