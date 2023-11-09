class PlacesService {

    constructor() {

        this.axiosApp = axios.create({
            baseURL: ''
        })
    }
    getAllPlaces() {
        return this.axiosApp.get('/api/places')
    }

}


const placesService = new PlacesService()
