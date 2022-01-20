import React, { useState } from 'react';
import { getNumber } from '../../services/observableService';

const ObservableExample = () => {
  const [number, setNumber] = useState(0)

  const obtainNewNumber = () => {
    console.log('Suscription to Observable')
    getNumber.subscribe(
      {
        next(newNumber) {
          console.log(newNumber)
          setNumber(newNumber)
        },
        error(error) {
          alert(`Error ${error}`)
          console.log('Error in Observable')
        },
        complete(){
          alert(`Finished with ${number}`)
          console.log('Done with the observable')
        }
      }
    )
    console.log('Finished receiving numbers Subscription to Observable')
  }
  return (
    <div>
      <h2>Number: {number}</h2>
      <button onClick={obtainNewNumber}>Observable Example</button>
    </div>
  );
}

export default ObservableExample;
