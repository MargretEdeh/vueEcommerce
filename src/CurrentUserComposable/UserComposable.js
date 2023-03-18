import { useStore } from "vuex";
import { computed } from "vue";

 export default function CurrentUser() {
    const store = useStore()

    const theCurrentuser = computed(()=>{
        return store.state.user
    })
    return theCurrentuser

} 


