import React, { Component } from 'react';
import Aux from '../../hoc/Auxil';
import Burrito from '../../components/Burrito/Burrito'

class BurritoBuilder extends Component {
    render() {
        return (
            <Aux>
                <Burrito />
            </Aux>
        )
    }
}

export default BurritoBuilder;