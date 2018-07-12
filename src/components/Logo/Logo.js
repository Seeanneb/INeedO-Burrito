import React from 'react'
import myLogo from '../../assets/images/logo.jpg';
import classes from './Logo.css'

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={myLogo} alt='logo here' />
    </div>
)

export default logo;