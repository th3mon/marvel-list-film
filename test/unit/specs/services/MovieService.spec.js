import MovieService from '@/services/MovieSerivce';

fdescribe('MovieService', () => {
  it('should return list of movies', (done) => {
    const movieService = new MovieService();

    return movieService.all()
      .then((movies) => {
        expect(movies.length).toBeGreaterThan(0);
      })
      .then(done);
  });

  xit('should return one movie', done => {
    const movie = { title: 'Spider-man: Homecoming' };

    return movieService.one({ title: 'Spider-man: Homecoming' })
      .then((movie => expect(movie.title).toBe('Spider-man: Homecoming')))
      .then(done);
  });
});
