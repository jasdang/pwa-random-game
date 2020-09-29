import {createActions} from 'redux-actions';

export const {updateMin, updateMax, toggleRunning, reset} = createActions(
  'UPDATE_MIN',
  'UPDATE_MAX',
  'TOGGLE_RUNNING',
  'RESET'
);
