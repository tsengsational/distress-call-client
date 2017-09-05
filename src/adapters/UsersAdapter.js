const baseUrl = 'http://localhost:3000/api/v1/users'

export default class UsersAdapter {
  static post(formData) {
    fetch(`${baseUrl}/signup`, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: headers()
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
