import state from "./state";
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'


const contadorStore = {


   namespaced: true,
   // el state es como nuestras variables
   state,
   // las mutations son como nuestros metodos 
   mutations,
   // las actiones si pueden ser acincronas
   actions,
   getters

}

export default contadorStore