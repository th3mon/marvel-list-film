import Vue from 'vue';

<template>
  <main id="app">
    <header>
      <h1 class="header">
        {{pageHeader}}
      </h1>
    </header>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      pageHeader: 'Marvel List Film',
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
* {
  box-sizing: border-box;
}

.img-responsive {
  max-width: 100%;
  height: auto;
}

@media(min-width: 1054px) {
  #app {
    max-width: 1024px;
    margin: 0 auto;
    display: block;
    padding: 0 30px;
    width: 100%;
  }
}
</style>
