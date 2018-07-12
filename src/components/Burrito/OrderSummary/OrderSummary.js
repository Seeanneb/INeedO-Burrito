import React, {Component} from 'react';
import Aux from '../../../hoc/Auxil'
import Button from '../../UI/Button/Button'

class orderSummary extends Component{
    componentWillUpdate(){
        console.log('Order Summary Will Update')
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform:'capitalize'}}>{igKey}: {this.props.ingredients[igKey]}</span></li>
        })
        return(
            <Aux>
            <h3>Your Order</h3>
            <p>You Big Beautiful Burrito:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: $ {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout</p>
            <Button btnType='Danger' clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        )
    }
} 
export default orderSummary;