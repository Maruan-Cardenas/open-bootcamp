/**
 * Componente que va a tener un formulario para autenticación de usuarios.
 */

import React, { useState } from "react";

const Loginform = () => {
    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ]

    const [data, setData] = useState(initialData);

    return(
        <div></div>
    )
}

export default Loginform