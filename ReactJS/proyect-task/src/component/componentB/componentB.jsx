import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../componentA/contact.class'

const ContactData = ({ data }) =>{
    return (
        <div>
            <h2>Nombre: {data.name} {data.lastName}</h2>
            <h3>Con email: {data.email}</h3>
            <div>Está {data.conected}</div>
        </div>
    )
}

ContactData.propTypes = {
    data: PropTypes.instanceOf(Contact)
}

export default ContactData