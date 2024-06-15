import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap"; 
import {Form, Button, Card, Input} from 'semantic-ui-react';
import axios from 'axios';

import "./Login.scss";
import Header from "../Layout/Header";

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading : false,
            username:"",
            password:""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(){
        let{username,password} = this.state;
        if(username !== "" & password !== ""){
            this.setState({isLoading: true});
            console.log(this.state);
        }
    }

    render() {
        return(
            <div>
                <Container className="container">
                    <Header/>
                    <Row className="justify-content-center">
                        <Col md="2" className="form-login">
                            <Card fluid>
                            <Card.Content>
                                <Form className="form">
                                    <h1 className="login-title">LOGIN</h1>
                                    <Form.Field 
                                        label = "Username"
                                        name="username"
                                        control={Input}
                                        placeholder="Username"
                                        required
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Field 
                                        label = "Password"
                                        name="password"
                                        control={Input}
                                        placeholder="Password"
                                        required
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                    <div className="forgot-password">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <Button 
                                        fluid 
                                        color="blue" 
                                        type='login' 
                                        content="LOGIN" 
                                        onClick={this.handleSubmit}
                                    />
                                    <div className="register-link">
                                        <p>Don't have an account ? <a href="/register">Register</a> now</p>
                                    </div>
                                </Form>
                            </Card.Content>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Login;