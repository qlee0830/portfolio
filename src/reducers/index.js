import { combineReducers } from 'redux';
import { loginReducer, loginSelectors } from './login';
const index = combineReducers({
  login: loginReducer,
});

export default (state, action) => {
  return index(state, action);
};

export { loginSelectors };
