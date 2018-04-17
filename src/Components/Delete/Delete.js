import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

import Button from '../../UI/Button/Button';

class Delete extends Component {
    
    state = {
                isDeleted: false,
            };
    
    handleClick = () => {
        let ads = JSON.parse(localStorage.getItem('ads'));
        ads.forEach((e, i) => (e.id === this.props.id ? ads.splice(i, 1) : null));
        localStorage.setItem('ads', JSON.stringify(ads));
        this.setState({isDeleted: true});
    }
    
    render() {
        return (
            <div>
                {this.state.isDeleted ? <Redirect to="/"/> :
                    <Button 
                        btnType='Danger'
                        clicked={this.handleClick}
                        >
                        Delete
                    </Button>
                }
            </div>
        )
    }
}

export default Delete;