# Google Maps & Express

## Learning Outcomes

In this lesson you will learn:

- How to add locations to a model
- What a geoJSON is and how to use them
- Use Google Maps API in your applications with Mongoose
- Display data from the Database in the map

:::info
**To get the project up and running**
1) Clone this [repo](https://github.com/ironhack-labs/lab-googlemaps-express).
2) Install your project in your localhost: 
```
npm install
``` 
3) Start your mongoDB server in another tab.
4) Go to `http://localhost:3000/`
:::


## Introduction

The repository with the initial code provides a whole skeleton for an operative application with the basic CRUD actions for its only model: Restaurant.

This skeleton includes the model, the routes and the views for the restaurants. When the app displays the restaurants lists, it displays the `name` and the `description` of the saved restaurants on it.

However, it would be nice to show them in a map, right?

Throughout this lesson, we will learn how to properly add a location in our object and manipulate the data to save it in our MongoDB and display it in the views.

In order to understand the type of data we will create for the restaurants' locations we should know a little bit about the geographical reference system.

### Latitude and Longitude

**[Latitude](https://en.wikipedia.org/wiki/Latitude)** is a geographical coordinate that goes from North `90°` to South `-90°` the equator value is `0°`.

**[Longitude](https://en.wikipedia.org/wiki/Longitude)** is a geographical coordinate that goes from East to West position `-180° to 180°` the `0°` is located in the [Greenwich Meridian](https://en.wikipedia.org/wiki/Meridian_(geography)).


## Initial code: Restaurants CRUD

Basically this is a basic web app for displaying restaurants:

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/`    | List all restaurants |
| `GET` | `/new` | Form to add a restaurant |
| `POST`| `/`    | Create restaurant |
| `GET` | `/:id` | Show restaurant |
| `GET` |  `/:id/edit` | Form to modify a restaurant |
| `POST`| `/:id` | Update restaurant |
| `POST`| `/:id/delete` | Delete a restaurant |
| `GET` | `/` | List all restaurants `json` |
| `GET` | `/:id` | Get a restaurant `json` |
| `GET` | `/search` | Find restaurants around x Km around my location |

:::danger
**There are two routes that are repeated, why?**
:::

We already learnt how to do basic CRUD. You will find this structure already created in your cloned project.

## Sample App: restaurants CRUD

Take a look at your current Restaurant model:

```javascript
// restaurant.js
const RestaurantSchema = new Schema({
  name: String,
  description: String
});
```
In the declaration above, the Restaurant only holds the name and the description attributes. This information is shown in the views and every CRUD action is already implemented. However, we need to modify our project to include restaurants' locations.

## Add Location to Restaurants
### Introduction to GeoJSON

[GeoJSON](http://geojson.org/geojson-spec.html#introduction) is a format for encoding a variety of geographic data structures. It can support differents types of data like `Point`, `LineString`, `Polygon`, `MultiPoint`, `MultiLineString`, `MultiPolygon`.

**Example**
```javascript
{
  type: "Point",
  coordinates: [2.213213, 42.123423]
}
```

For example, a visual representation of `Polygons` or `MultiPloygon` could be the regions of Italy. 

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_d72fd4357d2b0b9eaa0f7ea2135132d0.jpg)

One of the coolest features of **MongoDB** is that it allows us to work with GeoJSON format. We can use them to perform differents queries like: 

- Display every nearest restaurant with 1m radius from user position
- Show existent elements in a given postalCode

This kind of information have become very useful and important in geolocated applications.

:::warning
:bomb: When we use coordinates in a GeoJSON array the first value is Longitude and the second value is Latitude.
:::

### Add Location to Model

Open our `model/restaurant.js` file and take a look at the Schema. The given `RestaurantSchema` is composed by a name and a description. Let's add another property to save the location.

The convention of MongoDB uses GeoJSON to store locations. In our `RestaurantSchema` we have to specify the structure of the GeoJSON.

A typical structure of a Geo JSON is:

```javascript
{
  type: "Point",
  coordinates: [2.213213, 42.123423]
}
```

:::warning
:warning: You might think that it would be easier to add two fields `latitude` and `longitude` as simple `numbers`, or even save them in an `array` with two values. However, is not the best solution to perform queries.
:::

To create our RestaurantSchema, we need to add the GeoJSON field:

```javascript
// restaurant.js
const RestaurantSchema = new Schema({
  name: String,
  description: String,
  location: { type: { type: String }, coordinates: [Number] }
});
RestaurantSchema.index({ location: '2dsphere' });
```

As the geoJSON object is composed by a `type` and a `coordinates` attributes, we will specify this convention.

- type: The word `type` is a reserved word, this will be holding the `Point` type and as we have to declare what kind of variable it is (a `String`), we need to introduce a hash to avoid using incorrectly the reserved word `type`.
- coordinates: In our example, we just need a `Point` to describe the location. This will be a set of two numbers, so we simply declare it.

#### The 2dsphere index

A 2dsphere index supports queries that calculate geometries on an earth-like sphere. 2dsphere index supports all MongoDB geospatial queries: queries for inclusion, intersection and proximity. See the [Geospatial Query Operators](https://docs.mongodb.com/v3.2/reference/operator/query-geospatial/) for the query operators that support geospatial queries.


### Add Location fields to form

We already created the fields in the schema, but now we need to let the user insert them in the form. Let's edit our `new.ejs` file:

```htmlmixed

<form method="POST" action="/restaurants">
  <input type="text" name="name"        placeholder="name">
  <input type="text" name="description" placeholder="description">
	  
  <label>Address</label>
  <input type="text" name="latitude" placeholder="Latitude" >
  <input type="text" name="longitude" placeholder="Longitude">
	  
  <input type="submit" name="">
</form>
```

### Get Location & Save Restaurant

Now that we let the users insert the information into the system, we need to be able to post it into our database. Take a look at the code below:

```javascript
// index.js
const express = require('express');
const router  = express.Router();

router.post((req, res, next) => {
  // Get Params from POST
  let location = {
    type: 'Point',
    coordinates: [req.body.longitude, req.body.latitude]
  };

  // Create a new Restaurant with location
    const newRestaurant = {
      name:        req.body.name,
      description: req.body.description,
      location:    location
    };

  // Save the restaurant to the Database
  restaurant.save((error) => {
    if (error) { console.log(error) }
    else {
      res.redirect('/');
    }
  })
});
  
module.exports = router;
```

In the code above, we are adding a new attribute `location` into our object. We retrieve the data entered by the user and save it as `location`. Then, we create a new restaurant with the information and finally we save it in the mongoDB.

:::success
🔎 For now, users will have to enter the longitude and latitude by entering floating numbers. If you want to enable the users to find a place entering its name you have to use the Google Maps Geocoder object. Keep this in mind so you can investigate more about this later on your own.
:::

## Show Restaurants in Map

The main goal of integrating our app to the Google Maps API is to show the data in a map.

This functionality improves our application's user experience, it can be used within a marketing strategy and, let's be honest, it's super cool!

### Controller

As the list of our restaurants is already in our index, our controller already sent the information to the view.


```javascript
var express = require('express');
var router  = express.Router();

router.get((req, res, next) => {
  Restaurant.find((error, restaurants) => {
    if (error) { next(error); }
    else {
      res.render('restaurants/index', { restaurants });
    }
  })
})

```

### Get Google Maps API Key

We already learnt how to get the API key.

#### Get an [API key](https://en.wikipedia.org/wiki/Application_programming_interface_key)

To authenticate your app to the Google Maps JavaScript API using your own API key, you need to:

- Go to the [Google API Console](https://console.developers.google.com/flows/enableapi?apiid=maps_backend,geocoding_backend,directions_backend,distance_matrix_backend,elevation_backend,places_backend&reusekey=true&pli=1).
- Create a project
- When the API is enabled, go to the Credentials page
- Click on `What credentials do I need`
- Copy the API key provided in a script into the index view:

```htmlmixed
  <script  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDUeQXCyJDlhOtCB8JwWAk8zCxpjk6k-jo">
  </script>
```
Remember to add this script to your views.

### Add Google Maps to index.ejs

To add a map, we need to fill an element of the HTML, so let's add a div to our `index.ejs`:

```htmlmixed
<div id="map"></div>
```

We should also edit our `styles.css` file to give some format to our map. If we don't set a size of the map it won't be rendered. For now, just add some style to this element:

```css
/* style.css */
#map {
  width: 100%;
  height: 400px;
}
```

### The map

We already added the map element to our index view. Right? But if you start your application and go to index, the map won't be rendered just yet. We still need to create the JavaScript to fill the element.

#### The `main.js` file

Create a new file `main.js` in `public/javascripts` with this code:

```javascript
$(document).ready(function(){
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

});

```
We are creating a variable with the location of *Sol, Madrid*. Then, we are using this data to create a new map variable in the `map` element centered in *Sol, Madrid*.

:::success
:bulb: Remember to add the script with the `main.js` source into your `index.ejs` view.
:::

### Add Markers to show restaurants' locations

We already learnt how to place a marker in the map. However, our goal is to use information in our database to render the restaurants in multiple markers.

As the code to render the markers will be in our `main.js` script, first, we need to make the information available.

Our controller already sent this info to our view in the `restaurants` object. What we would do is not the most elegant solution, but it will help you understand how a variable is accesible.


So we will add this script into the `index.ejs` file

```htmlmixed
<script type="text/javascript">
 var myRestaurants = (<%- restaurants %>);
 </script>
```

This allows `main.js` to access the variable restaurant. Now we are ready to render the markers from the `main.js` file:

```javascript
// javascripts/main.js
$.ready(function(){

  // Create and Initialize Map
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: [41.3977381, 2.090471916]
  });

  // Add restaurant markers to map
  let markers = [];
  myRestaurants.forEach(function(restaurant){
    let title = restaurant.namerestaurant.name
    let position = {
      lat: restaurant.location.coordinates[1],
      lng: restaurant.location.coordinates[0]
    };
    var pin = new google.maps.Marker({ position, map, title  });
    markers.push(pin)
  });
});
```

-------

```htmlmixed
<ul>
  <% restaurants.forEach((restaurant) => { %>
    <li>
      <a href="/restaurants/<%= restaurant._id%>">
        <%= restaurant.name%> | <%= restaurant.description %> </a>
        <a href="/restaurants/<%= restaurant._id%>/edit">Edit</a> | 
        <a href="/<%= restaurant._id%>/delete">Delete</a>
    </li>
  <% }) %>
