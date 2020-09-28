import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';
import {updateMin, updateMax, toggleRunning} from './actions';

export const initialStore = {
  guessingGame: {
    result: 50,
    min: 0,
    max: 100,
    isRunning: true,
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
    [toggleRunning]: (state) => {
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    },
  },
  initialStore
);

const nextGame = (state = [], action) => {
  const {type} = action;
  switch (type) {
    default:
      return state;
  }
};

const reducers = combineReducers({guessingGame, nextGame});
export default reducers;
