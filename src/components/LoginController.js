import React from 'react';

function LoginButton (props) {
    return (
        <button onClick={props.onClick}>Login</button>
    );
}

function LogoutButton (props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    );
}

export default class LoginController extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLoginClick = () => {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

    render () {
        const isLoggedIn = this.state.isLoggedIn;
        let button = isLoggedIn
            ? <LogoutButton onClick={this.handleLogoutClick}/>
            : <LoginButton onClick={this.handleLoginClick}/>
        return button;
    }
}