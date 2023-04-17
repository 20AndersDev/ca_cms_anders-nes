const mostPopularMoviesDiv = document.querySelector('.div-mostpopular-movies');
const newMoviesDiv = document.querySelector('.div-newrelease-movies');
const scrollLeftBtn = document.querySelector('.pop-scroll-left');
const scrollRightBtn = document.querySelector('.pop-scroll-right');
const newScrollLeftBtn = document.querySelector('.new-scroll-right');
const newScrollRightBtn = document.querySelector('.new-scroll-left');




scrollLeftBtn.addEventListener('click', () => {
  const targetScrollLeft = mostPopularMoviesDiv.scrollLeft - 600;
  mostPopularMoviesDiv.scroll({
    left: targetScrollLeft,
    behavior: 'smooth'
  });
  updateScrollButtonsVisibility(targetScrollLeft, mostPopularMoviesDiv.scrollWidth, mostPopularMoviesDiv.clientWidth, scrollLeftBtn, scrollRightBtn);
});

scrollRightBtn.addEventListener('click', () => {
  const targetScrollLeft = mostPopularMoviesDiv.scrollLeft + 600;
  mostPopularMoviesDiv.scroll({
    left: targetScrollLeft,
    behavior: 'smooth'
  });
  updateScrollButtonsVisibility(targetScrollLeft, mostPopularMoviesDiv.scrollWidth, mostPopularMoviesDiv.clientWidth, scrollLeftBtn, scrollRightBtn);
});

function updateScrollButtonsVisibility(scrollLeft, scrollWidth, clientWidth, leftButton, rightButton) {
  if (scrollLeft <= 0) {
    leftButton.style.backgroundColor = '#1A0F3F';
  } else {
    leftButton.style.backgroundColor = '#4b3ce9';
  };

  if (scrollLeft >= (scrollWidth - clientWidth)) {
    rightButton.style.backgroundColor = '#1A0F3F';
  } else {
    rightButton.style.backgroundColor = '#4b3ce9';
  };
}



//new movies scroll section

newScrollLeftBtn.addEventListener('click', () => {
  const targetScrollLeft = newMoviesDiv.scrollLeft + 600;
  newMoviesDiv.scroll({
    left: targetScrollLeft,
    behavior: 'smooth'
  });
  newUpdateScrollButtonsVisibility(targetScrollLeft, newMoviesDiv.scrollWidth, newMoviesDiv.clientWidth, newScrollLeftBtn, newScrollRightBtn);
});

newScrollRightBtn.addEventListener('click', () => {
  const targetScrollLeft = newMoviesDiv.scrollLeft - 600;
  newMoviesDiv.scroll({
    left: targetScrollLeft,
    behavior: 'smooth'
  });
  newUpdateScrollButtonsVisibility(targetScrollLeft, newMoviesDiv.scrollWidth, newMoviesDiv.clientWidth, newScrollLeftBtn, newScrollRightBtn);
});

function newUpdateScrollButtonsVisibility(scrollLeft, scrollWidth, clientWidth, leftButton, rightButton) {
  if (scrollLeft <= 0) {
    rightButton.style.backgroundColor = '#1A0F3F';
  } else {
    rightButton.style.backgroundColor = '#4b3ce9';
  }

  if (scrollLeft >= (scrollWidth - clientWidth)) {
    leftButton.style.backgroundColor = '#1A0F3F';
  } else {
    leftButton.style.backgroundColor = '#4b3ce9';
  }
}

