import { ADD_TODO, TOGGLE_TODO } from '../actions/actions'
// initial TodoState
// initialy todos is empty
let inicialState = []

export const todosReducer = (state = inicialState, action) => {
    switch (action.type) {
      case ADD_TODO: 
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
          completed: false
        }
      ]
      case TOGGLE_TODO:
        return state.map(res => (
          res.id === action.payload.id 
          ? {...res, completed: !res.comleted}
          : res
        ))
        default:
          return state
    }
}