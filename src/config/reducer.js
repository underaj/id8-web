import { combineReducers } from 'redux';

import auth from '../auth/auth.reducer';

const reducer = combineReducers({
  auth
});

export default reducer;
