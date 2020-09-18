class PlacesApiHandler {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:3000/api'
        })
    }

    getAllPlaces = () => this.app.get('/all')
    getOnePlace = placeId => this.app.get(`/characters/${placeId}`)
    createPlace = placeInfo => this.app.post('/characters', placeInfo)
    editPlace = (placeId, placeInfo) => this.app.put(`/characters/${placeId}`, placeInfo)
}