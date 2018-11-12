![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Express | Coffee & Books

## Introduction

Books and coffee are two very compatible things. If you think about it, a nice cup of a hot beverage and a book are two amazing things to have together.

In this exercise, let's create an app to save both bookstores and coffee places and display them. You could even use Google Maps to display a path from one place to the other.

:bulb: **Hint:** To accomplish this new challenge, feel free to follow the Google Maps & Express, the previous lesson.


## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

This exercise will help you to:
- Practice Google Maps API integration with an app
- Add location properties in your models as GeoJSON
- Display content from the database in a map

![cofee-book pic](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_141038aa0f5ce10c722722400bfdc6d5.jpg)


### Iteration 1 - create model

In `models` folder, create a new model `place.js`. For now, this model will have:

```bash
    - name,
    - type: coffee shop, bookstore
    - timestamps 
```

### Iteration 2 - create CRUD on this model

In this iteration, you should create full CRUD on `place.js` model - to be able to create, update, delete and display all the places you save in the database. You will have to create routes and corresponding views.

### Iteration 3 - add `location` property

- To be able to locate places on the map, you will have to add `location` property to its model (refer to the previous lesson if necessary);
- Add Location fields to form(s) - create and update
- Get Google Maps API Key
- Add Google Maps to the view(s) that will display the map
- Show places on the map & add markers to show places’ locations


## Extra Resources
- [GeoJSON](http://geojson.org/geojson-spec.html#introduction)
- [Google Maps API](https://developers.google.com/maps/)

Happy coding! :heart:

