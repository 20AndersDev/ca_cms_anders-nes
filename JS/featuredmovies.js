const consumerKey = "ck_fddfd5fc1ddbbbfccd7a42a14b5c1bbe170618d6";
const secretKey = "cs_2ab09bccec3e8f72b07f393b479b8b4eeab44e34";

const featuredUrl = "https://ca.wp-andersnes.no/wp-json/wc/v3/products/?featured=true&consumer_key=" + consumerKey + "&consumer_secret=" + secretKey;
const divNewReleaseMovies = document.querySelector('.div-newrelease-movies');

async function getData() {
    try {
      const response = await fetch(featuredUrl);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async function renderFeaturedMovies() {
    const movies = await getData();
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
  
      divNewReleaseMovies.appendChild(movieDiv);
    });
  }
renderFeaturedMovies();