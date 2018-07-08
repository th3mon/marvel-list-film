import Vue from 'vue';
import Movies from '@/components/Movies';

describe('Movies.vue', () => {
  const Constructor = Vue.extend(Movies);
  const vm = new Constructor({
    data: {
      pageTitle: 'test title',
    },
  }).$mount();
  it('beforeMount hook', () => {
    expect(typeof Movies.beforeMount).toBe('function');
  });
  it('Main title shows correctly', () => {
    expect(vm.pageTitle).not.toBe('');
  });
  it('list of movies add correctly', () => {
    expect(typeof vm.movies).toBe('object');
  });
});

