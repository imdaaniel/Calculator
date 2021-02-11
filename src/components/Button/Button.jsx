import React, { Component } from 'react';

import './Button.css';

class Button extends Component {
    prepare() {
        let myProps = {
            text: '',
            type: '',
            click: '',
        };

        for (let prop in myProps) {
            if (this.props[prop] != undefined) {
                myProps[prop] = this.props[prop];
            }
        }

        return myProps;
    }

    render() {
        let myProps = this.prepare();

        return <>
            <button
                className={`CalculatorButton ${myProps.type}`.trim()}
                onClick={myProps.click}
            >{myProps.text}</button>
        </>
    }
}

export default Button;