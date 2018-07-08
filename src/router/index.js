import Vue from 'vue';
import Router from 'vue-router';
import Movies from '@/components/Movies';
import Movie from '@/components/Movie';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movies',
      component: Movies,
      props: true,
    },
    {
      path: '/movies/:id',
      name: 'SingleMovie',
      component: Movie,
      props: true,
    },
  ],
});

