import { createStore } from 'vuex'
import getRandomInt from "../helpers/getRandomInt";


export default createStore({

   // el state es como nuestras variables
   state: {
      contador: 1,
      lastMutation: 'none',
      isLoading: false,
   },

   // las mutations son como nuestros metodos 
   mutations: {

      increment(state) {
         state.contador++;
         state.lastMutation = 'Incremet';
      },
      incrementVal(state, val) {
         state.contador += val;
         state.lastMutation = 'Incremet Val';
      },
      setLoading(state, valor) {
         state.isLoading = valor;
      }
   },
   // las actiones si pueden ser acincronas
   actions: {
      async incrementRandomInt({ commit }) {

         commit('setLoading', true)
         const randomInt = await getRandomInt();
         commit('incrementVal', randomInt);
         commit('setLoading', false)
      }
   },

   getters: {
      squareCoutn(state) {
         return state.contador * state.contador
      }
   }



})