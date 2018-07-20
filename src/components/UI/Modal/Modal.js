import React, { Component } from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Auxil';
import Backdrop from '../BackDrop/Backdrop';


class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    componentWillUpdate(){
        console.log('Component will update')
    }
    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(-237px)' : 'translateY(-1000vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}
export default Modal;