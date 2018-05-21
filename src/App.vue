import Vue from 'vue';

<template>
  <main id="app">
    <header>
      <h1>
        Marvel List Film
      </h1>
    </header>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 475px;
  width: 100%;
  display: flex;
  margin: 0 auto;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
