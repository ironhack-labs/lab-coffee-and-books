function startMap() {

    console.log('hi')
    const ironhackMAD = {
        lat: 40.3923463,
        lng: -3.6984743999999994
    };
    
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 15,
            center: ironhackMAD
        }
    );

    const bounds = new google.maps.LatLngBounds();
    let markers = [];
    places.forEach( p => {
        let title = p.name;
        let position = {
            lat: p.location.coordinates[0],
            lng: p.location.coordinates[1]
          };
        var pin = new google.maps.Marker({ position, map, title  });
        bounds.extend({lat:p.location.coordinates[0],lng:p.location.coordinates[1]});
        markers.push(pin);
    });
    console.log(markers);
    map.fitBounds(bounds);

}