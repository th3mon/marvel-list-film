<template>
  <h1>Movies</h1>
</template>

<script>
export default {
  name: 'Movies',
  movies: [],
  data() {
    return {
      fetch('api-url')
        .then(resposne => resposne.json())
        .then(movies => this.movies = movies);
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
