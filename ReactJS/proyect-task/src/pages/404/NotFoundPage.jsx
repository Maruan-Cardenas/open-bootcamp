import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotfoundPage = () => {
  const navigate = useNavigate()
  const navigateTo = (path) => {
    navigate(path)
  }
  return (
    <div>
      Not Found
      <button onClick={() => navigateTo('/')}>Go back to Home</button>
    </div>
  );
}

export default NotfoundPage;
