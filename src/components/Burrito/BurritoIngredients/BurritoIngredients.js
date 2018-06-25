import React from 'react';
import classes from './BurritoIngredients.css';

const burritoIngredients = (props) => {
    let ingredient = null;
    switch(props.type){
        case('BreadBottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
            case('BreadTop'):
            ingredient = (<div className={classes.BreadTop}>
            <div className={classes.Seed1}></div>
            <div className={classes.Seed2}></div>
                            </div>) 
            break;
        
    }
};

export default burritoIngredients;