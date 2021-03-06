import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../Home/Home';
import Create from '../Create/Create';
import AdViewing from '../AdViewing/AdViewing';
import Edit from "../Edit/Edit";


class Main extends Component {
    render() {
        const isAuthorized = this.props.isAuthorized;
        
        return (
            <div>
                {isAuthorized ?
                    <h3>
                        <Link to="/edit">Create Ad</Link>
                    </h3> : null}
                
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/edit' render={() => (
                        isAuthorized ? <Create userName={this.props.userName}/> :
                            <Redirect to="/"/>
                    
                    )}/>
                    
                    <Route path='/edit/:ad' render={(match) => (
                        isAuthorized ? <Edit userName={this.props.userName}
                                             match={match}/> :
                            <Redirect to="/"/>
                    )}/>
                    <Route path='/:ad' component={AdViewing}/>
                </Switch>
            </div>
        )
    }
}

export default Main;