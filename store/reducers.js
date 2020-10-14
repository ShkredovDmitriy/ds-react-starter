import { combineReducers } from 'redux';
import defaultReducers from './externalReducers';
import ui from './ui/reducer';

const rootReducer = combineReducers({
  ...defaultReducers,
  empty: (state = {}) => state,
  [ui.name]: ui.fn,
});

export default rootReducer;
