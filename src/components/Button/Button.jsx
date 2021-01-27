import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
    prepare() {
        let params = {};

        switch (this.props.type) {
            case 'operator':
                params.color = `CalculatorButton-operator`;
                params.action = '';
                break;
            case 'calc':
                params.color = `CalculatorButton-calc`;
                params.action = '';
                break;
            default:
                params.color = ``;
                params.action = '';
                break;
        }

        return params;
    }

    render() {
        // let params = this.prepare();

        return <>
            <button className={`CalculatorButton ${this.props.type}`}>{this.props.text}</button>
        </>
    }
}

export default Button;