import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'
const username = 'username'
const password = 'password'

// token
export function getToken() {
  return Cookies.get(TokenKey)
}
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}
export function removeToken() {
  return Cookies.remove(TokenKey)
}

// username
export function getUsername() {
  return Cookies.get(username)
}
export function setUsername(user) {
  return Cookies.set(username, user)
}
export function removeUsername() {
  return Cookies.remove(username)
}

// password
export function getPassword() {
  return Cookies.get(password)
}
export function setPassword(pass) {
  return Cookies.set(password, pass)
}
export function removePassword() {
  return Cookies.remove(password)
}
