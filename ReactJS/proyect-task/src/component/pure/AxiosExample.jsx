import React, { useState } from 'react';
import { getRamdomUser } from '../../services/axiosService';

const Axiosexample = () => {
  const [user, setUser] = useState({})

  const getGererateRamdomUser = () => {
    getRamdomUser()
      .then( res => {
        setUser(res.data.results)
        console.log(user)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>Axios Example</h1>
      <h2>
        {
          user &&
            (
              <div>
                <img src={user.picture} alt="user" />
                <h2>{user.title} {user.name} {user.name}</h2>
                <h3>{user.email}</h3>
              </div>
            )
        }
      </h2>
        <div>
          <p>Generate new user</p>
          <button onClick={getGererateRamdomUser}>Ramdom User</button>
        </div>
    </div>
  );
}

export default Axiosexample;
