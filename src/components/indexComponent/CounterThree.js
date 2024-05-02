import React from 'react'
import counter from '../../assets/images/thumbs/counter-bg.png'
import './CounterThree.css'

const CounterThree = () => {
    return (
        <div>
            <section className="counter-three padding-y-120">
                <img src={counter} alt="" className="counter-three__bg" />
                <div className="container container-two">
                    <div className="counter-three-wrapper">
                        <div className="counter-three-item flx-align">
                            <span className="counter-three-item__icon">
                                <img src="assets/images/icons/counter-icon1.svg" alt="" />
                            </span>
                            <div className="counter-three-item__content">
                                <h2 className="counter-three-item__number">800+</h2>
                                <span className="counter-three-item__text fw-light">Happy Client</span>
                            </div>
                        </div>
                        <div className="counter-three-item flx-align">
                            <span className="counter-three-item__icon">
                                <img src="assets/images/icons/counter-icon2.svg" alt="" />
                            </span>
                            <div className="counter-three-item__content">
                                <h2 className="counter-three-item__number">440+</h2>
                                <span className="counter-three-item__text fw-light">Project done</span>
                            </div>
                        </div>
                        <div className="counter-three-item flx-align">
                            <span className="counter-three-item__icon">
                                <img src="assets/images/icons/counter-icon2.svg" alt="" />
                            </span>
                            <div className="counter-three-item__content">
                                <h2 className="counter-three-item__number">500k</h2>
                                <span className="counter-three-item__text fw-light">Employees</span>
                            </div>
                        </div>
                        <div className="counter-three-item flx-align">
                            <span className="counter-three-item__icon">
                                <img src="assets/images/icons/counter-icon1.svg" alt="" />
                            </span>
                            <div className="counter-three-item__content">
                                <h2 className="counter-three-item__number">80+</h2>
                                <span className="counter-three-item__text fw-light">Award winning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CounterThree
