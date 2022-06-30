let map

function init() {
    renderMap()
    getRestaurantsFromDB()
}


function renderMap() {
    const jerezFRA = {
        lat: 36.6866,
        lng: -6.137173641
    };
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 7,
            center: jerezFRA
        }
    );
}