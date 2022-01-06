import React, { useRef } from 'react'
import { Person } from '../../../models/persons.class'
import '../../../styles/contactForm.scss'
const ContactForm = ({ addContact }) => {
  const nameRef = useRef()
  const lastNameRef = useRef()
  const phoneRef = useRef()

  function newContact (e) {
    e.preventDefault()
    const newPerson = new Person(
      nameRef.current.value,
      lastNameRef.current.value,
      phoneRef.current.value,
      false
    )
      addContact(newPerson)
  }

  return (
    <form onSubmit={newContact} className="form-container">
      <input 
        type="text" 
        placeholder="Name"
        ref={nameRef}
        required />
      <input 
        type="text" 
        placeholder="lastName"
        ref={lastNameRef}
        required />
      <input 
        type="number" 
        placeholder="Phone"
        ref={phoneRef}
        required />
        <button type='submit'>Añadir</button>
    </form>
  )
}

export default ContactForm