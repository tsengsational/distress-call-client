const baseUrl = 'http://localhost:3000/api/v1/supporters'

export default class SupportersAdapter {
  static post(formData) {
    return fetch(`${baseUrl}`, {
              method: 'POST',
              headers: headers(),
              body: JSON.stringify(formData)
            })
              .then(resp => resp.json())
  }

  static remove(formData) {
    return fetch(`${baseUrl}`, {
      method: 'DELETE',
      headers: headers(),
      body: JSON.stringify(formData)
      })
        .then(resp => resp.json())
  }

} // end class

function headers () {
  return {
    "content-type": "application/json",
    "accept": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("jwt")
  }
}
