import React from 'react';

// Routes import
import { useNavigate } from 'react-router-dom'

//material import
import Button from '@mui/material/Button'

//component import
import Copyright from '../../component/pure/Copyright';
import Axioscrudexample from '../../component/pure/AxiosCrudExample';

const DashBoard = () => {
  const navigate = useNavigate()
  const logout = () => {
    navigate('/login')
  }
  return (
    <div>
      <Button onClick={logout}>Logout</Button>
      <Axioscrudexample />
      <Copyright />
    </div>
  );
}

export default DashBoard;
