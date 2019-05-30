import React from 'react';
import {connect} from 'react-redux';
import {loggingStart} from '../actions';

class Login extends React.Component {
    state = {
        credentials: {username: '', password: ''}
    }
    handleLogin = (e) => {
        e.preventDefault();
        this.props.loggingStart(this.state.credentials)
            .then(() => this.props.history.push('/friends'))
    }
    handleChange = (e) => {
        this.setState({credentials: {...this.state.credentials, [e.target.name]: e.target.value}});
    }
    render() {
        return(
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    name: <input type="text"
                    name='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange} /> 
                    <br />

                    password: <imput type="password"
                    name='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange} />
                    <br />
                    <button type='submit'>Submit</button>
                </fieldset>
            </form>
        )
    }
}

export default connect(null, {loggingStart,})(Login);