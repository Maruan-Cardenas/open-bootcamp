import React from 'react';

//Material imports
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const Copyright = () => {
  const year = new Date().getFullYear()
  return (
    <Typography variant="Contained" color="GrayText" align='center'>
      {'Copyright (C)'}
      <Link color='inherit' href='https://imaginaformacion.com'>
        Imagina Formación
      </Link>
      { year }
    </Typography>
  );
}

export default Copyright;
