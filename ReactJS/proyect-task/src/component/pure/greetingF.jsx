import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const GreetingF = (props) => {
    const [age, setAge] = useState(28)

    const birthday = () => setAge(age + 1)

    return (
        <div>
            <h1>
                Hola {props.name} !
            </h1>
            <h2>
                Tu edad es {age}
            </h2>
            <div>
                <button onClick={birthday}> +1 </button>
            </div>
        </div> 
    )
}

GreetingF.propTypes = {
    name: PropTypes.string,
}


export default GreetingF
