import { combineReducers } from 'redux';
import theListReducer from './theList';


const allReducers = combineReducers({
	theList: theListReducer
});
//combineReducers take an object
//in the combined reducers settings the left hand variable is the new state property of that reducer 

export default allReducers;