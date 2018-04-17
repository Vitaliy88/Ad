import React from 'react';

import Button from '../../UI/Button/Button';

import classes from './LogOutForm.css';

const LogOutForm = (props) => {
    return (
        <div>
            <p>
                <span className={classes.UserName}>Welcom! {props.userName}</span>
            </p>
            <Button
            clicked={props.logout}
            >LogOut</Button>
        </div>
    )
}

export default LogOutForm;