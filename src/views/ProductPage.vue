<template>
    <div v-if="store.state.user " > 
  <RouterView />
    </div>
    </template>
    
    <script setup>
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router'
    const store = useStore();
    if(!store.state.user){
      const router = useRouter()
      router.push('/login')
    }
    
    </script>