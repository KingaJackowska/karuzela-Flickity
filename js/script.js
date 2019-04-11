var elem = document.querySelector(".carousel");
var flkty = new Flickity(elem, {
    hash: true,
    cellAlign: "left",
    contain: true,
    pageDots: false,
});

var flkty = new Flickity('.carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
    progress = Math.max( 0, Math.min( 1, progress ) );
    progressBar.style.width = progress * 100 + '%';
});
