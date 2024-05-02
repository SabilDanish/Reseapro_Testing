import React from 'react'
import './CounterSection.css'
import counter from '../../assets/images/icons/counter-four1.svg'

const CounterSection = () => {
    return (
        <div>
            <section className="counter-four bg-white padding-y-120">
                <div className="container container-two">
                    <div className="counter-three-wrapper">
                        <div className="counter-three-item style-two flx-align">
                            <span className="counter-three-item__icon">
                                <img src={counter} alt="" />
                            </span>
                            <div className="counter-three-item__content">
                                <h2 className="counter-three-item__number text-heading">800+</h2>
                                <span className="counter-three-item__text text-body">Happy Client</span>
                            </div>
                        </div>
                        <div className="counter-three-item style-two flx-align">
                            <span className="counter-three-item__icon">
                                <img src={counter} alt="" />
                            </span>
                            <div className="counter-three-item__content">
                                <h2 className="counter-three-item__number text-heading">440+</h2>
                                <span className="counter-three-item__text text-body">Project done</span>
                            </div>
                        </div>
                        <div className="counter-three-item style-two flx-align">
                            <span className="counter-three-item__icon">
                                <img src={counter} alt="" />
                            </span>
                            <div className="counter-three-item__content">
                                <h2 className="counter-three-item__number text-heading">500k</h2>
                                <span className="counter-three-item__text text-body">Employees</span>
                            </div>
                        </div>
                        <div className="counter-three-item style-two flx-align">
                            <span className="counter-three-item__icon">
                                <img src={counter} alt="" />
                            </span>
                            <div className="counter-three-item__content">
                                <h2 className="counter-three-item__number text-heading">80+</h2>
                                <span className="counter-three-item__text text-body">Award winning</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CounterSection
