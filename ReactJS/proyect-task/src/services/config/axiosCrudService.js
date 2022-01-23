import axios from 'axios';

export const login = (email, password) =>	 {
   let body = {
    email: email,
    password: password
   }
   // Return the response with a Promise
   return axios.post('https://reqres.in/api/login', body)
}

// TODO: obtain all users
export const getAllUsers = () => {
   return axios.get('https://reqres.in/api/users')
}

// TODO: obtain paged users
export const getAllPagedUsers = (page) => {
   return axios.get(`https://reqres.in/api/users?page=${page}`)
}

// TODO: obtain user by id
export const getUsersByID = (id) => {
   return axios.get(`https://reqres.in/api/users/${id}`)
}

// TODO: Create user 
export const createUser = (name, job) => {
   let body = {
    name: name,
    job: job
   }
   // Return the response with a Promise
   return axios.post('https://reqres.in/api/users', body)
}

// TODO: update user
export const updateUserByID = (id, name, job) => {
   let body = {
    name: name,
    job: job
   }
   // Return the response with a Promise
   return axios.post(`v https://reqres.in/api/users/${id}`, body)
}

// TODO: delete user
export const deleteUserByID = (id) => {
   return axios.delete(`https://reqres.in/api/users/${id}`)
}
