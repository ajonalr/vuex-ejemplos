import  { createStore } from 'vuex'


export default createStore({ 

   state:{
      contador: 1,
      lastMutation: 'none'
   },
   mutations: {

      increment(state) {
         state.contador ++;
         state.lastMutation = 'Incremet';
      },
      incrementVal(state, val) {
         state.contador += val;
         state.lastMutation = 'Incremet Val';
      }

   },


})