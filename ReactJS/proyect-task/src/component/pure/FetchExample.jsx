import React, { useState, useEffect } from 'react';
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from '../../services/fetchService';
const Fetchexample = () => {
  const [users, setUsers] = useState([])
  const [totalUsers, setTotalUsers] = useState(12)
  const [selectedUser, setSelectedUser] = useState({})
  const [pages, setPages] = useState(2)
  const [userPerPages, setUserPerPages] = useState(6)

  useEffect(() => {
    obtainUsers()
  }, [])

  const obtainUsers = () => {
    getAllUsers()
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
        setPages(res.total_pages)
        setTotalUsers(res.total)
        setUserPerPages(res.per_page)
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => {
        console.log('Ended obtaining user')
        console.table(users)
      })
  }

  const obtainPagedUsers = (page) => {
      getAllPagedUsers(page)
        .then((res) => {
        console.log(res.data)
        setUsers(res.data)
        setPages(res.total_pages)
        setTotalUsers(res.total)
        setUserPerPages(res.per_page)
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => {
        console.log('Ended obtaining user')
        console.table(users)
      })
  }

  const obtainUserDetails = (id) => {
    getUserDetails(id)
      .then((res) => {
        console.log(res.data)
        setSelectedUser(res.data)
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => {
        console.log('Ended obtaining user')
        console.table(selectedUser)
      })
  }

  const authUser = () => {
    login('eve.holt@reqres.in', 'cityslicka')
      .then((res) => {
        console.log(res.token)
        sessionStorage.setItem('token', res.token)
      })
      .catch((err) => {
        alert(err)
      })
      .finally(() => {
        console.log('Ended obtaining user')
      })
  }

  return (
    <div>
      <button onClick={authUser}>Login</button>
      <h2>Users:</h2>
      {
        users.map((user) => (
          <p key={user.id} onClick={() => obtainUserDetails(user.id)} style={{cursor: 'pointer'}}>
            {user.first_name} {user.last_name}
          </p>
        ))
      }
      <p>Showing {userPerPages} of {totalUsers} in total.</p>
      <button onClick={() => obtainPagedUsers(1)}>Page 1</button>
      <button onClick={() => obtainPagedUsers(2)}>Page 2</button>
      <div>
        <h3>
          User Details
        </h3>
        {
          selectedUser && (
            <div>
              <p>Name: {selectedUser.first_name}</p>
              <p>Last Name: {selectedUser.last_name}</p>
              <p>Email: : {selectedUser.email}</p>
              <img src={selectedUser.avatar} alt="Avatar" />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default Fetchexample;
