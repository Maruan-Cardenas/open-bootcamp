import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('The email format is invalid')
    .required('Email is required'),
  password: Yup.string()
    .required('password is required')
})


const LoginFormik = () => {
  const navigate = useNavigate()
  const navigation = (paht) => {
    navigate(paht)
  }
  
  const initialCredentials = {
    email: '',
    password: ''
  }

    const formContainer = {
    display: 'flex',
    flexDirection: 'column',
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
      onSubmit={async (values) =>{
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
        // We sabe the data in the localStorage
        await sessionStorage.setItem('credential', values)
        navigate('/profile')
      }}>
      {/* We obtain props from Formik */}
      {
        ({values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur}) => (
            <Form style={formContainer}>
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
                <button type="submit">Submit</button>
                {
                  isSubmitting && <p>Login your credentials...</p>  
                }
                <button onClick={() => navigation('/register')}>Register</button>
            </Form>
        )
      }
      </Formik>
    </div>
  );
}

export default LoginFormik;