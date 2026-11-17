const mapCenter = [34.29430500859379, 134.78395506252335];
const map = L.map('map').setView(mapCenter, 15);
const marker = L.marker(mapCenter).addTo(map);
// クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);

marker.bindPopup('<b>Hello world!</b><br>I am a popup.').openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);