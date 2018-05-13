<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  box-sizing: border-box;
}
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
  padding: 0 15px;
}
body {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
</style>
