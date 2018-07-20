import React, { Component } from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

// const catagories = [
//     {'label': 'Base'},
//     {'label': 'Protein'},
//     {'label': 'Topping'},
//     {'label': 'Sauce'},
//     {'label': 'Beverage'},
// ]

// const controls = [
//     {cat: 'Topping', label: 'Beans', type: 'beans'},
//     {cat: 'Protein', label: 'Beef', type: 'beef'},
//     {cat: 'Beverage', label: 'Beer', type: 'beer'},
//     {cat: 'Topping', label: 'Cheese', type: 'cheese'},
//     {cat: 'Protein', label: 'Chicken', type: 'chicken'},
//     {cat: 'Topping Base', label: 'Chips', type: 'chips'},
//     {cat: 'Base', label: 'Corn Tortilla', type: 'corn-tortilla'},
//     {cat: 'Protein', label: 'Eggs', type: 'egg'},
//     {cat: 'Protein', label: 'Fish', type: 'fish'},
//     {cat: 'Base', label: 'Flour Tortilla', type: 'flour-tortilla'},
//     {cat: 'Topping Base', label: 'Fries', type: 'fries'},
//     {cat: 'Sauce', label: 'Guacamole', type: 'guacamole'},
//     {cat: 'Topping', label: 'Hot Pepper', type: 'hot-pepper'},
//     {cat: 'Sauce', label: 'Hot Sauce', type: 'hot-sauce'},
//     {cat: 'Beverage', label: 'Juice', type: 'juice'},
//     {cat: 'Topping', label: 'Lettuce', type: 'lettuce'},
//     {cat: 'Topping', label: 'Onion', type: 'onion'},
//     {cat: 'Protein', label: 'Pork', type: 'pork'},
//     {cat: 'Topping', label: 'Rice', type: 'rice'},
//     {cat: 'Sauce', label: 'Salsa', type: 'salsa'},
//     {cat: 'Beverage', label: 'Soda', type: 'soda'},
//     {cat: 'Sauce', label: 'Sour Cream', type: 'sour-cream'},
//     {cat: 'Protein', label: 'Tofu', type: 'tofu'},
//     {cat: 'Topping', label: 'Tomato', type: 'tomato'},
//     {cat: 'Beverage', label: 'Water', type: 'water'},
// ]
class BuildControls extends Component {
    state = {
        isShown: false,

        catagories: [
            { 'label': 'Base' },
            { 'label': 'Protein' },
            { 'label': 'Topping' },
            { 'label': 'Sauce' },
            { 'label': 'Beverage' },
        ],
        controls: [
            { cat: 'Topping', label: 'Beans', type: 'beans' },
            { cat: 'Protein', label: 'Beef', type: 'beef' },
            { cat: 'Beverage', label: 'Beer', type: 'beer' },
            { cat: 'Topping', label: 'Cheese', type: 'cheese' },
            { cat: 'Protein', label: 'Chicken', type: 'chicken' },
            { cat: 'Topping', label: 'Chips', type: 'chips' },
            { cat: 'Base', label: 'Corn Tortilla', type: 'corn-tortilla' },
            { cat: 'Protein', label: 'Eggs', type: 'egg' },
            { cat: 'Protein', label: 'Fish', type: 'fish' },
            { cat: 'Base', label: 'Flour Tortilla', type: 'flour-tortilla' },
            { cat: 'Topping Base', label: 'Fries', type: 'fries' },
            { cat: 'Sauce', label: 'Guacamole', type: 'guacamole' },
            { cat: 'Topping', label: 'Hot Pepper', type: 'hot-pepper' },
            { cat: 'Sauce', label: 'Hot Sauce', type: 'hot-sauce' },
            { cat: 'Beverage', label: 'Juice', type: 'juice' },
            { cat: 'Topping', label: 'Lettuce', type: 'lettuce' },
            { cat: 'Topping', label: 'Onion', type: 'onion' },
            { cat: 'Protein', label: 'Pork', type: 'pork' },
            { cat: 'Topping', label: 'Rice', type: 'rice' },
            { cat: 'Sauce', label: 'Salsa', type: 'salsa' },
            { cat: 'Beverage', label: 'Soda', type: 'soda' },
            { cat: 'Sauce', label: 'Sour Cream', type: 'sour-cream' },
            { cat: 'Protein', label: 'Tofu', type: 'tofu' },
            { cat: 'Topping', label: 'Tomato', type: 'tomato' },
            { cat: 'Beverage', label: 'Water', type: 'water' },
        ]
    }

    
    catagoryHandler = (item) => {
        const hidden = this.state.isShown
        this.setState({isShown: !hidden})
        console.log(this.state.isShown)
        console.log(item)
        this.state.controls.map((ing, id) => {
            if (item === ing.cat) {
                console.log(`${id} match at ${ing.label}`)
                return <BuildControl />
                // return the matching <ButtonControl />
            }
        })
    }
    handleClick () {
        this.toggleDisplay()
        this.catagoryHandler()
    }


    render() {
        return (
            <div className={classes.buildControls}>
                <p>Current Price: <strong>${this.props.price.toFixed(2)}</strong></p>

                {this.state.catagories.map(catagory => (
                    <button onClick={() => this.catagoryHandler(catagory.label)}>{catagory.label}</button>
                    // when clicked, map through all controls that have the matching cat
                ))}
                
                {this.state.controls.map((item, id) => {this.state.isShown ? 
                    <BuildControl
                        key={item.label}
                        label={item.label}
                        added={() => this.props.ingredientAdded(item.type)}
                        removed={() => this.props.ingredientRemoved(item.type)}
                        disabled={this.props.disabled[item.type]} />
                        : <p>deez nuts</p>  }
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