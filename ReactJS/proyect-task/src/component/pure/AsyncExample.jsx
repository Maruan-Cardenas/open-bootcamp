import React from 'react';

const Asyncexample = () => {

  async function generateNumber () {
    return 1
  }

  async function generatePromiseNumber () {
    return Promise.resolve(2)
  }

  function obtainNumber () {
    generateNumber()
      .then(res => {
        alert(res)
      })
      .catch(error => alert(`Something went wrong ${error}`))
  }

  function obtainPromiseNumber () {
    generatePromiseNumber()
      .then(res => {
        alert(res)
      })
      .catch(error => alert(`Something went wrong ${error}`))
  }

  async function saveSessionStorage (key, value ) {
    sessionStorage.setItem(key, value)
    return Promise.resolve(sessionStorage.getItem(key))
  }

  function showStorage(){
    saveSessionStorage('name', 'Maruan')
      .then(res => {
        let value = res
        alert(value)
      })
      .catch(error => alert(`Something went wrong ${error}`))
      .finally(sessionStorage.removeItem('name'))
  }

  async function obtainMessage () {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World')
      },2000)
    })
    let messages = await promise
    alert(`Message recived ${messages}`)
  }

  const returnError = async () => {
    await Promise.reject(new Error('Ooops!'))
  }

  const consumeError = () => {
    returnError()
      .then((res) => {
        alert(res)
      })
      .catch((error) => {
        alert(error)
      })
      .finally(() => {
        alert('Finally executed')
      })
  }

  const urlNotFound = async () => {
    try {
      let response = await fetch('https://inalidURL')
      alert(`Response: ${JSON.stringify(response)}`)
    } catch (err) {
      alert(`Something went wrong with your URL: ${err}`)
    }
  }

  const multiplePromise = async () => {
    await Promise.all(
     [
       fetch('https://reqres.in/api/users'), 
       fetch('https://reqres.in/api/users?page=2') 
     ]
   ).catch((err) => {
     alert(`Something went wrong with your URLs: ${err}`)
   })
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
      <button onClick={obtainNumber}>Obtain Number</button>
      <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
      <button onClick={showStorage}>Obtain Promise Name</button>
      <button onClick={obtainMessage}>Obtain Promise messages</button>
      <button onClick={consumeError}>Obtain Error</button>
      <button onClick={consumeError}>Obtain Error</button>
      <button onClick={urlNotFound}>URL Error</button>
      <button onClick={multiplePromise}>Multiple primise Error</button>
    </div>
  );
}

export default Asyncexample;
