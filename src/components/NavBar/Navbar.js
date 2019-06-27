import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Navbar,NavDropdown,Nav} from "react-bootstrap";
// import { Link, RouteComponentProps } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faComment, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import actionCreaters from '../../store/actionCreaters'
import './Navbar.css';
import {Storage} from '../../storage'
class NavbarImpl extends Component {
    render() {
        return (
            <div>
            <Navbar sticky="top"
                style={{
                    position:'fixed',
                    width:'100%',
                    height:'64px',
                    backgroundColor: 'white',
                    marginLeft: '64px',
                    marginBottom: '10px',
                    boxShadow: '0px 1px 2px rgba(0,0,0,0.2)',
                    zIndex:10
                }}>
                    <Navbar.Brand> 
                    {/* <Link to="/" id="brand">Sample App</Link> */}
                    <span id="brand" >Sample App</span>
                </Navbar.Brand>
                 <Nav className="ml-auto">
                <Nav>
                <Nav.Link className="mr-2">
                    <span id="username">User</span>
                                <FontAwesomeIcon icon={faUser} style={{ fontSize: '1.2em' }} color="#0b2238" />
                </Nav.Link>
                <Nav.Link className="mr-2">
                        <FontAwesomeIcon icon={faComment} style={{ fontSize: '1.2em' }} color="#0b2238" />
                </Nav.Link>
                 <Nav.Link className="mr-2" onClick={this.props.logoutAction}>
                    <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '1.2em' }} color="#0b2238" />
                </Nav.Link>
                </Nav>
            </Nav >
                </Navbar>
            </div>
        )
    }
}
const mapStateToProps =(state) =>{
  return{ 
    user : state.user
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logoutAction: () => dispatch(actionCreaters.logout())
    }
}   
export default connect(mapStateToProps, mapDispatchToProps)(NavbarImpl);