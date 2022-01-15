import React from 'react';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  const navigation = (path) => {
    navigate(path)
  }
  const navigationProps = (path) => {
    navigate({
      pathname: path,
      search: '?online=true', // Query Params
      state: {
        online: true,
      }
    })
  }

  return (
    <div>
      Home Page
      <button onClick={() => navigation('/profile')}>Go to profile</button>
      <button onClick={() => navigation('/tasks')}>Go to tasks</button>
      <button onClick={() => navigationProps('/state-online')}>Go Props page</button>
    </div>
  );
}

export default HomePage;
