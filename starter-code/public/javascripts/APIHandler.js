/*jshint esversion: 6*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.markers=[];
  }

  CreateOne(map,place){
    $.ajax({
      url: this.BASE_URL+"/new",
      method: "POST",
      data: place,
      success: function (response) {
        getOneCoordinatesJquery(response,map);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  deleteOne(place_id){
    $.ajax({
      url: this.BASE_URL+"/"+place_id+"/delete",
      method: "GET",
      success: function (response) {
        console.log(response);
        getFullListJquery(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getFullPlaces(){
    $.ajax({
      url: this.BASE_URL+"/show",
      method: "GET",
      success: function (response) {
        console.log(response);
        getFullListJquery(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getCoordinates(map){
    $.ajax({
      url: this.BASE_URL+"/show",
      method: "GET",
      success: function (response) {
        deleteMarkers();
        getCoordinatesJquery(response,map);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneCoordinates(map,place_name){
     console.log("hi");
    $.ajax({
      url: this.BASE_URL+"/"+place_name+"/show",
      method: "GET",
      success: function (response) {
        console.log(response);
        deleteMarkers();
        getCoordinatesJquery(response,map);

      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  deleteAll(){
    deleteMarkers();
  }
}

function deleteMarkers() {
    if(this.markers!==undefined)
    {
      this.markers.forEach(function(marker) {
        marker.setMap(null);
        marker = null;
      });
      this.markers = [];
    }
  }

function getOneCoordinatesJquery(place,map){
  var center = {
    lat: place.location.coordinates[1],
    lng: place.location.coordinates[0]
  };
  var pin = new google.maps.Marker({
    position: center,
    label: place.local[0].toUpperCase(),
    map: map,
    title: place.name
  });
  this.markers.push(pin);
}

function getCoordinatesJquery(places,map){
  var tempArray=[];
  if(places.length)
  {
    places.forEach((place)=>{
      var center = {
        lat: place.location.coordinates[1],
        lng: place.location.coordinates[0]
      };
      var pin = new google.maps.Marker({
        position: center,
        label: place.local[0].toUpperCase(),
        map: map,
        title: place.name
      });
      tempArray.push(pin);
    });

    this.markers = tempArray;
  }
  else {
    this.markers = tempArray;
  }
}


function getFullListJquery(places){

  deleteInfoPlace();

  if(places.length)
  {
    places.forEach((place)=>{
      generateInfoPlace(place.name,place.description,place.local,place.location.coordinates[1],place.location.coordinates[0], place._id);
    });
  }
  else {
    generateInfoPlace();
  }
}

function deleteInfoPlace(){
  $('.place-info').remove();
}

function generateInfoPlace(name="",description="",local="",lt="",ln="", placeId = ""){
  $('.place-container').append($('<li>').addClass('place-info').append($('<p>').append($('<span>').addClass('name').html("Name: " + name + " ")).append($('<span>').addClass('description').html("| Description: " + description + " ")).append($('<span>').addClass('local').html("Local: " + local + " ")).append($('<span>').addClass('lt').html("| LT: " + lt + " ")).append($('<span>').addClass('ln').html("| LN: " + ln + " ")).append($('<span>').html("| ")).append($('<a>').addClass('delete-link').attr('href',placeId).html("Delete"))));
}
