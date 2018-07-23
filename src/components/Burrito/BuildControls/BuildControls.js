import React, { Component } from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

class BuildControls extends Component {
    state = {
        isShown: false,

        // catagories: [
        //     { 'label': 'Base' },
        //     { 'label': 'Protein' },
        //     { 'label': 'Topping' },
        //     { 'label': 'Sauce' },
        //     { 'label': 'Beverage' },
        // ],
        controls: [
            { cat: 'Topping', label: 'Beans', type: 'beans' },
            { cat: 'Protein', label: 'Beef', type: 'beef' },
            // { cat: 'Beverage', label: 'Beer', type: 'beer' },
            { cat: 'Topping', label: 'Cheese', type: 'cheese' },
            { cat: 'Protein', label: 'Chicken', type: 'chicken' },
            { cat: 'Topping', label: 'Chips', type: 'chips' },
            // { cat: 'Base', label: 'Corn Tortilla', type: 'corn-tortilla' },
            { cat: 'Protein', label: 'Eggs', type: 'egg' },
            { cat: 'Protein', label: 'Fish', type: 'fish' },
            { cat: 'Base', label: 'Tortilla', type: 'tortilla' },
            { cat: 'Topping Base', label: 'Fries', type: 'fries' },
            { cat: 'Sauce', label: 'Guacamole', type: 'guacamole' },
            // { cat: 'Topping', label: 'Hot Pepper', type: 'hot-pepper' },
            { cat: 'Sauce', label: 'Hot Sauce', type: 'hot-sauce' },
            // { cat: 'Beverage', label: 'Juice', type: 'juice' },
            // { cat: 'Topping', label: 'Lettuce', type: 'lettuce' },
            // { cat: 'Topping', label: 'Onion', type: 'onion' },
            { cat: 'Protein', label: 'Pork', type: 'pork' },
            { cat: 'Topping', label: 'Rice', type: 'rice' },
            { cat: 'Sauce', label: 'Salsa', type: 'salsa' },
            // { cat: 'Beverage', label: 'Soda', type: 'soda' },
            { cat: 'Sauce', label: 'Sour Cream', type: 'sour-cream' },
            // { cat: 'Protein', label: 'Tofu', type: 'tofu' },
            // { cat: 'Topping', label: 'Tomato', type: 'tomato' },
            { cat: 'Topping', label: 'Vegetables', type: 'vegetables' },
            // { cat: 'Beverage', label: 'Water', type: 'water' },
        ]
    }

    render() {
        return (
            <div className={classes.buildControls}>
                <p>Current Price: <strong>${this.props.price.toFixed(2)}</strong></p>

                {this.state.controls.map((item, id) => 
                    <BuildControl
                        key={item.label}
                        label={item.label}
                        added={() => this.props.ingredientAdded(item.type)}
                        removed={() => this.props.ingredientRemoved(item.type)}
                        disabled={this.props.disabled[item.type]} />
                )} 

                <button
                    onClick={this.props.ordered}
                    className={classes.OrderButton}
                    disabled={!this.props.purchaseable}
                >PLACE ORDER</button>
            </div>
        )
    }
}
export default BuildControls