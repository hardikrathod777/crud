import { createStore } from 'redux';
import rootReducer from './Service/Reducers/rootreducer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
