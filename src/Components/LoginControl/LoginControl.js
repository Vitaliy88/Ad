import React, {Component} from 'react';
import Main from "../Main/Main";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import LogOutForm from "../LogOutForm/LogOutForm";

class LoginControl extends Component {
  
    state = {
        userName: this.getAuthorizedUser(),
        isAuthorized: this.isAuthorized()
    };
    
    handleAuthorization = (userName, password) => {
        let users = JSON.parse(localStorage.getItem('users')) || {};
        
        if (userName in users) {
            if (password === users[userName]) {
                this.login(userName);
            } else {
                alert('Password is incorrect!');
            }
        } else {
            this.signUp(userName, password, users);
            this.login(userName);
        }
    }
    
    signUp = (userName, password, users) => {
        users[userName] = password;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    login = (userName) => {
        this.setState({
            userName,
            isAuthorized: true
        });
        localStorage.isAuthorized = 'true';
        localStorage.authorizedUser = userName;
    }
    
    logout = () => {
        this.setState({
            userName: '',
            isAuthorized: false
        });
        localStorage.isAuthorized = 'false';
        localStorage.authorizedUser = '';
    }
    
    isAuthorized() {
        return localStorage.isAuthorized === 'true';
    }
    
    getAuthorizedUser() {
        return localStorage.authorizedUser;
    }
    
    render() {
        const isAuthorized = this.state.isAuthorized;
        return (
            <div>
                {isAuthorized ?
                    <LogOutForm userName={this.state.userName}
                                logout={this.logout}/> :
                    <AuthorizationForm onAuthorization={this.handleAuthorization}/>}
                <Main isAuthorized={isAuthorized}
                      userName={this.state.userName}/>
            </div>
        )
    }
}

export default LoginControl