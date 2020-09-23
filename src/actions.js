import {createActions, handleActions, combineActions} from 'redux-actions';

export const {updateMin, updateMax} = createActions('UPDATE_MIN', 'UPDATE_MAX');
