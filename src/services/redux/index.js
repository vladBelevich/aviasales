import filterReducer from './reducers/FilterReducer';
import dataReducer from './reducers/DataReducer';
import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const rootReducer = combineReducers({
  filterReducer,
  dataReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
