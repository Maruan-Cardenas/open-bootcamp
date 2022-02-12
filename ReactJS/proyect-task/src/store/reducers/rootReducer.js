import { combineReducers } from 'redux'
import { filterReducer } from './filterReducer'
import { todosReducer } from './todosReducer'

export const rootReducer = combineReducers(
  {
    // state name : reducer thath will control it
    todosState: todosReducer,
    filterState: filterReducer,
    // ...add more state an reducer to include them in the store
  }
)