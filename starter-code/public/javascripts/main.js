const $container = document.querySelector(".info")
const $selectType = document.querySelector("#select-type [name=type]")

const markers = []

axios.get('/api')
  .then(response => {
    const data = response.data.places

    data.map((place) => {

      const container = $container.innerHTML += `
<div class="col-md-6 col-lg-4 d-flex justify-content-center">
<div class="card mt-4 mb-4" style="width: 18rem;">
  <img class="card-img-top" style="height: 40vh;" src="${place.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${place.name}</h5>
    <p><strong>${place.type}</strong></p>
    ${place.description.length > 50 ? `<p class="card-text">${place.description.substring(0, 50)}...</p>` : `<p class="card-text">${place.description}</p>`}
    <div class="row">
      <div class="col-8">
        <a href="${place._id}" class="btn btn-primary">Mais detalhes...</a>
      </div>
      <div class="col-4 d-flex align-items-center text-right justify-content-end">
        <a href="/place/${place._id}/edit"><i class="material-icons">edit</i></a>
        <a href="/${place._id}/delete"><i class="material-icons">delete</i></a>
      </div>
    </div>
  </div>
</div>
</div>
`
      window.onload = () => {
        container
      }

      const center = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      }

      const pin = new google.maps.Marker({
        position: center,
        title: place.name,
        type: place.type
      })
      markers.push(pin)
      for (i = 0; i < markers.length; i += 1) {
        markers[i].setMap(map);
        // console.log(markers[i])
      }

      google.maps.event.addListener(markers[markers.length - 1], 'click', function () {
        window.location.href = place._id
      });
    })

    document.getElementById('select-type').addEventListener("submit", event => {
      event.preventDefault()

      $container.innerHTML = ""
      data.filter((place) => {

        if (place.type === $selectType.value && place.type !== 'all places') {
          $container.innerHTML += `
          <div class="col-md-6 col-lg-4 d-flex justify-content-center">
          <div class="card mt-4" style="width: 18rem;">
          <img class="card-img-top" style="height: 40vh;" src="${place.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${place.name}</h5>
              <p><strong>${place.type}</strong></p>
              ${place.description.length > 50 ? `<p class="card-text">${place.description.substring(0, 50)}...</p>` : `<p class="card-text">${place.description}</p>`}
                <div class="row">
                <div class="col-8">
                  <a href="${place._id}" class="btn btn-primary">Mais detalhes...</a>
                </div>
                <div class="col-4 d-flex align-items-center text-right justify-content-end">
                  <a href="/place/${place._id}/edit"><i class="material-icons">edit</i></a>
                  <a href="/${place._id}/delete"><i class="material-icons">delete</i></a>
                </div>
            </div>
              `
        } else if ($selectType.value === 'all places') {
          $container.innerHTML += `
          <div class="col-md-6 col-lg-4 d-flex justify-content-center">
          <div class="card mt-4" style="width: 18rem;">
          <img class="card-img-top" style="height: 40vh;" src="${place.image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${place.name}</h5>
              <p><strong>${place.type}</strong></p>
              ${place.description.length > 50 ? `<p class="card-text">${place.description.substring(0, 50)}...</p>` : `<p class="card-text">${place.description}</p>`}
                <div class="row">
                <div class="col-8">
                  <a href="${place._id}" class="btn btn-primary">Mais detalhes...</a>
                </div>
                <div class="col-4 d-flex align-items-center text-right justify-content-end">
                  <a href="/place/${place._id}/edit"><i class="material-icons">edit</i></a>
                  <a href="/${place._id}/delete"><i class="material-icons">delete</i></a>
                </div>
            </div>
              `
        }
      })

      for (i = 0; i < markers.length; i += 1) {
        if (markers[i].type !== $selectType.value) {
          markers[i].setMap(null);
        } else {
          markers[i].setMap(map);
        }
        if ('all places' === $selectType.value) {
          markers[i].setMap(map);
        }
      }
    })
  })

const local = {
  lat: -2.489069,
  lng: -44.251706
}
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12,
  center: local
})


google.maps.event.addListener(markers, 'click', function () {
  console.log('clickou')
});