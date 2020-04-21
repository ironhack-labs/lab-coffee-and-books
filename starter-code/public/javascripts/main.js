window.onload = () => {
    const placesMAD = {
        lat: 40.4373810,
        lng: 3.7107696
    };

    const markers = []

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: placesMAD
    });

    let center = {
        lat: undefined,
        lng: undefined
    };
};

