<template>
  <div id="app">
    <button @click="onSuppliersListClick">Cliquez ici</button><br>
    <button @click="onMapClick">Cliquez ici 2</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import SuppliersList from './components/SuppliersList.vue';
import SuppliersMap from './components/SuppliersMap.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    SuppliersList,
    SuppliersMap
  },
  methods: {
    onSuppliersListClick() {
      alert('hello');
    },
    onMapClick() {
      alert('coucou');
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
