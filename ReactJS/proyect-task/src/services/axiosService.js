import APIRequest from "./config/axios.config"

export function getRamdomUser() {
  return APIRequest.get('/')
}