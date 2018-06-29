import React from 'react';
import Aux from '../../../hoc/Auxil'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span></li>
        })
    
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>You Big Beautiful Burrito:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout</p>
        </Aux>
    )
}
export default orderSummary;