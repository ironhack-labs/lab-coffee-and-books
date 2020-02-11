window.onload = () => {
    let map, icon;

    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(40.3922301, -3.6998982),
            zoom: 3
        });
        allPlaces.forEach(place => {
            if(place.type === 'Coffee Shop') {
                icon = 'http://maps.google.com/mapfiles/kml/pal2/icon54.png';
            } else {
                icon = 'http://maps.google.com/mapfiles/kml/pal2/icon31.png';
            }
            new google.maps.Marker({
                position: new google.maps.LatLng(place.location.coordinates[1], place.location.coordinates[0]),
                map: map,
                title: place.name,
                icon: icon
            });
        })
    }
    initMap();
}

let list = document.querySelector('.list');
allPlaces.forEach(place => {
    let listItem = document.createElement('li');
    listItem.innerHTML = place.name;
    list.appendChild(listItem);
    let remove = document.createElement('a');
    remove.href = `/${place._id}/delete`;
    remove.innerHTML = 'Delete';
    listItem.appendChild(remove);
});



