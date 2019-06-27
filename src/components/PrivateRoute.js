import React,{Component} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import {Storage} from '../storage'

class PrivateRouteImpl extends Component{
    render() {
        const { component, ...rest } = this.props;

        if (!component) {
            throw Error("component is undefined");
        }

        const Component = component; // JSX Elements have to be uppercase.

        return (
            <Route
                {...rest}
// tslint:disable-next-line: jsx-no-lambda
                render={(props) => (
                    this.props.loggedIn 
                        ? <Component {...props} />
                        : <Redirect to='/login' />
                )}
            />
        );
    }
}

function mapStateToProps(state) {
   let loggedIn = state.loggedIn
    return { loggedIn };
}

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteImpl);
