import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './BurritoIngredients.css';


class BurritoIngredients extends Component {
    render() {

        let ingredient = null;
        switch (this.props.type) {
            case ('beans'):
                ingredient = <svg className={classes.Beans}></svg>;
                break;
            case ('beef'):
                ingredient = <svg className={classes.Beef}></svg>;
                break;
            // case ('beer'):
            //     ingredient = <svg className={classes.Beer}></svg>;
            //     break;
            case ('cheese'):
                ingredient = <svg className={classes.Cheese}></svg>;
                break;
            case ('chicken'):
                ingredient = <svg className={classes.Chicken}></svg>;
                break;
            case ('chips'):
                ingredient = <svg className={classes.Chips}></svg>;
                break;
            // case ('corn-tortilla'):
            //     ingredient = <svg className={classes.CornTortilla}></svg>;
            //     break;
            case ('egg'):
                ingredient = <svg className={classes.Egg}></svg>;
                break;
            case ('fish'):
                ingredient = <svg className={classes.Fish}></svg>;
                break;
            case ('tortilla'):
                ingredient = <svg className={classes.FlourTortilla}></svg>;
                break;
            case ('fries'):
                ingredient = <svg className={classes.Fries}></svg>;
                break;
            case ('guacamole'):
                ingredient = <svg className={classes.Guacamole}></svg>;
                break;
            // case ('hot-pepper'):
            //     ingredient = <svg className={classes.HotPepper}></svg>;
            //     break;
            case ('hot-sauce'):
                ingredient = <svg className={classes.HotSauce}></svg>;
                break;
            // case ('juice'):
            //     ingredient = <svg className={classes.Juice}></svg>;
            //     break;
            // case ('lettuce'):
            //     ingredient = <svg className={classes.Lettuce}></svg>;
            //     break;
            // case ('onion'):
            //     ingredient = <svg className={classes.Onion}></svg>;
            //     break;
            case ('pork'):
                ingredient = <svg className={classes.Pork}></svg>;
                break;
            case ('rice'):
                ingredient = <svg className={classes.Rice}></svg>;
                break;
            case ('salsa'):
                ingredient = <svg className={classes.Salsa}></svg>;
                break;
            // case ('soda'):
            //     ingredient = <svg className={classes.Soda}></svg>;
            //     break;
            case ('sour-cream'):
                ingredient = <svg className={classes.SourCream}></svg>;
                break;
            // case ('tofu'):
            //     ingredient = <svg className={classes.Tofu}></svg>;
            //     break;
            // case ('tomato'):
            //     ingredient = <svg className={classes.Tomato}></svg>;
            //     break;    
            case ('vegetables'):
                ingredient = <svg className={classes.Vegetables}></svg>;
                break;
            default: ingredient = null;
        }
        return ingredient
    }
};

BurritoIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurritoIngredients;