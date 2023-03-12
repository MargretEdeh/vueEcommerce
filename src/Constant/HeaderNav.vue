<template>
    <div class="mx-2 my-2 flex items-center justify-between">
        <div class="py-1 rounded-lg px-3 border justify-between border-secondary flex  w-1/2">
            <input type="text" v-model="search" placeholder="Search"  class="py-1 border-none outline-none px-1" />
            <Icon icon="material-symbols:search-rounded" color="#320281" width="30" height="30" />
         </div>
         <div> 
            <div class="flex gap-4  ">
                 
                <Icon icon="mdi:bell-notification-outline" color="#320281" width="30" height="30" />
                <Icon icon="material-symbols:account-balance" color="#320281" width="30" height="30" />
                <Icon icon="uil:setting" color="#320281" width="30" height="30" />
            </div>

         </div>
    </div>
</template>
<script  setup>
import { Icon } from "@iconify/vue";

</script>