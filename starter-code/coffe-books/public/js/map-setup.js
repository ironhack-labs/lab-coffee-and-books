const startingPoint = {
    lat: 40.42042928766834,
    lng: - 3.7091093386208702
}

function renderMap() {

    new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 12,
            center: startingPoint,

        }
    )



}