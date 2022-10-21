/* PER SLIDER A UNA IMMAGINE

var n_img = 8;
var corrente = 1;

function succ() {
    corrente++;
    if(corrente>n_img){
        corrente = 1;
    }
    for(var i = n_img; i > 0; i--){
        document.querySelector('.single-img:nth-child('+ i +')').style.display = 'none';
    }
    document.querySelector('.single-img:nth-child(' + corrente +')').style.display = 'block';
}

*/

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);