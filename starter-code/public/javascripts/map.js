
    const IronhackMad = {
        lat: 40.392573,
        lng: -3.698390};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 16,
        center: IronhackMad
      }
    );
    const IronhackMadMarker = new google.maps.Marker({
        position: {
            lat: 40.392573,
            lng: -3.698390},
        
        map: map,
        title: "Nothing to say"
      });


   
