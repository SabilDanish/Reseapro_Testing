import React from 'react'
import ppt1 from '../../assets/images/icons/ppty-type-icon1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Property.css'

const Property = () => {
    return (
        <div>
            <section className="property-type-three padding-b-60">
                <div className="container container-two">
                    <div className="section-heading style-left">
                        <span className="section-heading__subtitle bg-white"><span className="text-gradient fw-semibold">Property Type</span></span>
                        <h2 className="section-heading__title">Investing in real estate made it lot easy</h2>
                    </div>
                    <div className="row gy-4">
                        <div className="col-xl-4 col-sm-6 col-xs-6">
                            <div className="property-type-three-item d-flex align-items-start">
                                <span className="property-type-three-item__icon flex-shrink-0">
                                    <img src={ppt1} alt="" />
                                </span>
                                <div className="property-type-three-item__content">
                                    <h6 className="property-type-three-item__title">Prestige Management</h6>
                                    <p className="property-type-three-item__desc font-18">Real estate is a lucrative ind involves the buying selling and reproperties. It encompa </p>
                                    <a href="property.html" className="simple-btn text-heading fw-semibold">More About
                                        <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 col-xs-6">
                            <div className="property-type-three-item d-flex align-items-start">
                                <span className="property-type-three-item__icon flex-shrink-0">
                                    <img src="assets/images/icons/ppty-type-icon1.svg" alt="" />
                                </span>
                                <div className="property-type-three-item__content">
                                    <h6 className="property-type-three-item__title">Prestige Management</h6>
                                    <p className="property-type-three-item__desc font-18">Real estate is a lucrative ind involves the buying selling and reproperties. It encompa </p>
                                    <a href="property.html" className="simple-btn text-heading fw-semibold">More About
                                        <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 col-xs-6">
                            <div className="property-type-three-item d-flex align-items-start">
                                <span className="property-type-three-item__icon flex-shrink-0">
                                    <img src="assets/images/icons/ppty-type-icon1.svg" alt="" />
                                </span>
                                <div className="property-type-three-item__content">
                                    <h6 className="property-type-three-item__title">Prestige Management</h6>
                                    <p className="property-type-three-item__desc font-18">Real estate is a lucrative ind involves the buying selling and reproperties. It encompa </p>
                                    <a href="property.html" className="simple-btn text-heading fw-semibold">More About
                                        <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 col-xs-6">
                            <div className="property-type-three-item d-flex align-items-start">
                                <span className="property-type-three-item__icon flex-shrink-0">
                                    <img src="assets/images/icons/ppty-type-icon1.svg" alt="" />
                                </span>
                                <div className="property-type-three-item__content">
                                    <h6 className="property-type-three-item__title">Prestige Management</h6>
                                    <p className="property-type-three-item__desc font-18">Real estate is a lucrative ind involves the buying selling and reproperties. It encompa </p>
                                    <a href="property.html" className="simple-btn text-heading fw-semibold">More About
                                        <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 col-xs-6">
                            <div className="property-type-three-item d-flex align-items-start">
                                <span className="property-type-three-item__icon flex-shrink-0">
                                    <img src="assets/images/icons/ppty-type-icon1.svg" alt="" />
                                </span>
                                <div className="property-type-three-item__content">
                                    <h6 className="property-type-three-item__title">Prestige Management</h6>
                                    <p className="property-type-three-item__desc font-18">Real estate is a lucrative ind involves the buying selling and reproperties. It encompa </p>
                                    <a href="property.html" className="simple-btn text-heading fw-semibold">More About
                                        <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-sm-6 col-xs-6">
                            <div className="property-type-three-item d-flex align-items-start">
                                <span className="property-type-three-item__icon flex-shrink-0">
                                    <img src="assets/images/icons/ppty-type-icon1.svg" alt="" />
                                </span>
                                <div className="property-type-three-item__content">
                                    <h6 className="property-type-three-item__title">Prestige Management</h6>
                                    <p className="property-type-three-item__desc font-18">Real estate is a lucrative ind involves the buying selling and reproperties. It encompa </p>
                                    <a href="property.html" className="simple-btn text-heading fw-semibold">More About
                                        <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Repeat the above div structure for other items */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Property
