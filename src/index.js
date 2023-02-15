import App from './components/app';
import filterReducer from './services/redux/reducers/filter-reducer';
import { createRoot } from 'react-dom/client';
import { applyMiddleware, createStore } from 'redux';
import './index.scss';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(filterReducer, applyMiddleware(thunk));
const container = document.getElementById('container');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
