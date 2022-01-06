import React, { useState } from 'react'
import '../../styles/contacts.scss'
import Contact from '../pure/contact'
import { Person } from '../../models/persons.class.js'
import ContactForm from '../pure/forms/contactForm'

const Constats = () => {
  const person = new Person (
    'Maruan',
    'Cardenas',
    '601602344',
    true
    )

    const person2 = new Person (
    'Marwan',
    'Vicente',
    '56543356',
    false
    )

    const [contact, setContact] = useState([person, person2])

    function switchState(person) {
      const index = contact.indexOf(person)
      const tempPerson = [...contact]
      tempPerson[index].state = !tempPerson[index].state
      setContact(tempPerson)
    }

    function removeContact(person) {
      const index = contact.indexOf(person)
      const tempPerson = [...contact]
      tempPerson.splice(index, 1) 
      setContact(tempPerson)
    }
    function addContact(newContact) {
      const tempPerson = [...contact]
      tempPerson.push(newContact)
      setContact(tempPerson)
    }

  return (
    <main className="main-container">
    <ContactForm addContact={addContact}/>
    <div className="main-titles">
      <div>Name</div>
      <div>LastName</div>
      <div>Phone</div>
      <div className="mian-state">State</div>
      <div className="main-remove">Remove</div>
    </div>
    {contact.map((res, index) => (
      <Contact key={index} contact={res} switchState={switchState} removeContact={removeContact} />
    ))}
    </main>
  )
}

export default Constats