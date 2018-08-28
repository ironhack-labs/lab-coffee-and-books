document.addEventListener(
    'DOMContentLoaded',
    () => {
        console.log('IronGenerator JS imported successfully!')

        function startMap() {
            const ironhackBCN = {
                lat: 41.3977381,
                lng: 2.190471916
            }
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5,
                center: ironhackBCN
            })

            axios.get('/climbing-walls').then(result => {
                result.data.forEach(wall => {
                    new google.maps.Marker({
                        position: wall.location,
                        map: map,
                        title: wall.name
                    })
                })
            })
        }

        startMap()
    },
    false
)
