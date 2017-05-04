/*jshint esversion: 6*/
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullPlaces(){
    console.log("hi2");
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
}


function getFullListJquery(places){

  deleteInfoPlace();

  if(places.length)
  {
    places.forEach((place)=>{
      generateInfoPlace(place.name,place.description,place.location.coordinates[0],place.location.coordinates[0]);
    });
  }
  else {
    generateInfoPlace();
  }
}

function deleteInfoPlace(){
  console.log("hi");
  $('.place-info').remove();
}

function generateInfoPlace(name="",description="",lt="",ln=""){
  $('.place-container').append($('<li>').addClass('place-info').append($('<div>').addClass('name').append($('<p>').html("Name: " + name))).append($('<div>').addClass('description').append($('<p>').html("Description: " + description))).append($('<div>').addClass('lt').append($('<p>').html("LT: " + lt))).append($('<div>').addClass('ln').append($('<p>').html("LN: " + ln))));
}
