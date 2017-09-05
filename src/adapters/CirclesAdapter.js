const baseUrl = 'http://localhost:3000/api/v1/circles'

export default class CirclesAdapter {
  static show(id) {
    return fetch(`${baseUrl}/${id}`, {
              headers: {"Authorization": "Bearer " + localStorage.getItem("jwt")}
            })
              .then(resp => resp.json())
  }
} // end class
