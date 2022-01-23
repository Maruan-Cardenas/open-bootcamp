import React, { useState } from 'react';
import { login, getAllUsers, getAllPagedUsers, getUsersByID, createUser, updateUserByID, deleteUserByID } from '../../services/config/axiosCrudService';
import Button from '@mui/material/Button'
import * as Yup from 'yup'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const Axioscrudexample = () => {
  const [users, setUsers] = useState([])
  const [idUser, setIdUser] = useState([])
  const [newUser, setNewUser] = useState([])
  
  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          sessionStorage.setItem('token', response.data.token);
        } else {
          sessionStorage.removeItem('token')
          throw new Error('Login failure')
        }
      })
      .catch(err => {
        alert(`Something went wrong: ${err}`)
        sessionStorage.removeItem('token')
      })
      .finally(() => console.log('Login done'))
  }

  const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('The email format is invalid')
    .required('Email is required'),
  password: Yup.string()
    .required('password is required')
})

  const initialCredentials = {
      email: '',
      password: ''
  }

  const obtainAllUsers = () => {
    getAllUsers()
      .then((res) => {
        setUsers(res.data.data)
      })
  }

  const obtainAllPagesUsers = (page) => {
    getAllPagedUsers(page)
      .then((res) => {
        setUsers(res.data.data)
        console.log(users)
      })
  }

  const obtainUserByID = (id) => {
    getUsersByID(id)
      .then((res) => {
        setIdUser(res.data.data)
      })
  }

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((res) => {
        if (res.status === 201) {
          setNewUser(res.data)
        } else throw new Error('Usert not create')
      })

  }

  const updateUser = (id, name, job) => {
  updateUserByID(id, name, job)
    .then((res) => {
      setIdUser(res.data)
    })
}

  const deleteUser = (id) => {
    deleteUserByID(id)
      .then((res) => {
        setIdUser(res.data)
      })
  }

  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        // *** Initial values that the form will take
        initialValues={initialCredentials}
        // *** Yup Validation Schema
        validationSchema={loginSchema}
        // *** onSubmit event
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500))
          authUser(values)
        }}>
        {/* We obtain props from Formik */}
        {
          ({values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur}) => (
              <Form>
                <label htmlFor="email">Email</label>
                <Field 
                  id="email" 
                  type="email" 
                  name="email" 
                  placeholder="exameple@email.com" />
                {
                  errors.email && touched.email && (
                    <ErrorMessage name="email" component='div'/>
                  )
                }
                <label htmlFor="password">Password</label>
                <Field  
                  id="password" 
                  type="password" 
                  name="password" 
                  placeholder="password" />
                {
                  errors.password && touched.password && (
                    <ErrorMessage name="password" component='div'/>
                  )
                }
                  <Button type="submit">Submit</Button>
                  {
                    isSubmitting && <p>Login your credentials...</p>  
                  }
              </Form>
          )
        }
      </Formik>
      <Button onClick={obtainAllUsers}>users</Button>
      <Button onClick={()=> obtainAllPagesUsers(1)}>Page 1</Button>
      <Button onClick={()=> obtainAllPagesUsers(2)}>Page 2</Button>
      <Button onClick={()=> obtainUserByID(4)}>Usuario con ID 3</Button>
      <Button onClick={()=> createNewUser('Marwan', 'Developer')}>Create New User</Button>
      <Button onClick={()=> updateUser(3, 'Marwan', 'Developer')}>Update User</Button>
      <Button onClick={()=> deleteUser(2)}>Delete user</Button>
      <h3>{idUser.first_name}</h3>
      <h3>{newUser.name}</h3>
        {
          users.map(res => (
            <h3>{res.first_name}</h3>
          ))
        }
    </div>
  );
}

export default Axioscrudexample;
