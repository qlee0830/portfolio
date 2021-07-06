import { createStore, compose } from 'redux';
import index from '../reducers';
console.log(index, 'index');
const store = createStore(
  index,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__())
);
export { store };
