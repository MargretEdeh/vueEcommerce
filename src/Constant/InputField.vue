<template>
    <div class="flex font-semibold gap-1 flex-col w-full">
      <label :for="name">{{ name }}</label>
      <input class="py-2 rounded-md focus:outline  focus:outline-primary px-2" :value="inputValue"  @input="updateInputValue"  v-bind="$attrs"  />
    </div>
  </template>
  
  <script setup>
  import { defineProps , defineEmits} from 'vue'

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
  const emits = defineEmits(['update:inputValue'])
  function updateInputValue(event) {
  const inputValue = event.target.value
  emits('update:inputValue', inputValue)
  console.log(inputValue)
}
  </script>
