import React, { useState } from 'react';
import { getRamdomUser } from '../../services/axiosService';

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
          <button onClick={getGererateRamdomUser}>New Ramdom joke</button>
          {
            user.value && (
              <div>
              <button onClick={handleLikes}>Like {like}</button>
              <button onClick={handleDislike}>Dislike {dislike}</button>
              </div>
            )
          }
          
        </div>
    </div>
  );
}

export default Axiosexample;
