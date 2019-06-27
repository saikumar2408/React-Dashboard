import React,{Component} from 'react';
import {BreadcrumbsItem} from 'react-breadcrumbs-dynamic';
import Aux from'react-aux';

export default class extends Component{
    render(){
        return(
            <Aux>
            <BreadcrumbsItem to={this.props.match.url}>View History</BreadcrumbsItem>
            <h2>Empty</h2>
            </Aux>
        )
    }
}