import React from 'react';
import { User } from '../../../models/user.class.js'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ROLES } from '../../../models/roles.enum.js';

const RegisterFormik = () => {
  let user = new User()

  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ROLES.USER
  }

  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
        .min(6, 'userName is too short')
        .max(12, 'Username is too long')
        .required('the Username is required'),
      
      email: Yup.string()
        .email('This email is invalid')
        .required('The email is required'),
      role: Yup.string().oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Asmin')
        .required('Role is required'),
      password: Yup.string()
        .required('The password is required plis')
        .min(9, 'password too short, plis insert nine caracters'),
      confirmPassword: Yup.string()
        .when('password', {
          is: value => (value && value.length > 0 ? true : false),
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Password must match!'
          )
        }).required('You must confirm the password')
    }
  )

  const formContainers = {
    color:'white',
    display: 'flex',
    flexDirection: 'column',
  }


  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000))
        alert(JSON.stringify(values, null, 2))
      }}
      >
        {({value, touched, errors, isSubmitting, handleChange, handleBlur }) => (
          <Form style={formContainers}>
            <label htmlFor='username'>Username</label>
            <Field id='username' type='text' name='username' placeholder='Your username' />
            {
              errors.username && touched.username && <ErrorMessage name='username' component='div' />
            }
            <label htmlFor='email'>Email</label>
            <Field id='email' type='email' name='email' placeholder='example@email.com' />
            {
              errors.email && touched.email && <ErrorMessage name='email' component='div' />
            }
            <label htmlFor='password'>Password</label>
            <Field id='password' type='password' name='password' placeholder='Your password' />
            {
              errors.password && touched.password && <ErrorMessage name='password' component='div' />
            }
            <label htmlFor='confirmPassword'>Confirm your Password</label>
            <Field id='confirmPassword' type='password' name='confirmPassword' placeholder='repeat your password' />
            {
              errors.password && touched.password && <ErrorMessage name='confirmPassword' component='div' />
            }
            <button type='submit'>Register Account</button>
            {
              isSubmitting && <p>Sending your credentials...</p> 
            }
          </Form>
        )}
        
      </Formik>
    </div>
  );
}

export default RegisterFormik;
