console.log('map data read from map_data.json', VIVAS.mapData)

var map = L.map('map-wrapper').setView([-1.8, -83], 6)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© Contribuidores de <a href="http://openstreetmap.org">OpenStreetMap</a>',
  minZoom: 6,
  maxZoom: 15
}).addTo(map)

var provincias = VIVAS.mapData.provincias

var coordenadas = []

for (var i = 0; i < provincias.length; i++) {
  for (var j = 0; j < provincias[i].cantones.length; j++) {
    coordenadas.push(provincias[i].cantones[j].coordenadas)
  }
}

var clusterGroup = L.markerClusterGroup()

coordenadas.forEach(function(coordenada) {
  L.marker(coordenada).bindTooltip('Clic para más información')
  .on('click', function() {
    UIkit.modal('#map-modal').show()
  }).addTo(clusterGroup)
})

clusterGroup.addTo(map)
