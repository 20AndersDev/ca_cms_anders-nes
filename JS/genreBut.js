const genreBut = document.querySelector('.but-genre')
const ulGenreMenu = document.querySelector('.ul-genre-menu');

genreBut.addEventListener("click", listfunction );


function listfunction () {
    if (ulGenreMenu.style.display === 'none' || ulGenreMenu.style.display === '') {
        ulGenreMenu.style.display = 'block';
      } else {
        ulGenreMenu.style.display = 'none';
      }
    }