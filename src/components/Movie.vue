<template>
    <div class="single-movie">
      <div class="image">
        <img :src="picture" alt="">
      </div>
      <h2 class="title">
        {{title}}
      </h2>
      <div class="info">
        About:
        {{description}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'Movie',
  props: ['id', 'title', 'description', 'picture']
};
</script>
