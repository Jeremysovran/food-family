import { combineReducers } from 'redux';
import eventReducer from './event-reducer';
import menuReducer from './menu-reducer';
import homeReducer from './home-reducer';
import listReducer from './list-reducer';

const rootReducer = combineReducers({
  event: eventReducer,
  menu: menuReducer,
  home: homeReducer,
  list: listReducer,
});

export default rootReducer;
