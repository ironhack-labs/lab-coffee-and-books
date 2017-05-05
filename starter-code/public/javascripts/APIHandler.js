/*jshint esversion: 6*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.markers=[];
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
     console.log("hi");
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
        console.log("ok api one",response);
        deleteMarkers();
        getCoordinatesJquery(response,map);

      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  deleteAll(){
    console.log("hiDeleteAll");
    deleteMarkers();
  }
}

function deleteMarkers() {
    if(this.markers!==undefined)
    {
      this.markers.forEach(function(marker) {
        console.log("hi",marker);
        marker.setMap(null);
        marker = null;
      });
      this.markers = [];
    }
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
    console.log("tempArray",tempArray);
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



// function generateInfoPlace(name="",description="",lt="",ln="", placeId = ""){
//   $('.place-container').append($('<li>').addClass('place-info').append($('<p>').append($('<span>').addClass('name').html("Name: " + name + " ")).append($('<span>').addClass('description').html("| Description: " + description + " ")).append($('<span>').addClass('lt').html("| LT: " + lt + " ")).append($('<span>').addClass('ln').html("| LN: " + ln + " ")).append($('<span>').html("| ")).append($('<a>').attr('href','/show/'+placeId).html("Show")).append($('<span>').html(" | ")).append($('<a>').attr('href','/'+placeId +'/edit').html("Edit")).append($('<span>').html(" | ")).append($('<a>').addClass('delete-link').attr('href',placeId).html("Delete"))));
// }
