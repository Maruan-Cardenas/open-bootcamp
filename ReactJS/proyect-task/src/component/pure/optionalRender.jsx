import React, { useState } from 'react'

// Login / Logout buttons

const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>Login</button>
  )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAction}>Logout</button>
  )
}

// ? (Expresión true) && expresión => se renderiza la expresión
// ? (Expresión false) && expresión => no se renderiza la expresión

const OptionalRender = () => {
  const [access, setAccess] = useState(true)
  const [nMessages, setnMessages] = useState(0)
  // const updateAccess = () => {
  //   setAccess(!access)
  // }

  let red = (Math.random() * (255 - 0) + 0)
  let green = (Math.random() * (255 - 0) + 0)
  let blue = (Math.random() * 255)

  const loggedStyle = {
  backgroundColor: `rgb(${red},${green},${blue})`,
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  padding: '.5em'
}

const unloggedStyle = {
  backgroundColor: 'tomato',
  color: 'white',
  fontWeight: 'bold',
  border: 'none',
  padding: '.5em'
}

  const loginAction = () => {
    setAccess(false)
  }

    const logoutAction = () => {
    setAccess(true)
  }

  let optionalButton

  // if (access) optionalButton = <button onClick={updateAccess}>Logout</button>
  // else optionalButton = <button onClick={updateAccess}>Login</button>

  if (access) optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction} />
  else optionalButton = <LogoutButton  propStyle={unloggedStyle} logoutAction={logoutAction} />

  // Unread Messages
  const addMessages = () => {
    setnMessages(nMessages + 1)
  }

  return (
    <div>
      {/* Optional Button */}
      { optionalButton }
      {/* N Mesagges unread */}
      { nMessages > 1 && <p>You have {nMessages} new messeges...</p> }
      { nMessages === 1 && <p>You have {nMessages} new messege...</p> }
      { nMessages === 0 && <p>There are no new messages</p> }
      { nMessages > 0 ? <p>You have {nMessages} new messege{nMessages > 1 && 's'}...</p> : <p>There are no new messages</p>}
      <button onClick={addMessages}>Add new Message</button>
    </div>
  )
}

export default OptionalRender