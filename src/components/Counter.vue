<template>
  <h1>Counter Vuex</h1>
  <h2>Direcct Acces {{ $store.state.contador }}</h2>

  <h2>Computed: {{ countComputed }}</h2>

  <button @click="increment">+1</button>
  <button @click="incrementVal(5)">+5</button>
  <button @click="randmonInt">Random</button>

  <h1>Map State</h1>
  <h2>{{ contador }}</h2>
  <h3>LastMutation: {{ lastMutation }}</h3>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    countComputed() {
      return this.$store.state.contador;
    },
    // los 3 puntos es la desestruturacion de datos, para usara mis propios computed
    ...mapState(["contador", "lastMutation"]),
    // esto es si yo tengo un variable que se llame igual que mi state
    // ...mapState({
    //    contador: state => state.contador,
    //    lastMutation: state => state.lastMutation,
    // })
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    incrementVal(val) {
      this.$store.commit("incrementVal", val);
    },
    incrementRandom(){
       const random = Math.random() * (11 - 1) + 1;
       const valor = Math.round(random);
       this.$store.commit("incrementVal", valor);
    },
    ...mapActions({
      randmonInt: 'incrementRandomInt'
    })
  },
};
</script>
