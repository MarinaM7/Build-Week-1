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