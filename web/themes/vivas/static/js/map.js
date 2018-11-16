var map = L.map('map-wrapper').setView([-1.8, -83], 6)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© Contribuidores de <a href="http://openstreetmap.org">OpenStreetMap</a>',
    minZoom: 6,
    maxZoom: 15
}).addTo(map)

//TODO: Calcular los image bounds
//var imageUrl = '/theme/css/images/mapa_svg_continental_02.svg',
//  imageBounds = [[-5.024173, -93.56487], [2.843487, -75.18251]];
//L.imageOverlay(imageUrl, imageBounds).bringToFront().addTo(map);

const provincias = VIVAS.mapData.provincias

provincias.forEach(function (provincia) {
  var markerOptions = {
    icon: L.divIcon({
        className: 'custom-icon',
        html: '<span>' + provincia.total + '</span>'
      })
    };
    L.marker(provincia.coordenadas, markerOptions).bindTooltip('Click para más información de ' + provincia.provincia)
        .on('click', function () {
            document.getElementById('modal-title').innerText = 'Provincia ' + provincia.provincia
            document.getElementById('modal-body').innerHTML = '<div class="uk-child-width-1-2@s uk-grid-match uk-text-center" uk-grid>' +
                '<div>\n' +
                '        <div class="uk-card uk-card-small uk-card-body uk-background-muted">\n' +
                '            <h3 class="uk-card-title">' + provincia.total + '</h3>\n' +
                '            <p>feminicidios contados</p>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '    <div>\n' +
                '        <div class="uk-card uk-card-small uk-card-body uk-background-muted">\n' +
                '            <h3 class="uk-card-title">' + provincia.faltante + '</h3>\n' +
                '            <p>feminicidios con historias faltantes</p>\n' +
                '        </div>\n' +
                '    </div>' +
                '</div>'
            UIkit.modal('#map-modal').show()
            //TODO('Agregar link a categories/provincias cuando se tengan más historias')
        }).addTo(map)
})
