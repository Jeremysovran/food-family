/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import rootReducer from 'src/store/reducers';
import ajaxMiddleware from './ajaxMiddleware';

/*
 * Code
 */
const appliedMiddlewares = applyMiddleware(ajaxMiddleware);

const devTools = [
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  // window.REDUX_DEVTOOLS_EXTENSION ? window.REDUX_DEVTOOLS_EXTENSION() : f => f,
];

const enhancers = compose(appliedMiddlewares, ...devTools);
// createStore
const store = createStore(rootReducer, enhancers);

/*
 * Export
 */
export default store;
