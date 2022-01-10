import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('The email format is invalid')
    .required('Email is required'),
  password: Yup.string()
    .required('password is required')
})

const LoginFormik = () => {
  const initialCredentials = {
    email: '',
    password: ''
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
        localStorage.setItem('credential', values)
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
                <button type="submit">Submit</button>
                {
                  isSubmitting && <p>Login your credentials...</p>  
                }
            </Form>
        )
      }
      </Formik>
    </div>
  );
}

export default LoginFormik;
