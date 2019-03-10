import { ADD_TODO} from '../constants/ActionTypes';

const initialState = [ {
        text: 'use Redux',
        completed: false,
        id:0
      }
]

export default function todos(state = initialState, action) {
  switch(action.type){
    case ADD_TODO:
    return [
      ...state,
              { id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) +1,
                text:action.text, completed: false}
    ]

    default: return state;
  }
}

