<template>
  <h1 v-on:click="downloadDate">Movies</h1>
</template>

<script>
export default {
  name: "Movies",
  movies: [],
  data() {
    return {};
  },
  methods: {
    downloadDate() {
      const url = "http://localhost:8084/movies";
      fetch(url)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(rejected => this.error());
    },
    error() {
      console.log("nie udało się połączyć z bazą");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
