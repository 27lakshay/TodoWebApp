import { combineReducers } from "redux";
import authReducer from './authReducer';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './todoReducer';

export default combineReducers({
   auth: authReducer,
   form: formReducer,
   todos: todoReducer
});