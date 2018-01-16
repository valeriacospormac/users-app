import React from 'react';
import './registerUser.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../../redux/actions';
import {withRouter} from "react-router-dom";

class RegisterUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                id: 0,
                name: "",
                age: "",
                phone: "",
                email: "",
                gender: ""
            }
        }
    }

    render() {
        return (
            <div className={'register-user'}>
                <form onSubmit={this.onCreated}>
                    <label> Name:<br/>
                        <input type="text" name="name" value={this.state.newUser.name} onChange={this.updateState}/>
                    </label><br/>
                    <label> Age:<br/>
                        <input type="number" name="age" value={this.state.newUser.age} onChange={this.updateState}/>
                    </label><br/>
                    <label> Phone:<br/>
                        <input type="number" name="phone" value={this.state.newUser.phone} onChange={this.updateState}/>
                    </label><br/>
                    <label> Email:<br/>
                        <input type="email" name="email" value={this.state.newUser.email} onChange={this.updateState}/>
                    </label> <br/>
                    <label>Gender: <br/>
                        <input type="text" name="gender" value={this.state.newUser.gender} onChange={this.updateState}/>
                    </label> <br/>
                    <input type="submit" className={'submit-button'} value={'Save User'}/>
                </form>
            </div>
        );
    }

    componentDidMount() {
        if (this.props.userToEdit.id) {
            this.setState({
                newUser: {
                    id: this.props.userToEdit.id,
                    name: this.props.userToEdit.name,
                    age: this.props.userToEdit.age,
                    phone: this.props.userToEdit.phone,
                    email: this.props.userToEdit.email,
                    gender: this.props.userToEdit.gender
                }
            })
        }
    }

    onCreated = (event) => {
        event.preventDefault();
        if (!this.props.userToEdit.id) {
            this.setState({
                newUser: {
                    id: this.props.usersList.length
                }
            });
            this.props.userActions.createUser(
                this.state.newUser.id,
                this.state.newUser.name,
                this.state.newUser.age,
                this.state.newUser.phone,
                this.state.newUser.email,
                this.state.newUser.gender
            );
        } else {
            this.props.userActions.updateUser(
                this.state.newUser.id,
                this.state.newUser.name,
                this.state.newUser.age,
                this.state.newUser.phone,
                this.state.newUser.email,
                this.state.newUser.gender
            )
            this.props.userActions.clearEditUser()
        }

        this.props.history.push("/usersList");
    };
    updateState = (event) => {
        const field = event.target.name;
        let user = Object.assign({}, this.state.newUser);
        user[field] = event.target.value;
        return this.setState({newUser: user});
    }
}

const mapStateToProps = ({usersList, userToEdit}) => ({usersList, userToEdit});
const mapDispatchToProps = (dispatch) => ({userActions: bindActionCreators(userActions, dispatch)});
const ConnectedRegisterUser = connect(mapStateToProps, mapDispatchToProps)(RegisterUser);

export default withRouter(ConnectedRegisterUser);