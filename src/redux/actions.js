import {constants} from "../constants/constants";

export function createUser(id, name, age, phone, email, gender) {
    return {type: constants.CREATE_USER, id, name, age, phone, email, gender}
}

export function deleteUser(id) {
    return {type: constants.DELETE_USER, id};
}

export function updateUser(id, name, age, phone, email, gender) {
    return {type: constants.UPDATE_USER, id, name, age, phone, email, gender};
}

export function editUser(user) {
    return {type: constants.USER_TO_EDIT, user}
}

export function clearEditUser() {
    return {type: constants.CLEAR_USER_TO_EDIT}
}