import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gotReducer from './reducers/gotReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(gotReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;