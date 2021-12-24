import { CONNECTION } from './connection.class'
export class Contact {
    name = ''
    lastName = ''
    email = ''
    conected = CONNECTION.DISCONNECTED
    
    constructor(name, lastName, email, conected) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.conected = conected;
    }
}
