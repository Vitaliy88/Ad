import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Delete from '../Delete/Delete';

import classes from './Ad.css';

class Ad extends Component {
    render() {
        const id = this.props.id;
        return (
            <div className={classes.Item}>
                {this.props.withLink ?
                    <Link to={id}>
                        <h3>{this.props.title}</h3>
                    </Link> :
                    <h3>{this.props.title}</h3>}
                <span>{this.props.author} </span>
                <data>({this.props.created_at})</data>
                <p>{this.props.description}</p>
                {localStorage.authorizedUser === this.props.author ?
                    <div>
                        <Delete id={id}/>
                        <Link to={'/edit/' + id}>Edit</Link>
                    </div> : null}
            </div>
        )
    }
}

export default Ad;