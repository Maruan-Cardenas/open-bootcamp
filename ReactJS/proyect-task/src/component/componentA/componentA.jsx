import React from "react"
import ContactData from "../componentB/componentB.jsx"
import { CONNECTION } from './connection.class'
import { Contact } from './contact.class'

const ContactComponent = () =>{
    const contact = new Contact('Maruan', 'Cardenas','maruan@gmail.com', CONNECTION.CONNECTED )

    return(
        <div>
            <h1>Tú contacto</h1>
            <ContactData data={contact} />
        </div>
    )
}

export default ContactComponent

