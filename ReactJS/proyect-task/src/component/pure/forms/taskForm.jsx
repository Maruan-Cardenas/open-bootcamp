import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/level.enum'
import { Task } from '../../../models/task.class'

const Taskform = ({ add, length }) => {
    const nameRef = useRef()
    const descriptionRef = useRef()
    const levelRef = useRef(LEVELS.NORMAl)

    function addTask (e) {
        e.preventDefault()
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        )
        add(newTask)
    }

    const normalStyle = {
        color: 'cyan',
        fontWeight: 'bold',
        backgroundColor: 'black'
    }
    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold',
        backgroundColor: 'black'
    }
    const blockingStyle = {
        color: 'red',
        fontWeight: 'bold',
        backgroundColor: 'black'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
        <div className='form-outline flex-fill'>
            <input ref={nameRef} id='inputName' type="text" className='form-control form-control-lg' placeholder='Name' required autoFocus />
            <input ref={descriptionRef} id='inputDescription' type="text" className='form-control form-control-lg' placeholder='Description' required />
            <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                <option value={LEVELS.NORMAL} style={normalStyle}>
                    Normal
                </option>
                <option value={LEVELS.URGENT} style={urgentStyle}>
                    Urgent
                </option>
                 <option value={LEVELS.BLOCKING} style={blockingStyle}>
                    Blocking
                </option>
            </select>
            <button type='submit' className='btn btn-success btn-lg ms-2'>{length > 0 ? 'Add new task' : 'Create your first task' }</button>
        </div>
        </form>
    );
}

Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
