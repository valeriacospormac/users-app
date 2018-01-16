import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './main.css'
import Home from './home/home'
import RegisterUser from './registerUser/registerUser'
import UsersList from './userList/usersList'
import ActiveUsers from './activeUsers/activeUsers'

const imageUser = require('./user.png');

const Main = () => (
    <Router>
        <div className='container'>
            <div className='header'>
                <div className='logo'>
                    <NavLink to="/home" activeStyle={{color:'#ecc68e'}}>
                        <img src={imageUser} alt={'user'}/>
                    </NavLink>
                    <p>company name</p>
                </div>
                <nav className='navigation-bar'>
                    <NavLink to="/home" activeStyle={{color:'#ecc68e'}}>Home</NavLink>
                    <NavLink to="/registerUser" activeStyle={{color:'#ecc68e'}}>Register a user</NavLink>
                    <NavLink to="/usersList" activeStyle={{color:'#ecc68e'}}>Users</NavLink>
                    <NavLink to="/activeUsers" activeStyle={{color:'#ecc68e'}}>Actives Users</NavLink>
                </nav>
            </div>
            <hr/>
            <Route exact path="/home" component={Home}/>
            <Route path="/registerUser" component={RegisterUser}/>
            <Route path="/usersList" component={UsersList}/>
            <Route path="/activeUsers" component={ActiveUsers}/>
        </div>
    </Router>
)

export default Main;