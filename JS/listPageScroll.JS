const listMoviesDiv = document.querySelector('.div-list-of-videos-movies');
const listScrollLeftBtn = document.querySelector('.list-scroll-left');
const listScrollRightBtn = document.querySelector('.list-scroll-right');

listScrollLeftBtn.addEventListener('click', () => {
    const targetScrollLeft = listMoviesDiv.scrollLeft - 600;
    listMoviesDiv.scroll({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
    updateScrollButtonsVisibility(targetScrollLeft, listMoviesDiv.scrollWidth, listMoviesDiv.clientWidth, listScrollLeftBtn, listScrollRightBtn);
  });
  
  listScrollRightBtn.addEventListener('click', () => {
    const targetScrollLeft = listMoviesDiv.scrollLeft + 600;
    listMoviesDiv.scroll({
      left: targetScrollLeft,
      behavior: 'smooth'
    });
    updateScrollButtonsVisibility(targetScrollLeft, listMoviesDiv.scrollWidth, listMoviesDiv.clientWidth, listScrollLeftBtn, listScrollRightBtn);
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
  