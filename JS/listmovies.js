const wpUrlAll = 'https://ca.wp-andersnes.no/wp-json/wc/store/products'; // all products (movies)

const mostPopularMovies = document.querySelector('.div-mostpopular-movies');
const divNewReleaseMovies = document.querySelector('.div-newrelease-movies');

async function getMovies() {
  try {
    const response = await fetch(wpUrlAll);
    const json = await response.json();
    renderMovies(json);
  } catch (error) {
    console.log(error);
  }
}

function renderMovies(movies) {
  movies.forEach((movie, index) => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('div-movie');

    const movieLink = document.createElement('a');
    movieLink.href = `productpage.html?id=${movie.id}`;

    const movieImg = document.createElement('img');
    movieImg.src = movie.images[0].src;
    movieImg.alt = `Movie poster - ${movie.title}`;
    movieImg.classList.add('movie');

    const movieTitleDiv = document.createElement('div');
    movieTitleDiv.classList.add('div-movie-title');

    const movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie-title');
    movieTitle.textContent = movie.name;

    movieLink.appendChild(movieImg);
    movieTitleDiv.appendChild(movieTitle);

    movieDiv.appendChild(movieLink);
    movieDiv.appendChild(movieTitleDiv);

    mostPopularMovies.appendChild(movieDiv);
  });

}

getMovies();