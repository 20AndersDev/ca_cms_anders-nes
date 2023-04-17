import { movies } from "/JS/movies.js";

const listOfVideos = document.querySelector('.div-list-of-videos-movies');
const actionButton = document.querySelector('#action');
const allButton = document.querySelector('#all');
const dramaButton = document.querySelector('#drama');
const comedyButton = document.querySelector('#comedy');
const ulGenreMenu = document.querySelector('.ul-genre-menu');

function createMovieMarkup(movie) {
  const movieDiv = document.createElement('div');
  movieDiv.classList.add('div-movie');

  const movieLink = document.createElement('a');
  movieLink.href = `productpage.html?id=${movie.id}`;

  const movieImg = document.createElement('img');
  movieImg.src = movie.imageSrc;
  movieImg.alt = `Movie poster - ${movie.title}`;
  movieImg.classList.add('movie');

  const movieTitleDiv = document.createElement('div');
  movieTitleDiv.classList.add('div-movie-title');

  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie-title');
  movieTitle.textContent = movie.title;

  movieLink.appendChild(movieImg);
  movieTitleDiv.appendChild(movieTitle);

  movieDiv.appendChild(movieLink);
  movieDiv.appendChild(movieTitleDiv);

  return movieDiv;
}

function displayMovies(moviesArray, filterFunction = movie => true) {
  listOfVideos.innerHTML = '';
  moviesArray.filter(filterFunction).forEach(movie => {
    const movieMarkup = createMovieMarkup(movie);
    listOfVideos.appendChild(movieMarkup);
  });
}

// Display all movies by default
displayMovies(movies);

actionButton.addEventListener('click', () => {
  displayMovies(movies, movie => movie.action);
  ulGenreMenu.style.display = 'none';

});

allButton.addEventListener('click', () => {
  displayMovies(movies);
  ulGenreMenu.style.display = 'none';
});

dramaButton.addEventListener('click', () => {
  displayMovies(movies, movie => movie.drama);
  ulGenreMenu.style.display = 'none';
});

comedyButton.addEventListener('click', () => {
  displayMovies(movies, movie => movie.comedy);
  ulGenreMenu.style.display = 'none';
});