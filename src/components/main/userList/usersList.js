import React from 'react'
import UserItem from "./userItem/userItem";
import './usersList.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../redux/actions';
import {withRouter} from "react-router-dom";


class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.onRemoved = this.onRemoved.bind(this);
        this.onEdited = this.onEdited.bind(this);
    }

    render() {
        const userItem = this.props.usersList.map(user => (
            <div className={'user-item'} key={user.id}>
                <UserItem user={user} onEdit={() => this.onEdited(user)} onRemove={() => this.onRemoved(user.id)}/>
            </div>
        ));
        return (
            <div className={'users-list'}>{userItem}</div>
        )
    }

    onRemoved = (id) => this.props.userActions.deleteUser(id);
    onEdited = (user) => {
        this.props.userActions.editUser(user);
        this.props.history.push("/registerUser");
    }
}

const mapStateToProps = ({usersList}) => ({usersList});
const mapDispatchToProps = (dispatch) => ({userActions: bindActionCreators(userActions, dispatch)});
const ConnectedUsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default withRouter(ConnectedUsersList);