window.onload = function(){
  startMap();
}
// document.addEventListener('DOMContentLoaded', () => {

//   console.log('IronGenerator JS imported successfully!');

// }, false);


// function randomIntFromInterval(min, max) // min and max included
// {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

const mapDOMElement = document.getElementById('map')
// window.chosenLocation = null

function startMap() {
    const ironhackBCN = {
        lat: 42.4592723,
        lng: -6.0946061};
    const map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 12,
        center: ironhackBCN
      }
    );
  }