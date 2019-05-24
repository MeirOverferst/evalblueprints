import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import LandingPage from './landing';
import Login from './login'


export default class Body extends Component{
    render(){
        return (
            <>
            <div className="body">
            <Route path="/login" component={Login} />
          </div>
            </>
            )
    }
}