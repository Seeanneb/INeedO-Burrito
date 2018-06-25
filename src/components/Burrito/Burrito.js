import React from 'react';
import classes from './Burrito.css';
import BurritoIngredient from './BurritoIngredients/BurritoIngredients'

const burrito = (props) => {
    return (
        <div className={classes.Burrito}>
            <BurritoIngredient type='meat' />
            <BurritoIngredient type='cheese' />
            <BurritoIngredient type='salad' />
            <BurritoIngredient type='bacon' />
        </div>
    )
}

export default burrito;