const baseUrl = 'http://localhost:3000/api/v1'

export default class Auth {
  static login (loginParams) {
    return fetch(`${baseUrl}/auth`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify(loginParams)
    }).then(res => res.json())
  }

  static currentUser () {
    return fetch(`${baseUrl}/current_user`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("jwt")}
    }).then(res => res.json())
  }

  static me () {
    return fetch(`${baseUrl}/me`, {
      headers: {"Authorization": "Bearer " + localStorage.getItem("jwt")}
    }).then(res => res.json())
  }
} // end Auth class

function headers () {
  return {
    "content-type": "application/json",
    "accept": "application/json",
    "Authorization": "Bearer " + localStorage.getItem("jwt")
  }
}
