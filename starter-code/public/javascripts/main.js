function startMap() {
  if (document.querySelector("input[name=latitude]")) {
    const center = {
      lat: Number(document.querySelector("input[name=latitude]").value),
      lng: Number(document.querySelector("input[name=longitude]").value)
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: center
    });
    const myMarker = new google.maps.Marker({
      position: {
        lat: Number(document.querySelector("input[name=latitude]").value),
        lng: Number(document.querySelector("input[name=longitude]").value)
      },

      map: map,
      title: "I'm here"
    });
  } else {
    var coord = document.querySelectorAll(".pos"); 

    const center = {
      lat: 40.3925321,
      lng: -3.6982669
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 7,
      center: center
    });
    coord.forEach(e => { 
        let split= e.innerText.split(",")
        console.log(split)
        const myMarker = new google.maps.Marker({
            position: {
              lat:Number(split[1]),
              lng: Number(split[0])
            },
      
            map: map,
            title: "I'm here"
          });
    });
    const myMarker = new google.maps.Marker({
      position: {
        lat: Number(document.querySelector("input[name=latitude]").value),
        lng: Number(document.querySelector("input[name=longitude]").value)
      },

      map: map,
      title: "I'm here"
    });
  }
}

startMap();
