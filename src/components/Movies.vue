<template>
<div class="list-movies">
  <h1>Movies</h1>
  <ul class="movies">
    <li class="single-box-wrapper" v-for="movie in movies" :key="movie.title">
      <a href="#" class="content">
        {{movie.title}}
      </a>
      </li>
  </ul>
</div>
</template>

<script>
export default {
  name: "Movies",
  data() {
    return {
      movies: []
    };
  },
  methods: {
    downloadDate() {
      const url = "http://localhost:8084/movies";
      fetch(url)
        .then(response => response.json())
        .then(movies => {
          console.log(movies);
          this.$data.movies = movies;
        })
        .catch(rejected => this.error());
    },
    error() {
      console.log("nie udało się połączyć z bazą");
    }
  },
  beforeMount() {
    this.downloadDate();
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
