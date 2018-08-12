<template>
    <div class="single-movie">
      <div class="image">
        <img :src="movie.picture" alt="">
      </div>
      <h2 class="title">
        {{movie.title}}
      </h2>
      <div class="info">
        About:
        {{movie.description}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['id', 'movie'],
};
</script>
