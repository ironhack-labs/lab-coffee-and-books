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
    this.myMarker(ironhackBCN.lat, ironhackBCN.lng);
    this.getPosition(this.map,this.currentMarker);
  }

  myMarker(lat,lng) {
    (this.currentMarker)?this.currentMarker.setMap(null):"";    
    this.currentMarker= new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      map: this.map,
      title: "I'm here"
    });
  };

  getPosition(map, currentMarker) {
    google.maps.event.addListener(map, "click", function (e) {
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

  showInMap(lat, lng){
    return new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      map: map,
      title: "I'm here"
    });
  }
}