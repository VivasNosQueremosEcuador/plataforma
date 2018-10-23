var map = L.map('map-wrapper').setView([-1.8, -83], 6)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© Contribuidores de <a href="http://openstreetmap.org">OpenStreetMap</a>',
    minZoom: 6,
    maxZoom: 15
}).addTo(map)

const provincias = VIVAS.mapData.provincias

console.log('VIVAS:', VIVAS.mapData);

provincias.forEach(function (provincia) {
    L.marker(provincia.coordenadas).bindTooltip('Click para más información de ' + provincia.provincia)
        .on('click', function () {
            document.getElementById('modal-title').innerText = 'Provincia ' + provincia.provincia
            document.getElementById('modal-body').innerHTML = '<div class="uk-child-width-1-2@s uk-grid-match uk-text-center" uk-grid>' +
                '<div>\n' +
                '        <div class="uk-card uk-card-hover uk-card-small uk-card-body">\n' +
                '            <h3 class="uk-card-title">' + provincia.total + '</h3>\n' +
                '            <p>feminicidios contados</p>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '    <div>\n' +
                '        <div class="uk-card uk-card-hover uk-card-small uk-card-body">\n' +
                '            <h3 class="uk-card-title">' + provincia.faltante + '</h3>\n' +
                '            <p>feminicidios con historias faltantes</p>\n' +
                '        </div>\n' +
                '    </div>' +
                '</div>'
            UIkit.modal('#map-modal').show()
            //TODO('Agregar link a categories/provincia')s
        }).addTo(map)
})

s
