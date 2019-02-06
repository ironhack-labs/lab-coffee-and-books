class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList(endpoint, searchText, proximity, accesToken) {
    return axios
      .get(
        `${this.BASE_URL}/${endpoint}/${searchText}.json?proximity=${proximity[0]},${
          proximity[1]
        }&access_token=${accesToken}`
      )
      .then(response => response.data.features);
  }

  getOneRegister(query, id) {
    return axios.get(`${this.BASE_URL}/${query}/${id}`).then(response => response.data);
  }

  createOneRegister(query, newInfo) {
    return axios.post(`${this.BASE_URL}/${query}`, newInfo).then(response => response.data);
  }

  updateOneRegister(query, id, updatedInfo) {
    return axios
      .patch(`${this.BASE_URL}/${query}/${id}`, updatedInfo)
      .then(response => response.data);
  }

  deleteOneRegister(query, id) {
    return axios.delete(`${this.BASE_URL}/${query}/${id}`).then(response => response.data);
  }
}
