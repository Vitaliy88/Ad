import React, {Component} from 'react';

import Button from '../../UI/Button/Button';

import classes from './AuthorizationForm.css';

class AuthorizationForm extends Component {
    
    state = {
                userName: '',
                password: ''
            };
    
    handleSubmit = (e) => {
        const name = this.state.userName;
        const password = this.state.password;
        
        if (name !== '' && password !== '') {
            this.props.onAuthorization(name, password);
        } else {
            alert('Enter username and password');
        }
        
        e.preventDefault();
    }
    
    handleChange= (e) => {
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]: value
        });
    }
    
    render() {
        return (
            <div className={classes.AuthorizationForm}>
                <form onSubmit={this.handleSubmit}>
                      <label style={{display: "block" }}>
                            <input name="userName"
                                type="text"
                                placeholder="nameasdasd"
                                autoFocus
                                value={this.state.userName}
                                onChange={this.handleChange}/>
                           </label>
                        <label style={{display: "block" }}>
                            <input name="password"
                                type="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handleChange}/>
                        </label>
                    <Button type="submit" >Log In</Button>
                </form>
            </div>
        )
    }
}

export default AuthorizationForm;