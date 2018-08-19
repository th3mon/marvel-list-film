<template>
<div class="list-movies">
  <h2 class="header">{{pageTitle}}</h2>
  <ul class="movies">
    <li class="single-box-wrapper" v-for="movie in movies" :key="movie.id">
      <div class="content">
        <img :src="movie.picture" class="img-responsive" alt="">
        <router-link class="title" :to="{ name: 'SingleMovie', params: {id: movie.id, movie} }">
          {{movie.title}}
        </router-link>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import * as config from '../../config/env.json';

export default {
  name: 'Movies',
  data() {
    return {
      movies: [],
      pageTitle: 'List of movies',
    };
  },
  methods: {
    downloadData() {
      const url = `${config.api}movies`;
      fetch(url)
      const url = "http://localhost:8084/movies";
      fetch(url, {
        method: "GET"
      })
        .then(response => response.json())
        .then((movies) => {
          this.$data.movies = movies;
        });
    },
    cutText() {
      const textWrap = document.getElementsByClassName('text');
      if (document.readyState === 'complete') {
        document.addEventListener(
          'DOMContentLoaded',
          () => {
            Array.from(textWrap);
          },
          false,
        );
      }
    },
  },
  beforeMount() {
    this.downloadData();
  },
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
.movies {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
}
.single-box-wrapper {
  padding: 15px 10px;
  margin: 0;
  display: block;
}

.single-box-wrapper img {
  max-width: 35px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.single-box-wrapper a {
  width: 100%;
  height: 100%;
  display: block;
}

.single-box-wrapper .content {
  display: block;
  border: 0.5px solid #000;
  height: 100%;
  background: #e23636;
}

.single-box-wrapper p {
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.3;
  color: #000;
}

.single-box-wrapper a {
  text-decoration: none;
  color: #00B233;
  font-size: 14px;
}

.title {
  display: inline-block;
  position: relative;
  z-index: 2;
}

.content {
  position: relative;
}

.content .test {
  display: none;
  position: absolute;
  z-index: 1;
}

.content.active .test {
  display: inline-block;
  animation: slideright 1.5s forwards;
}

@media(min-width: 1200px) {
  .single-box-wrapper {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

</style>
