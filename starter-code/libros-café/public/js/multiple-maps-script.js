let map

function thumbMapInit() {

    drawEachMap()

}

function drawEachMap() {

    //creo un array con los nombres de cada sitio(strings)
    const names = document.querySelectorAll(".name")
    let namesArray = []
    names.forEach(elm => namesArray.push(elm.innerHTML))

    //creo otros dos arrays con la longitudes y latitudes de cada sitio
    //convertidos en numeros

    const stringsLat = document.querySelectorAll(".lat")
    let latArray = []
    stringsLat.forEach(elm => { latArray.push(+elm.innerHTML) })


    const stringsLng = document.querySelectorAll(".lng")
    let lngArray = []
    stringsLng.forEach(elm => { lngArray.push(+elm.innerHTML) })




    //COMO EN EL MODELO LAS COORDENADAS SON NÚMERO, HE TENIDO QUE HACER ESO.
    //NO ME DÍ CUENTA QUE DEBÍAN SER INTRODUCIDAS COMO STRING
    //(maravillosa ida que tuve, y gracias a google por la manera facil de transformar string a numero)

    const mapsArray = document.querySelectorAll('.map')




    const { Map } = google.maps

    namesArray.forEach((elm, idx) => {


        map = new Map(
            mapsArray[idx],
            {
                zoom: 16,
                center: { lat: latArray[idx], lng: lngArray[idx] },

            }
        )
        const { Marker } = google.maps

        new Marker({
            map,
            position: {
                lat: latArray[idx],
                lng: lngArray[idx]
            },
            title: elm
        })
    })
}

