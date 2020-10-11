let upButton = document.querySelector('.up-button');

window.onscroll = function () {
  if (window.pageYOffset > 900) {
    upButton.classList.add('shown');   //.shown { display: inline-block;}//
  } else{
      upButton.classList.remove('shown');  
    }

};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};
