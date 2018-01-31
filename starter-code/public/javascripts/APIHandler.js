class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  createOneRegister(values) {
    $(".form-group").removeClass('has-error');
    $(".form-inline").removeClass('has-error');
    $(".control-label").remove();
    axios.post(this.BASE_URL + '/bookstores/new', {
        name: values.name,
        description: values.description,
        lat: values.lat,
        lng: values.lng,
      })
      .then(function (response) {
        console.log(response);
        if (response.data.error) {
          for (const key in response.data.error) {
            if (response.data.error[key] != "") {
              $('#' + key).parent().addClass('has-error');
              $('#' + key).parent().append($("<label class='control-label'>" + response.data.error[key] + "</label>"));
            }
          }
        } else if (response.data.success) {
          $("#name").val("");
          $("#description").val("");
          $("#lat").val("");
          $("#lng").val("");
          alert(response.data.success);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  deleteOneRegister(id) {
    console.log(id);


    $("#tbody-store").empty();
    if (id) {
      axios.post(this.BASE_URL + '/bookstores/delete/' + id)
        .then((response)=> {
          this.BASE_URL;
          console.log(response);
          if (response.data.success) {
            let i=0;
            for (const key in response.data.bookstores) {
              if (response.data.bookstores[key] != "") {
                $('#tbody-store').append(`<tr class=${response.data.bookstores[key]._id}>
                <td>${response.data.bookstores[key].name}</td>
                <td>${response.data.bookstores[key].description}</td>
                <td class='td_latlng${i}' lat='${response.data.bookstores[key].lat}' lng='${response.data.bookstores[key].lng}'>
                Lat: ${(response.data.bookstores[key].lat).toFixed(2)}'. Lng:${(response.data.bookstores[key].lng).toFixed(2)} 
                <button class="show-bookstore btn btn-info">Show</button></td>
                <td><button class="delete-bookstore btn btn-danger">Delete</button></td>
                </tr>`);
                i++;
              }
            }
          }

        })
        .catch(function (error) {
          console.log(error);

        });
    } else {
      alert("You need an ID");
    }
  }
}