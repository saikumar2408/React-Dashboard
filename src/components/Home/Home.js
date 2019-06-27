import React, { Component } from 'react';
import NavbarImpl from '../NavBar/Navbar';
import LoginPage from '../LoginPage/LoginPage'
import Aux from 'react-aux';
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import ViewHistory from '../ViewHistory/ViewHistory';
import { Router, Route, Redirect, Switch ,NavLink } from 'react-router-dom';
import DashBoard from './DashBoard/DashBoard';
import  {Breadcrumb} from 'react-bootstrap'
import { Breadcrumbs,BreadcrumbsItem } from 'react-breadcrumbs-dynamic'

{/* <Container>
    <Row>
        <Col sm={4}>
            One of three columns
    </Col>
        <Col sm={4}>
            One of three columns
    </Col>
        <Col sm={4}>
            One of three columns
    </Col>
    </Row>
</Container> */}

export default class Home extends Component {
    render() {
        const { match } = this.props;
        return (
            <Aux>
            <Sidebar />
            <NavbarImpl />
            <Breadcrumbs
                    separator='&nbsp;/&nbsp;'
                    container={Breadcrumb}
                    containerProps={{
                        style: { marginLeft: '64px', paddingTop: '60px', backgroundColor:'#e9ecef', boxShadow: '0px 1px 2px rgba(0,0,0,0.2)' }
                    }}
                    item={NavLink}
                    finalItem={'span'}
                    finalProps={{
                        style: { color: '#ddddd' }
                    }}
            /> 
            <BreadcrumbsItem to={this.props.match.url}>Home</BreadcrumbsItem>
            <div style={{ paddingTop: '10px', marginLeft: '70px' }}>
                <Switch>
                    <Route exact path={match.url} component={DashBoard} />
                    <Route path={`${match.url}/view-history`} component={ViewHistory} />                    {/* <Route component={ErrorPage} /> */}
                </Switch>
             </div>   
            </Aux>     
        );
    }
}
