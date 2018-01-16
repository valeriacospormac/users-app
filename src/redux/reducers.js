import {constants} from "../constants/constants";

const initialState = require('../mock-data');
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.CREATE_USER: {
            return [...state, {
                id: action.id,
                name: action.name,
                age: action.age,
                phone: action.phone,
                email: action.email,
                gender: action.gender
            }];
        }

        case constants.DELETE_USER: {
            return state.filter(user => user.id !== action.id);
        }

        case constants.UPDATE_USER: {
            return state.map(user => user.id === action.id ? {
                ...user,
                id: action.id !== undefined ? action.id : user.id,
                name: action.name !== undefined ? action.name : user.name,
                age: action.age !== undefined ? action.age : user.age,
                phone: action.phone !== undefined ? action.phone : user.phone,
                email: action.email !== undefined ? action.email : user.email,
                gender: action.gender !== undefined ? action.gender : user.gender
            } : user);
        }
        default:
            return state;
    }
};

export const userToEditReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.USER_TO_EDIT: {
            return action.user;
        }
        case constants.CLEAR_USER_TO_EDIT: {
            return {};
        }
        default:
            return state;
    }
};

