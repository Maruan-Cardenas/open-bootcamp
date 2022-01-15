import React from 'react';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const navigation = (path) => {
    navigate(path)
  }
  return (
    <div>
      Home Page
      <button onClick={() => navigation('/profile')}>Go to profile</button>
    </div>
  );
}

export default HomePage;
