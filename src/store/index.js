import { createStore } from 'vuex'
import contadorStore from './contador'


export default createStore({

   modules:{
      contadorModule: contadorStore
   }

})