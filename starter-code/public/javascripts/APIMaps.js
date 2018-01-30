class APIMaps {
  constructor() {
    this.map;
    this.currentMarker;
  }
  startMap() {
    var ironhackBCN = {
      lat: 41.3977381,
      lng: 2.190471916
    };
    this.map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15,
        center: ironhackBCN
      }
    );
    this.currentMarker = this.myMarker(this.map);
    this.getPosition(this.map,this.currentMarker);
  }

  myMarker(map) {
    return new google.maps.Marker({
      position: {
        lat: 41.3977381,
        lng: 2.190471916
      },
      map: map,
      title: "I'm here"
    });
  };

  getPosition(map, currentMarker) {
    google.maps.event.addListener(map, "click", function (e) {
      // debugger
      currentMarker.setMap(null);
      currentMarker = new google.maps.Marker({
        position: e.latLng,
        map: map,
        title: "I'm here"
      });
      $('#lat').val(e.latLng.lat);
      $('#lng').val(e.latLng.lng);
    });
  }
}