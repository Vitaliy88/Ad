import React, {Component} from 'react';

import classes from './PaginationLink.css';

class PaginationLink extends Component {
   
    handleClick = (e) => {
        this.props.onClick(this.props.range);
        e.preventDefault();
    }
    
    render() {
        return (
            <li className={classes.Pagination}>
                <a onClick={this.handleClick}>
                    {this.props.value}
                </a>
            </li>
        );
        
    }
}

export default PaginationLink;