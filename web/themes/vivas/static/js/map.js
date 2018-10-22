var map = L.map('map-wrapper').setView([-1.8, -83], 6)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© Contribuidores de <a href="http://openstreetmap.org">OpenStreetMap</a>',
  minZoom: 6,
  maxZoom: 15
}).addTo(map)

var provincias = VIVAS.mapData.provincias

var coordenadas = []

for (var i = 0; i < provincias.length; i++) {
    coordenadas.push(provincias[i].coordenadas)
}

console.log('VIVAS:', VIVAS.mapData);
console.log('coordenadas:', coordenadas);

provincias.forEach(function (provincia) {
    console.log(provincia);
    L.marker(provincia.coordenadas).bindTooltip('Click para más información')
        .on('click', function () {
            document.getElementById('uk-modal-title').innerText = 'Provincia ' + provincia.provincia
            var x = document.createElement("P");
            var t = document.createTextNode("Totales:" + provincia.total)
            x.appendChild(t);
            document.getElementById('modal-body').appendChild(x)
            UIkit.modal('#map-modal').show()
        }).addTo(map)
})

