import {createStore} from 'redux';
import reducers from './reducers';

const initialStore = {
  guessingGame: {
    result: 99,
  },
};

const store = createStore(
  reducers,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;