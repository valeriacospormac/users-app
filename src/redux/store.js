import {createStore, combineReducers} from 'redux';
import {userReducer, userToEditReducer} from './reducers';

export const userStore = createStore(combineReducers({usersList: userReducer, userToEdit: userToEditReducer}));