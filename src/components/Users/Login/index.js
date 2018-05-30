import React, { Component } from 'react';
import './index.css';
import axios from 'axios';



class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: null,
            password: null,
        }

    }
    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleLogin = () => {
        axios
        .post(`https://lambda-notes-backend-kyle.herokuapp.com/login`, {
            "username": this.state.username,
            "password": this.state.password
        }).then(res => console.log(res))
        .catch(err => console.log(err));
        this.setState({ username: null });
        this.setState({ password: null });
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <input
                type='text'
                placeholder='username'
                name='username'
                value={this.state.username}
                onChange={this.handleInput}
                /><br/>
                <input
                type='text'
                placeholder='password'
                name='password'
                value={this.state.password}
                onChange={this.handleInput}
                /><br/>
                <button
                onClick={this.handleLogin}
                >Login</button>
            </div>
        );
    };
};


export default Login;