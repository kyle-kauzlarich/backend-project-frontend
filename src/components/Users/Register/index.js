import React, { Component } from 'react';
import './index.css';
import axios from 'axios';



class Register extends Component {
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

    handleRegister = () => {
        axios
        .post(`https://lambda-notes-backend-kyle.herokuapp.com/register`, {
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
                <h1>Register</h1>
                <span>Desired Username </span>
                <input
                type='text'
                placeholder='username'
                name='username'
                value={this.state.username}
                onChange={this.handleInput}
                /><br/>
                <span>Desired Password </span>
                <input
                type='text'
                placeholder='password'
                name='password'
                value={this.state.password}
                onChange={this.handleInput}
                /><br/>
                <button
                onClick={this.handleRegister}
                >Submit</button>
            </div>
        );
    };
};


export default Register;