import { combineReducers } from 'redux';
import user from '../reducers/user';
import register from '../reducers/register';

const rootReducer = combineReducers({
  user,
  register
});
export default rootReducer;
