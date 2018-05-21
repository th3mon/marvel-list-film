import fetch from 'node-fetch';

export default class MovieService {
  constructor() {
    this.movies = [
      { title: 'Avengers' }
    ];
  }

  all() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

    return fetch(apiUrl)
      .then(response => response.json());
  }
}
