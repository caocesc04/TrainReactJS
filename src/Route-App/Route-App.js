import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Page/Login/Login';
import Main from '../Page/Main/Main';

class RouteApp extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Login} ></Route>
                <Route path="/main" component={Main}></Route>
            </Switch>
        );
    }
}
export default RouteApp;