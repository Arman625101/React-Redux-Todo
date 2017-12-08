import { combineReducers } from 'redux';
import todosList from './todosList';
import filter from './filter';

export default combineReducers({
    todosList,
    filter
})