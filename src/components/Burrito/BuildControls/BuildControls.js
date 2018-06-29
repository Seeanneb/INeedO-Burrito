import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Beans', type: 'beans'},
    {label: 'Beef', type: 'beef'},
    {label: 'Beer', type: 'beer'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Chicken', type: 'chicken'},
    {label: 'Chips', type: 'chips'},
    {label: 'Corn Tortilla', type: 'corn-tortilla'},
    {label: 'Eggs', type: 'egg'},
    {label: 'Fish', type: 'fish'},
    {label: 'Flour Tortilla', type: 'flour-tortilla'},
    {label: 'Fries', type: 'fries'},
    {label: 'Guacamole', type: 'guacamole'},
    {label: 'Hot Pepper', type: 'hot-pepper'},
    {label: 'Hot Sauce', type: 'hot-sauce'},
    {label: 'Juice', type: 'juice'},
    {label: 'Lettuce', type: 'lettuce'},
    {label: 'Onion', type: 'onion'},
    {label: 'Pork', type: 'pork'},
    {label: 'Rice', type: 'rice'},
    {label: 'Salsa', type: 'salsa'},
    {label: 'Soda', type: 'soda'},
    {label: 'Sour Cream', type: 'sour-cream'},
    {label: 'Tofu', type: 'tofu'},
    {label: 'Tomato', type: 'tomato'},
    {label: 'Water', type: 'water'},
]
const buildControls = (props) => (
    <div className={classes.buildControls}>
    <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(item => (
            <BuildControl 
            key={item.label} 
            label={item.label} 
            added={() => props.ingredientAdded(item.type)}
            removed={() => props.ingredientRemoved(item.type)}
            disabled={props.disabled[item.type]}
            />
        ))}
        <button 
        onClick={props.ordered}
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        >PLACE ORDER</button>

    </div>
    );

export default buildControls