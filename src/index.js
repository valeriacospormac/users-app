import './index.css'
import React from 'react'
import ReactDOM from 'react-dom';
import Main from './components/main/main';
import {Provider} from 'react-redux'
import {userStore} from "./redux/store";

ReactDOM.render(
    <Provider store={userStore}>
        <Main/>
    </Provider>,
    document.getElementById('root')
);
