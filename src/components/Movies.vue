<template>
<div class="list-movies">
  <h2 class="header">Movies</h2>
  <ul class="movies" v-if="apiConnection">
    <li class="single-box-wrapper" v-for="movie in movies" :key="movie.id">
      <div class="content" v-bind:style="{'background-image': 'url(' + movie.bgImage +')'}">
      <a v-on:click="toggleClass($event)" v-bind:class="{active: isActive}" href="#" class="content">
        <span class="title">
         {{movie.title}}
        </span>
        <span class="test">test</span>
      </a>
      <p class="desc">
        {{movie.description}}
      </p>
      </div>
      </li>
  </ul>
  <div class="error-wrapper" v-else>
    <p class="text">
      {{errorMessage}}
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Movies',
  data() {
    return {
      movies: [],
      movies: [],
      isActive: false,
      apiConnection: null,
      errorMessage: null
    };
  },
  methods: {
    downloadDate() {
      const url = 'http://localhost:8084/movies';
      fetch(url)
      const url = "http://localhost:8084/movies";
      fetch(url, {
        method: "GET"
      })
        .then(response => response.json())
        .then((movies) => { this.$data.movies = movies; })
        .catch(() => this.error());
        .then(movies => {
          this.$data.movies = movies;
          this.$data.apiConnection = true;
        })
        .catch(rejected => this.error());
    },
    error() {
      // console.log('nie udało się połączyć z bazą');
    },
      this.$data.errorMessage = "Nie udało się połączyć z bazą";
      this.$data.apiConnection = false;
    },
    toggleClass(event) {
      event.preventDefault();
      this.isActive = !this.isActive;
    }
  },
  beforeMount() {
    this.downloadDate();
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
  flex: 0 0 50%;
  max-width: 50%;
  margin: 0;
  padding: 0 15px;
  display: block;
}

.single-box-wrapper p {
  font-size: 14px;
  margin-bottom: 10px;
  line-height: 1.3;
  color: #000;
}

.single-box-wrapper a {
  text-decoration: none;
  color: #42b983;
  font-size: 14px;
}

@keyframes slideright {
  0% {
    right: 0;
  }
  100% {
    right: -35px;
  }
}

@keyframes sliderleft {
  0% {
    right: -35px;
  }
  100% {
    right: 0;
  }
}

.title {
  display: inline-block;
  background: #fff;
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
</style>
