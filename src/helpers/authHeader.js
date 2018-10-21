// this helper gets the user and jwt from localStorage
// to be used for api requests to protected routes
export function authHeader () {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem('user'))
  if (user && user.token) {
    return { 'Authorization': 'Bearer ' + user.token }
  } else {
    return {}
  }
}
