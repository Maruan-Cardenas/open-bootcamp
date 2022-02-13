import React, { useReducer, useContext } from 'react';

const Counter = () => {
  // Actions
  const INCREMENT = 'INCREMENT'
  const DECREMENT = 'DECREMENT'
  const RESET = 'RESET'

  const myContext = React.createContext(null)

  const Points = () => {
    const state = useContext(myContext)
    return (
      <p>
        Points: {state.count}
      </p>
    )
  }
  
  // Initial State for reducer
  const initialState = {
    count: 0
  }
   // Reducer to change State
   const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          ...state,
          count: state.count + action.payload.cuantity
        }
      case  DECREMENT:
        return {
          ...state,
          count: state.count - action.payload.cuantity
        }
      case RESET:
          return {
            ...state,
            count: action.payload.cuantity
          }
      default:
        return state
    }
   }
   // Asign useReducer to state, rducer and dispactch actions
   const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <myContext.Provider value={state}>
    <div>
      <Points />
      <button onClick={() => dispatch({type:INCREMENT, payload: {cuantity: 1}})}>
        Increment Points
      </button>
      <button onClick={() => dispatch({type:DECREMENT, payload: {cuantity: 1}})}>
        Increment Points
      </button>
      <button onClick={() => dispatch({type:RESET, payload: {cuantity: 0}})}>
        Increment Points
      </button>
    </div>
    </myContext.Provider>
  );
}

export default Counter;
