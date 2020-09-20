import {combineReducers} from 'redux';

const guessingGame = (state = [], action) => {
  const {type, payload} = action;
  switch (type) {
    default:
      return state;
  }
};

const nextGame = (state = [], action) => {
  const {type, payload} = action;
  switch (type) {
    default:
      return state;
  }
};

const reducers = combineReducers({guessingGame, nextGame});
export default reducers;
