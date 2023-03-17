<template>
    <div class="flex font-semibold gap-1 flex-col w-full">
      <label :for="name">{{ name }}</label>
      <input class="py-2 rounded-md focus:outline  focus:outline-primary px-2"  v-model="theValue"  @input="updateInputValue"  v-bind="$attrs"  />
    </div>
  </template>
  
  <script setup>
  import { defineProps , defineEmits, ref} from 'vue'

 defineProps({
    name:{
      type: String, 
      default: ''
    },
    inputValue:{
      type: String, 
      default: ''
    },
    
  })
  const theValue = ref('')
  const emits = defineEmits(['update:inputValue'])
  function updateInputValue(event) {
    const  inputfield = event.target.value
    theValue.value = inputfield
  emits('update:inputValue', theValue)
  console.log(theValue)
  // console.log(inputValue)
}
  </script>
