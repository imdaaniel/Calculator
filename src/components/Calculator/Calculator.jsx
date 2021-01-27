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
    render() {
        return <>
            <main>
                <section className="display">
                    <div className="values">
                        <div className="primary">
                            1396,5
                        </div>
                        <div className="secondary">
                            455,4 + 123
                        </div>
                    </div>
                </section>
                <section className="pad">
                    <div className="column">
                        <Button text="AC" type="operator clear"></Button>
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
                            type="operator">
                        </Button>
                    </div>
                    <div className="column">
                        <Button text="7"></Button>
                        <Button text="8"></Button>
                        <Button text="9"></Button>
                        <Button
                            text={<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>}
                            type="operator">
                        </Button>
                    </div>
                    <div className="column">
                        <Button text="4"></Button>
                        <Button text="5"></Button>
                        <Button text="6"></Button>
                        <Button
                            text={<FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>}
                            type="operator">
                        </Button>
                    </div>
                    <div className="column">
                        <Button text="1"></Button>
                        <Button text="2"></Button>
                        <Button text="3"></Button>
                        <Button
                            text={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                            type="operator">
                        </Button>
                    </div>
                    <div className="column">
                        <Button text="0"></Button>
                        <Button text=""></Button>
                        <Button text=","></Button>
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