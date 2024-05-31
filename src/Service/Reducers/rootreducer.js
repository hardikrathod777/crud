// import CountReducer from './CountReducer';
import EmployeeReducer from './EmployeeReducer'
import { combineReducers } from 'redux';
const rootReducer =combineReducers({
    EmployeeReducer,
    
});

export default rootReducer;