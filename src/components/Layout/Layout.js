import React from 'react'
import Aux from '../../hoc/Auxil';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <h1>INeedO Burrito</h1>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)

export default layout;