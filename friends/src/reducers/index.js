import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import friendsListReducer from './friendsListReducer';


export default combineReducers({
    login: loginReducer, friends: friendsListReducer
    }
);