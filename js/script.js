'use strict';
(function () {
    var map;
    var templateSlajd = document.getElementById('template-slajd').innerHTML;

    Mustache.parse(templateSlajd);

    for (let i = 0; i < myData.length; i++) {
        var idData = { id: "carousel-cell" + i };
        var allData = Object.assign(myData[i], idData);
        var generatedData = Mustache.render(templateSlajd, allData);
        var carousel = document.getElementById('carousel');
        carousel.insertAdjacentHTML('beforeend', generatedData);
    }


    //Glówny kod Flickity i dotsy
    var elem = document.querySelector(".carousel");
    var flkty = new Flickity(elem, {
        hash: true,
        cellAlign: "left",
        contain: true,
        pageDots: false,
    });

    //Pasek stanu pod spodem
    var progressBar = document.querySelector('.progress-bar')

    flkty.on('scroll', function (progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + '%';
    });

    flkty.on('change', function (index) {
        map.panTo(myData[index].coords)
        map.setZoom(12)
    });

    // Initialize and add the map
    window.initMap = function () {

        // The map, centered at Uluru
        var cellNumber = flkty.selectedIndex;
        var actualCoords = myData[cellNumber].coords;

        map = new google.maps.Map(
            document.getElementById('map'), { zoom: 9.5, center: actualCoords });

        //Rozdaje markery

        for (let i = 0; i < myData.length; i++) {
            var coords = myData[i].coords;
            var marker = new google.maps.Marker({
                position: coords,
                map: map
            });

            marker.addListener('click', function() {
                flkty.select(i);
                map.setZoom(12);
            })


        }

    }
})();