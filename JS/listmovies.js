const wpUrlAll = 'https://ca.wp-andersnes.no/wp-json/wc/store/products';

const mostPopularMovies = document.querySelector('.div-mostpopular-movies');
const divNewReleaseMovies = document.querySelector('.div-newrelease-movies');

async function getMovies() {
  try {
    const response = await fetch(wpUrlAll);
    const json = await response.json();
    console.log(json);
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
    movieLink.href = `productpage.html?id=${index}`;

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

    mostPopularMovies.appendChild(movieDiv);
  });

  const newReleaseMovies = movies.filter(movie => movie.newRelease).reverse();

  newReleaseMovies.forEach((movie, index) => {
    const movieDiv = document.createElement('div');
    movieDiv.classList.add('div-movie');

    const movieLink = document.createElement('a');
    movieLink.href = `productpage.html?id=${movies.length - 1 - index}`;

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

    divNewReleaseMovies.appendChild(movieDiv);
  });
}

getMovies();