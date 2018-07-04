import Vue from 'vue';
import Router from 'vue-router';
import Movies from '@/components/Movies';
import SingleMovie from '@/components/Single-movie';

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
      component: SingleMovie,
      props: true,
    },
  ],
});

