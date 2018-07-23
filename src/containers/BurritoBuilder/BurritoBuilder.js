import React, { Component } from 'react';
import Aux from '../../hoc/Auxil';
import Burrito from '../../components/Burrito/Burrito'
import BuildControls from '../../components/Burrito/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burrito/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    beans: .5,
    beef: .75,
    cheese: .5,
    chicken: .75,
    chips: 1,
    egg: .5,
    fish: 1,
    tortilla: 0,
    fries: .5,
    guacamole: .75,
    'hot-sauce': 0,
    pork: .75,
    rice: .5,
    salsa: 0,
    'sour-cream': 0,
    vegetables: 0
}

class BurritoBuilder extends Component {
    state = {
        ingredients: null, // {
            // beans: 0,
            // beef: 0,
            // cheese: 0,
            // chicken: 0,
            // chips: 0,
            // egg: 0,
            // fish: 0,
            // tortilla: 1,
            // fries: 0,
            // guacamole: 0,
            // 'hot-sauce': 0,
            // pork: 0,
            // rice: 0,
            // salsa: 0,
            // 'sour-cream': 0,
            // vegetables: 0
       // },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount(){
        axios.get('https://ineedoburrito.firebaseio.com/ingredients.json')
            .then(response => {
                this.setState({ingredients: response.data});
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            })
            .reduce((sum, element) => {
                return sum + element
            }, 0);
        this.setState({ purchaseable: sum > 0 })
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
        this.setState({ purchasing: true })
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.setState({loading: true}) 
        // alert('You Did it YUUUMMMY')
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Sean',
                address: {
                    street: '123 Deez',
                    zip: '12345',
                    country: 'America'
                },
                email: '420@Blazeit.com'
            },
            deliveryMethod: '1DAY'
        }
        axios.post('/orders.json', order)
            .then(response => { 
                this.setState({loading: false, purchasing: false})
                console.log('response ' + response) })
            .catch(error => { 
                this.setState({loading: false, purchasing: false})
                console.log('error ' + error) })

    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        
        if (this.state.loading) {
            orderSummary = <Spinner />
        }
        let burger = this.state.error ? <p>Ingredients didnt do nuthin</p> : <Spinner />

        if (this.state.ingredients){
        burger = (
        <Aux>
         <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            disabled={disabledInfo}
            purchaseable={this.state.purchaseable}
            price={this.state.totalPrice}
            ordered={this.purchaseHandler} />
         <Burrito ingredients={this.state.ingredients} />
         </Aux>)
         orderSummary = <OrderSummary ingredients={this.state.ingredients}
            price={this.state.totalPrice}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler} />;
        }
        if (this.state.loading){
            orderSummary = <Spinner />
        }
        return (
            <Aux>
                <Modal modalClosed={this.purchaseCancelHandler} show={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default withErrorHandler(BurritoBuilder, axios);