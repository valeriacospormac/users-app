import React from 'react';
import './userItem.css';

const UserItem = (props) => {
    const user = props.user;
    return (
        <div className={'user-container'}>
            <input type="checkbox" name={'user-active'}/>
            <button onClick={props.onEdit} className={'edit-user'}>Edit</button>
            <button onClick={props.onRemove} className={'remove-user'}>Delete</button>
            <span className={'user-title'}>{user.name}</span>
            <span>{user.gender}: {user.age} age</span>
            <span>{user.phone}</span>
            <span>{user.email}</span>
        </div>
    )
};

export default UserItem;