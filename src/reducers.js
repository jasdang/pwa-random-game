import {combineReducers} from 'redux';
import {createActions, handleActions, combineActions} from 'redux-actions';
import {updateMin, updateMax} from './actions';

export const initialStore = {
  guessingGame: {
    result: 99,
    min: 0,
    max: 100,
  },
};
const guessingGame = handleActions(
  {
    [updateMin]: (state, {payload}) => {
      return {
        ...state,
        min: payload,
      };
    },
    [updateMax]: (state, {payload}) => {
      return {
        ...state,
        max: payload,
      };
    },
  },
  initialStore
);

// const guessingGame = (state = [], action) => {
//   const {type, payload} = action;
//   switch (type) {
//     default:
//       return state;
//   }
// };

const nextGame = (state = [], action) => {
  const {type, payload} = action;
  switch (type) {
    default:
      return state;
  }
};

const reducers = combineReducers({guessingGame, nextGame});
export default reducers;
