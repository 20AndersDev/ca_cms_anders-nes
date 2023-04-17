import { movies } from "/JS/movies.js";

const urlParams = new URLSearchParams(window.location.search);
const movieId = parseInt(urlParams.get('id'));

const movie = movies[movieId];

const movieImg = document.querySelector('.movie-image');
movieImg.src = movie.imageSrc;


const movieTitle = document.querySelector('.movie-title');
movieTitle.textContent = movie.title;

const movieDescription = document.querySelector('.movie-description');
movieDescription.textContent = movie.description;

const buyButton = document.querySelector('.productpage-div-buybutton');
const anchorElement = document.createElement('a');
anchorElement.href = `/checkout.html?id=${movieId}`;
anchorElement.classList.add('productpage-buybutton');
anchorElement.textContent = 'Buy now';
buyButton.appendChild(anchorElement);