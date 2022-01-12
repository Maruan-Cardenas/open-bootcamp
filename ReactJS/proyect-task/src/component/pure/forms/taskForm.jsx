import React from 'react'
import '../../../styles/taskForm.scss'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/level.enum'
import { Task } from '../../../models/task.class'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Taskform = ({ add, length }) => {

    function addTask (values) {
        console.log(values)
        const newTask = new Task(
            values.name,
            values.description,
            values.completed,
            values.level
        )
        add(newTask)
    }

    const initialValues = {
        name: '',
        description: '',
        completed: false,
        level: ''
    }

      const registerSchema = Yup.object().shape(
    {
      name: Yup.string()
        .max(12, 'Username too long')
        .required('the Username is required'),
      description: Yup.string()
        .max(30, 'description too long')
        .required('description is required'),
      level: Yup.string().oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a Role: NORMAL, URGENT, BLOCKING')
        .required('Level is required'),
    }
  )

    return (
        <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 1000))
        addTask(values)
      }}
      >
        {({value, touched, errors, isSubmitting, handleChange, handleBlur }) => (
          <Form style={{color: 'white', display: 'flex', flexDirection: 'column'}}>
            <label htmlFor='name'>Name</label>
            <Field id='name' type='text' name='name' placeholder='Name of the task' />
            {
              errors.name && touched.name && <ErrorMessage name='name' component='div' />
            }
            <label htmlFor='description'>Description of the task</label>
            <Field id='description' type='text' name='description' placeholder='description...' />
            {
              errors.description && touched.description && <ErrorMessage name='description' component='div' />
            }
            <div className='level-container'>
                <label htmlFor='level' className='level-normal'>Normal
                    <Field id='level' type='radio' name='level' value={LEVELS.NORMAL} />
                </label>
                <label htmlFor='level' className='level-urgent' >Urgent
                    <Field id='level' type='radio' name='level' value={LEVELS.URGENT} />
                </label>
                <label htmlFor='level' className='level-blocking'>Blocking
                    <Field id='level' type='radio' name='level' value={LEVELS.BLOCKING} />
                </label>
                {
                  errors.level && touched.level && <ErrorMessage name='level' component='div' />
                }
            </div>
            <button type='submit'>{length > 0 ? 'Add new task' : 'Create your first task'}</button>
            {
              isSubmitting && <p>Sending your credentials...</p> 
            }
          </Form>
        )}
        
      </Formik>
        // <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        // <div className='form-outline flex-fill'>
        //     <input ref={nameRef} id='inputName' type="text" className='form-control form-control-lg' placeholder='Name' required autoFocus />
        //     <input ref={descriptionRef} id='inputDescription' type="text" className='form-control form-control-lg' placeholder='Description' required />
        //     <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
        //         <option value={LEVELS.NORMAL} style={normalStyle}>
        //             Normal
        //         </option>
        //         <option value={LEVELS.URGENT} style={urgentStyle}>
        //             Urgent
        //         </option>
        //          <option value={LEVELS.BLOCKING} style={blockingStyle}>
        //             Blocking
        //         </option>
        //     </select>
        //     <button type='submit' className='btn btn-success btn-lg ms-2'>{length > 0 ? 'Add new task' : 'Create your first task' }</button>
        // </div>
        // </form>
    );
}

Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
