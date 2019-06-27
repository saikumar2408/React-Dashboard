import React,{Component} from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { BreadcrumbsProvider } from 'react-breadcrumbs-dynamic';
import { ruleBuilder, ability } from './components/Authorization/ability';
import {PrivateRoute} from './components/PrivateRoute'
import Home from './components/Home/Home'

import './App.css';

import LoginPage from './components/LoginPage/LoginPage';

export const history = createBrowserHistory();
export default class App extends Component {
  componentWillMount(){
    let user='user';
    ability.update(ruleBuilder(user));
  }
  render(){
  return (
    <div className="App">
    <BreadcrumbsProvider>
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/login" component={LoginPage} />
         <PrivateRoute path="/home" component={Home} />

        {/* <Route component={ErrorPage} /> */}
      </Switch>
    </Router>
    </BreadcrumbsProvider>
    </div>
    );
   }
  }
