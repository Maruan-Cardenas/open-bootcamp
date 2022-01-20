import React, { useState } from 'react';
import { getRamdomUser } from '../../services/axiosService';
import Button from '@mui/material/Button';

const Axiosexample = () => {
  const [user, setUser] = useState({})
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)

  const getGererateRamdomUser = () => {
    getRamdomUser()
      .then( res => {
        setUser(res.data)
        console.log(user)
      })
      .catch(err => {
        console.log(err)
      })
  }
  const handleLikes = () => {
    setLike(like + 1)
  }
  const handleDislike = () => {
    setDislike(dislike + 1)
  }

  return (
    <div>
      <h1>Chucknorris Joke</h1>
        <div>
          <h3>{user.value}</h3>
        </div>
        <div>
          <Button variant="contained" onClick={getGererateRamdomUser}>New Ramdom joke</Button>
          {
            user.value && (
              <div>
              <Button variant="contained" onClick={handleLikes}>Like {like}</Button>
              <Button variant="contained" onClick={handleDislike}>Dislike {dislike}</Button>
              </div>
            )
          }
          
        </div>
    </div>
  );
}

export default Axiosexample;
