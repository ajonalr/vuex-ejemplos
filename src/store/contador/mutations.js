export const increment = (state) => {
   state.contador++;
   state.lastMutation = 'Incremet';
}

export const incrementVal= (state, val) => {
   state.contador += val;
   state.lastMutation = 'Incremet Val';
}


export const setLoading = (state, valor) => {
   state.isLoading = valor;
}