'use strict';
(function(){

var templateSlajd = document.getElementById('template-slajd').innerHTML;

Mustache.parse(templateSlajd);

for(let i = 0; i < myData.length; i++) {
    var idData = {id: "carousel-cell" + (i + 1)};
    var allData = Object.assign(myData[i], idData);
    var generatedData = Mustache.render(templateSlajd, allData);
    var carousel = document.getElementById('carousel');
    carousel.insertAdjacentHTML('beforeend', generatedData);
}

})();


//Glówny kod Flickity i dotsy
var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
    hash: true,
    cellAlign: "left",
    contain: true,
    pageDots: false,
});

//Pasek stanu pod spodem
var flkty = new Flickity('.carousel');
var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});
