import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
const intialState = {};
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(
	rootReducer,
	intialState,
	composeWithDevTools(applyMiddleware(thunk))
);
export default store;
