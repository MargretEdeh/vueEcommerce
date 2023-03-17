import { createStore } from "vuex";
// import axios from "axios";
// import { Auth } from 'firebase/auth'
import { auth } from '@/components/Firebase/firebaseconfig'
// import auth from '@/components/Firebase/firebaseconfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import router from "@/router";

export default createStore({
  state: {
    user: localStorage.getItem("user") || null,
    id: localStorage.getItem("id") || null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", user);
    },
    setId(state, id) {
      state.id = id;
      localStorage.setItem("id", id);
    },
    removeUser(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  actions: {
    async login({ commit }, info) {
      const {email, password}=info
      try{
        await signInWithEmailAndPassword(auth, email, password)
      }
      catch(error){
        switch(error.code){
          case "auth/invalid-email":
            alert("Invalid Email")
            break;
          case "auth/user-disabled":
            alert("User Disabled")
            break;
          case "auth/user-not-found":
            alert("User Not Found")
            break;
          case "auth/wrong-password":
            alert("Wrong Password")
            break;
            default:
              alert("Something went wrong")
        }
        return
       }
      commit('setUser', auth.currentUser)
      // commit('setId', auth.currentUser.uid)
      if(auth.currentUser){
      router.push(`./product/${auth.currentUser.uid}`)
      console.log(auth.currentUser);
      }
      },
      async register({commit}, info){
      const {email, password}= info
      try{
        await createUserWithEmailAndPassword(auth, email, password)
      }
      catch(err){
        switch(err.code){
          case "auth/email-already-in-use":
            alert("Email already in use")
            break;
          case "auth/invalid-email":
            alert("Invalid Email")
            break;
          case "auth/weak-password":
            alert("Weak Password")  
            break;
            default:
              alert("Something went wrong")
        }
        return
      }
      commit('setUser', auth.currentUser)
      console.log(auth.currentUser)
      commit('setId', auth.currentUser.uid)
      if(auth.currentUser){
      router.push("./login")
      }

      },
    async logout({commit}){
      await signOut(auth)
      commit("removeUser", auth)
    }

    // async logout({ commit }) {
    //   try {
    //     await signOut(auth);
    //     commit('removeUser');
    //   } catch (error) {
    //     console.error(error);
    //     throw error;
    //   }
    // }
  },
});
