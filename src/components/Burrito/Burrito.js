import React from 'react';
import classes from './Burrito.css';
import BurritoIngredient from './BurritoIngredients/BurritoIngredients'

const burrito = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
        .map(ingKey => {
            return [...Array(props.ingredients[ingKey])].map((_, i)=> {
               return <BurritoIngredient key={ingKey + i} type={ingKey} />
            }) 
        })
        .reduce((prev, curr) => {
            return prev.concat(curr) 
        }, []);

        if(transformedIngredient === 0){
            transformedIngredient = <p>Begin building the best Burrito</p>
        }

        console.log(transformedIngredient)
    return (
        <div>
        <h5>Your Burrito</h5>
        <div className={classes.Burrito} className={classes.container}>
            
            {transformedIngredient}
        </div>
        </div>
    )
}

export default burrito;