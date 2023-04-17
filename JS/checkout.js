import { movies } from "/JS/movies.js";

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const movie = movies[movieId];

const movieImg = document.querySelector('#checkout-product-img');
movieImg.src = movie.imageSrc;

const movieTitle = document.querySelector('.checkoutpage-h2');
movieTitle.textContent = movie.title;

const movieDescription = document.querySelector('.checkout-p');
movieDescription.textContent = movie.description;
