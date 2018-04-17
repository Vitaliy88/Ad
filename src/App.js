import React, {Component} from 'react';
import LoginControl from './Components/LoginControl/LoginControl'

import classes from './App.css';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <LoginControl/>
            </div>
        );
    }
}

export default App;
