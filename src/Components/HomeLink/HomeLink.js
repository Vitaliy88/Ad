import React from 'react';
import {Link} from 'react-router-dom';

import classes from './HomeLink.css';

const HomeLink = () => {
    return <h4><Link classes={classes.Link} to="/">Home</Link></h4>
}

export default HomeLink;