export const getAllUsers = async () => {
  const URL = 'https://reqres.in/api/users'
  let response = await fetch(URL)
  console.log(response)
  console.log(response.status)
  console.log(response.ok)
  // We return the json
  return response.json()
}

export const getAllPagedUsers = async (page) => {
  const URL = `https://reqres.in/api/users?page=${page}`
  let response = await fetch(URL)
  // We return the json
  return response.json()
}

export const getUserDetails = async (id) => {
  const URL = `https://reqres.in/api/users/${id}`
  let response = await fetch(URL)
  console.log(response)
  console.log(response.status)
  console.log(response.ok)
  // We return the json
  return response.json()
}

export const login = async (email, password) => {
  let body = {
    email: email,
    password: password
  }
  let response = await fetch('https://reqres.in/api/login', {
    method: 'POST',
    //cache: 'no-cache',
    //mode: 'no-cors',
    //credentials: 'amit',
    // headers: {
    //   'Content-Type': 'aplication/json'
    // },
    body: JSON.stringify(body)
  })
  console.log(response)
  console.log(response.status)
  console.log(response.ok)
  return response.json()
}