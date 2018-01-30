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
        }else if (response.data.success) {
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

  //   getFullList() {
  //     $("#olResult").empty();
  //     axios.get(this.BASE_URL + '/characters')
  //       .then(function (response) {
  //         console.log(response);
  //         paintText(response);
  //         response.data.characters.forEach(charac => {
  //           $("#olResult").append($("<ol><li>Id: " + charac._id + "</li><li>name: " + charac.name + "</li><li>occupation: " +
  //             charac.occupation + "</li><li>debt: " + charac.debt + "</li><li>weapon: " +
  //             charac.weapon + "</li></ol>"));
  //         });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }

  //   getOneRegister(id) {
  //     $("#olResult").empty();
  //     if(id){
  //       axios.get(this.BASE_URL + '/characters/' + id)
  //         .then(function (response) {
  //           console.log(response);
  //           paintText(response);
  //           $("#olResult").append($("<ol><li>Id: " + response.data.characters._id + "</li><li>name: " + response.data.characters.name + "</li><li>occupation: " +
  //             response.data.characters.occupation + "</li><li>debt: " + response.data.characters.debt + "</li><li>weapon: " +
  //             response.data.characters.weapon + "</li></ol>"));

  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }else{
  //       $("#olResult").append($(`<h4>You need an ID</h4>`));
  //     }
  //   }

  //   updateOneRegister(values) {
  //     $("#olResult").empty();
  //     let debt;
  //     (values.debt === "on") ? debt = true: debt = false;
  //     axios.post(this.BASE_URL + "/characters/update/" + values.chrid, {
  //         _id: values.chrid,
  //         name: values.name,
  //         occupation: values.occupation,
  //         debt: debt,
  //         weapon: values.weapon,
  //       })
  //       .then((response) => {
  //         console.log(response);
  //         paintText(response);
  //         response.data.characters.forEach(charac => {
  //           $("#olResult").append($("<ol><li>Id: " + charac._id + "</li><li>name: " + charac.name + "</li><li>occupation: " +
  //             charac.occupation + "</li><li>debt: " + charac.debt + "</li><li>weapon: " +
  //             charac.weapon + "</li></ol>"));
  //         });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //     }      

  //   deleteOneRegister(id) {
  //     $("#olResult").empty();
  //     if(id){
  //       axios.post(this.BASE_URL + '/characters/delete/' + id)
  //         .then(function (response) {
  //           console.log(response);
  //           paintText(response);
  //           response.data.characters.forEach(charac => {
  //             $("#olResult").append($("<ol><li>Id: " + charac._id + "</li><li>name: " + charac.name + "</li><li>occupation: " +
  //               charac.occupation + "</li><li>debt: " + charac.debt + "</li><li>weapon: " +
  //               charac.weapon + "</li></ol>"));
  //           });
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  //     }else{
  //       $("#olResult").append($(`<h4>You need an ID</h4>`));
  //     }
  //   }
  // }
  // function paintText(response){  
  //   if(response.data.message){
  //     $("#olResult").append($(`<div><h4>${response.data.message}</h4></div>`));
  //   }
  //   if(response.data.error){
  //     $("#olResult").append($("<ol><li>Id: " + response.data.error.id + "</li><li>name: " + response.data.error.name + "</li><li>occupation: " +
  //         response.data.error.occupation + "</li><li>debt: " + response.data.error.debt + "</li><li>weapon: " +
  //         response.data.error.weapon + "</li></ol>"));
  //   }
  //   if(response.data.characters===null){
  //     $("#olResult").append($(`<h4>No Characters found</h4>`));
  //   }
}