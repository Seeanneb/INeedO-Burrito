import React, { Component } from 'react';
import Aux from '../../hoc/Auxil';
import Burrito from '../../components/Burrito/Burrito'
import BuildControls from '../../components/Burrito/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burrito/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    beans: .5,
    beef: .75,
    beer: 2,
    cheese: .5,
    chicken: .75,
    chips: 1,
    'corn-tortilla': 0,
    egg: .5,
    fish: 1,
    'flour-tortilla': 0,
    fries: .5,
    guacamole: .75,
    'hot-pepper': .25,
    'hot-sauce': 0,
    juice: 1,
    lettuce: 0,
    onion: 0,
    pork: .75,
    rice: .5,
    salsa: 0,
    soda: 1,
    'sour-cream': 0,
    tofu: 1,
    tomato: 0,
    water: 1
}

class BurritoBuilder extends Component {
    state = {
        ingredients: {
            beans: 0,
            beef: 0,
            beer: 0,
            cheese: 0,
            chicken: 0,
            chips: 0,
            'corn-tortilla': 0,
            egg: 0,
            fish: 0,
            'flour-tortilla': 1,
            fries: 0,
            guacamole: 0,
            'hot-pepper': 0,
            'hot-sauce': 0,
            juice: 0,
            lettuce: 0,
            onion: 0,
            pork: 0,
            rice: 0,
            salsa: 0,
            soda: 0,
            'sour-cream': 0,
            tofu: 0,
            tomato: 0,
            water: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
    }

    updatePurchaseState(ingredients){
        
        const sum = Object.keys(ingredients)
                    .map(igKey => {
                        return ingredients[igKey]
                    })
                    .reduce((sum, element) => {
                        return sum + element
                    },0);
            this.setState({purchaseable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
        // only adds if quantity of ingredient is > 1
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) return
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        alert('You Did it YUUUMMMY')
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}/>
                </Modal>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled = {disabledInfo} 
                    purchaseable = {this.state.purchaseable}
                    price = {this.state.totalPrice} 
                    ordered = {this.purchaseHandler} />
                <Burrito ingredients={this.state.ingredients} />
            </Aux>
        )
    }
}

export default BurritoBuilder;