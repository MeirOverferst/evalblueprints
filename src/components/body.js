import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import LandingPage from './landing';
import LoginPage from './login'
import CreationPage from './creationPage'

export default class Body extends Component{
    render(){
        return (
            <>
            <div className="body">
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/creation" component={CreationPage} />
          </div>
            </>
            )
    }
}