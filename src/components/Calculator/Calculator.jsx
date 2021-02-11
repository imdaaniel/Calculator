import React, { Component } from 'react';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBackspace, 
    faEquals, 
    faDivide, 
    faTimes, 
    faPlus, 
    faMinus, 
    faPercentage
} from '@fortawesome/free-solid-svg-icons';

import './Calculator.css';

class Calculator extends Component {
    state = {
        primary_text: 0,
        secondary_text: '',
    }

    handleInput = digit => {
        this.setState({
            primary_text: this.state.primary_text == 0 ? digit : this.state.primary_text + digit,
        })
    }

    handleClear = () => {
        this.setState({
            primary_text: 0,
        })
    }

    render = () => {
        return <>
            <main>
                <section className="display">
                    <div className="values">
                        <div className="primary">
                            {this.state.primary_text}
                        </div>
                        <div className="secondary">
                            455,4 + 123
                        </div>
                    </div>
                </section>
                <section className="pad">
                    <div className="column">
                        <Button
                            text="AC"
                            type="operator clear"
                            click={() => this.handleClear()}>
                        </Button>
                        <Button
                            text={<FontAwesomeIcon icon={faBackspace}></FontAwesomeIcon>}
                            type="operator">
                        </Button>
                        <Button
                            text={<FontAwesomeIcon icon={faPercentage}></FontAwesomeIcon>}
                            type="operator">
                        </Button>
                        <Button
                            text={<FontAwesomeIcon icon={faDivide}></FontAwesomeIcon>}
                            type="operator"
                            click={() => this.handleInput('/')}>
                        </Button>
                    </div>
                    <div className="column">
                        <Button text="7" click={() => this.handleInput('7')}></Button>
                        <Button text="8" click={() => this.handleInput('8')}></Button>
                        <Button text="9" click={() => this.handleInput('9')}></Button>
                        <Button
                            text={<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>}
                            type="operator"
                            click={() => this.handleInput('*')}>
                        </Button>
                    </div>
                    <div className="column">
                        <Button text="4" click={() => this.handleInput('4')}></Button>
                        <Button text="5" click={() => this.handleInput('5')}></Button>
                        <Button text="6" click={() => this.handleInput('6')}></Button>
                        <Button
                            text={<FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>}
                            type="operator"
                            click={() => this.handleInput('-')}>
                        </Button>
                    </div>
                    <div className="column">
                        <Button text="1" click={() => this.handleInput('1')}></Button>
                        <Button text="2" click={() => this.handleInput('2')}></Button>
                        <Button text="3" click={() => this.handleInput('3')}></Button>
                        <Button
                            text={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                            type="operator"
                            click={() => this.handleInput('+')}>
                        </Button>
                    </div>
                    <div className="column">
                        <Button text="0" click={() => this.handleInput('0')}></Button>
                        <Button text=""></Button>
                        <Button text="," type="operator" click={() => this.handleInput('.')}></Button>
                        <Button
                            text={<FontAwesomeIcon icon={faEquals} color="#FFF"></FontAwesomeIcon>}
                            type="calc">
                        </Button>
                    </div>
                </section>
            </main>
        </>
    }
}

export default Calculator;