import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './App.css';
import {Perso} from "./components/Perso/Perso";

class App extends Component {
        render() {
        return (
        <div className="App">
            <div className="App-content">
                <Switch>  
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                    <PrivateRoute path='/Perso' component={Perso} />
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;