</ul>

<script src="https://maps.googleapis.com/maps/api/js?key=blab"></script>
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>

</script>
<script type="text/javascript" src="/javascripts/main.js"></script>
```

## The `Show` view

The `show.ejs` view is intended to render one restaurant. We could also insert the map into the `show.ejs` file as we did in `index.ejs`. Also, create a `show.js` file and create the map centered in `Sol`. Try to do it by your own :)

## Extra - The Geocoder

Piece of cake, right? Now, remember when we were adding new places, how tedious it is to find the latitude and longitud?

We could implement the geocoder element. This will allow users to find new elements without entering the location. It will create a Google Maps element called Geocoder and find the coordinates. When it finds the coordinates it will render a new marker, fill the address fields and be ready to submit.

```javascript  
const geocoder = new google.maps.Geocoder();

document.getElementById('submit').addEventListener('click', function() {
  geocodeAddress(geocoder, map);
  });
  
function geocodeAddress(geocoder, resultsMap) {
  let address = document.getElementById('address').value;
  
geocoder.geocode({'address': address}, function(results, status) {

  if (status === 'OK') {
    resultsMap.setCenter(results[0].geometry.location);
    let marker = new google.maps.Marker({
      map: resultsMap,
	  position: results[0].geometry.location
	});
	document.getElementById('latitude').value = results[0].geometry.location.lat();
	document.getElementById('longitude').value = results[0].geometry.location.lng();
   } else {
	alert('Geocode was not successful for the following reason: ' + status);
     }
	});
	}
});
```

## Summary

In this lesson, we have learnt how to add geolocalization to your mongoose models, and how to work with GeoJSON format that we can find in Mongoose Schemas. We have also seen how to integrate Google Maps in our applications, and how to show data from our database on them.

## Extra Resources
- [GeoJSON](http://geojson.org/geojson-spec.html#introduction)
- [Google Maps API](https://developers.google.com/maps/)
