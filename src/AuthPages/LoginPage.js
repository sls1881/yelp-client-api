import React, { Component } from 'react'
import { loginUser } from '../ApiUtils.js'

export default class LoginPage extends Component {
    //Initialize state
    state = {
        email: '',
        password: '',
    }

    //handle email change
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    //handle password change
    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    //handle submit for form
    handleSubmit = async (e) => {
        e.preventDefault()
        const user = await loginUser(this.state.email, this.state.password)
        this.props.handleUserChange(user)
        this.props.history.push('/search')
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                    <input value={this.state.email} onChange={this.handleEmailChange} />
                    </label>
                    <label>
                        Password:
                    <input type='password' value={this.state.password} onChange={this.handlePasswordChange} />
                    </label>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}
