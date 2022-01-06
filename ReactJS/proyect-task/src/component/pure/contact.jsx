import React from 'react'
import '../../styles/contact.scss'

const Contact = ({contact, switchState, removeContact}) => {
  const { state, name, lastName, phone } = contact
  let color
  if (state) color = 'green'
  return (
    <div className="contact-container">
      <div>
        {name}
      </div>
      <div>
        {lastName}
      </div>
      <div>
        {phone}
      </div>
      <div onClick={() => switchState(contact)} className="contact-state">
        <div className={`contact-state ${color}`}></div>
      </div>
      <div className="contact-remove" onClick={() => removeContact(contact)}>
         X
      </div>
    </div>
  )
}

export default Contact