// No import or Export system, though it has direct
// To the Redux Library:
// https://stephengrider.github.io/JSPlaygrounds/
//
// Example Redux Store, Reducer, and Action

const reducer = (state = [], action) => {
  if (action.type === 'split_string') {
    return action.payload.split('');
  } else if (action.type == 'add_character') {
    // need to return completely new object (data structure), not mutate the data.
    return [ ...state, action.payload ];
  }

  return state;
}
const store = Redux.createStore(reducer);

store.getState();

const action = {
  type: 'split_string',
  payload: 'asdf'
};

store.dispatch(action);

store.getState();

const action2 = {
  type: 'add_character',
  payload: 'a',
};

store.dispatch(action2);

store.getState();
