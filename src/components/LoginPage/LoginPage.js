import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { Form, Row , Col, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faUserAlt } from '@fortawesome/free-solid-svg-icons';
import actionCreaters from '../../store/actionCreaters';
import {Storage} from '../../storage';
import LoginForm from './forms/LoginForm'
import Background from './image1.svg'

import './LoginPage.css';
import Register from './forms/Register';

const loginFormScheme = Yup.object().shape({
    email: Yup.string().email('Must be a valid email').required('Email is a required field'),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is a required field')
});

class LoginPage extends  Component{
    state={
        showLoginPage:true
    }
    componentDidMount(){
        console.log(this.props.status);
    }
 buttonHandler=()=>{
     this.setState({showLoginPage:!this.state.showLoginPage},()=>{
         console.log(this.state);
     })
 }
 LoginHanlder=(username,password,remember)=>{
      console.log(username + password);
      Storage.remember=remember;
      this.props.loginAction(username,password)
    }
 SignUpHandler=(values)=>{
        console.log(values);
 }
    render() {
        return (
            <div className='full-container' style={{background: `url(${Background})`, backgroundSize: "100% 120%"}}>
            <div className="jumbotorn"> 
                    <Container>
                    <Row>
            <Col sm="6" className="col1">
            {this.state.showLoginPage ?
            <div className="form1">  
            <h3 style={{marginBottom:"40px" ,marginRight:"20px",textAlign:"center"}}>Login <FontAwesomeIcon icon={faUserAlt} size='1x'></FontAwesomeIcon></h3> 
            <LoginForm SubmitClicked={this.LoginHanlder} />
            </div> :
             <div className="form2">
                <Register SubmitClicked={this.SignUpHandler}/>
             </div>}
            </Col> 
            <Col sm="6"className='col2'>
             {this.state.showLoginPage ?
             <div className="sides">
             <h1>Welcome to Sample App</h1>   
             <p>please register here</p>
             <Button variant="outline-primary" onClick={this.buttonHandler}>SignUp</Button>     
             </div> :
            <div className="sides">
             <h1>Hello SignUp Hurry</h1>   
             <p>please login here</p>
             <Button variant="outline-primary" onClick={this.buttonHandler}>SignIn</Button>
             </div> }
            </Col>;
            </Row>
            </Container>
            </div>  
            </div>
        );
    }
}

const mapStateToProps=(state) =>{
 return {
     status:state
    }
};

const mapDispatchToProps= (dispatch) => {
    return {
        logoutAction : () => dispatch(actionCreaters.logout()),
        loginAction : (username, password) => dispatch(actionCreaters.Login(username, password))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);

