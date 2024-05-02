import React from 'react'
import './LatestProperties.css'
import ppt7 from '../../assets/images/thumbs/property-7.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed } from '@fortawesome/free-solid-svg-icons';
import { faBath } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const LatestProperties = () => {
    return (
        <div className='latest-properties'>
            <section className="property-two bg-gray-100 padding-t-60 padding-b-120">
                <div className="container container-two">
                    <div className="section-heading">
                        <span className="section-heading__subtitle bg-white">
                            <span className="text-gradient fw-semibold">Latest Proparties</span>
                        </span>
                        <h2 className="section-heading__title">Real estate Investing in made it lot easy</h2>

                        <ul className="common-tab nav nav-pills justify-content-center mb-40" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link bg-transparent active" id="pills-houses-tab" data-bs-toggle="pill" data-bs-target="#pills-houses" type="button" role="tab" aria-controls="pills-houses" aria-selected="true">Houses</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link bg-transparent" id="pills-apartments-tab" data-bs-toggle="pill" data-bs-target="#pills-apartments" type="button" role="tab" aria-controls="pills-apartments" aria-selected="false">Apartments</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link bg-transparent" id="pills-bed-tab" data-bs-toggle="pill" data-bs-target="#pills-bed" type="button" role="tab" aria-controls="pills-bed" aria-selected="false">Bed</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link bg-transparent" id="pills-smartHouse-tab" data-bs-toggle="pill" data-bs-target="#pills-smartHouse" type="button" role="tab" aria-controls="pills-smartHouse" aria-selected="false">Smart House</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link bg-transparent" id="pills-swimmingPool-tab" data-bs-toggle="pill" data-bs-target="#pills-swimmingPool" type="button" role="tab" aria-controls="pills-swimmingPool" aria-selected="false">Swimming Pool</button>
                            </li>
                        </ul>

                        <div class="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-houses" role="tabpanel" aria-labelledby="pills-houses-tab" tabIndex="0">
                                <div className="row gy-4">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="property-item style-two">
                                            <div className="property-item__thumb">
                                                <a href="property-details.html" className="link">
                                                    <img src={ppt7} alt="" className="cover-img" />
                                                </a>
                                            </div>
                                            <div className="property-item__content">
                                                <h6 className="property-item__title">
                                                    <a href="property-details.html" className="link">Turning Dreams into Addresses Home State</a>
                                                </h6>
                                                <ul className="amenities-list flx-align">
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBed} /></span>
                                                        <span className="text">3 Beds</span>
                                                    </li>
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBath} /></span>
                                                        <span className="text">3 Baths</span>
                                                    </li>
                                                </ul>
                                                <h6 className="property-item__price">$456.00 <span className="day">/per day</span></h6>
                                                <p className="property-item__location d-flex gap-2">
                                                    <span className="icon text-gradient"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                                    66 Broklyant, New York America
                                                </p>
                                                <a href="property-details.html" className="simple-btn text-gradient fw-semibold font-14">Book Now <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="property-item style-two">
                                            <div className="property-item__thumb">
                                                <a href="property-details.html" className="link">
                                                    <img src={ppt7} alt="" className="cover-img" />
                                                </a>
                                            </div>
                                            <div className="property-item__content">
                                                <h6 className="property-item__title">
                                                    <a href="property-details.html" className="link">Turning Dreams into Addresses Home State</a>
                                                </h6>
                                                <ul className="amenities-list flx-align">
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBed} /></span>
                                                        <span className="text">3 Beds</span>
                                                    </li>
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBath} /></span>
                                                        <span className="text">3 Baths</span>
                                                    </li>
                                                </ul>
                                                <h6 className="property-item__price">$456.00 <span className="day">/per day</span></h6>
                                                <p className="property-item__location d-flex gap-2">
                                                    <span className="icon text-gradient"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                                    66 Broklyant, New York America
                                                </p>
                                                <a href="property-details.html" className="simple-btn text-gradient fw-semibold font-14">Book Now <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="property-item style-two">
                                            <div className="property-item__thumb">
                                                <a href="property-details.html" className="link">
                                                    <img src={ppt7} alt="" className="cover-img" />
                                                </a>
                                            </div>
                                            <div className="property-item__content">
                                                <h6 className="property-item__title">
                                                    <a href="property-details.html" className="link">Turning Dreams into Addresses Home State</a>
                                                </h6>
                                                <ul className="amenities-list flx-align">
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBed} /></span>
                                                        <span className="text">3 Beds</span>
                                                    </li>
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBath} /></span>
                                                        <span className="text">3 Baths</span>
                                                    </li>
                                                </ul>
                                                <h6 className="property-item__price">$456.00 <span className="day">/per day</span></h6>
                                                <p className="property-item__location d-flex gap-2">
                                                    <span className="icon text-gradient"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                                    66 Broklyant, New York America
                                                </p>
                                                <a href="property-details.html" className="simple-btn text-gradient fw-semibold font-14">Book Now <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="property-item style-two">
                                            <div className="property-item__thumb">
                                                <a href="property-details.html" className="link">
                                                    <img src={ppt7} alt="" className="cover-img" />
                                                </a>
                                            </div>
                                            <div className="property-item__content">
                                                <h6 className="property-item__title">
                                                    <a href="property-details.html" className="link">Turning Dreams into Addresses Home State</a>
                                                </h6>
                                                <ul className="amenities-list flx-align">
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBed} /></span>
                                                        <span className="text">3 Beds</span>
                                                    </li>
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBath} /></span>
                                                        <span className="text">3 Baths</span>
                                                    </li>
                                                </ul>
                                                <h6 className="property-item__price">$456.00 <span className="day">/per day</span></h6>
                                                <p className="property-item__location d-flex gap-2">
                                                    <span className="icon text-gradient"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                                    66 Broklyant, New York America
                                                </p>
                                                <a href="property-details.html" className="simple-btn text-gradient fw-semibold font-14">Book Now <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="property-item style-two">
                                            <div className="property-item__thumb">
                                                <a href="property-details.html" className="link">
                                                    <img src={ppt7} alt="" className="cover-img" />
                                                </a>
                                            </div>
                                            <div className="property-item__content">
                                                <h6 className="property-item__title">
                                                    <a href="property-details.html" className="link">Turning Dreams into Addresses Home State</a>
                                                </h6>
                                                <ul className="amenities-list flx-align">
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBed} /></span>
                                                        <span className="text">3 Beds</span>
                                                    </li>
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBath} /></span>
                                                        <span className="text">3 Baths</span>
                                                    </li>
                                                </ul>
                                                <h6 className="property-item__price">$456.00 <span className="day">/per day</span></h6>
                                                <p className="property-item__location d-flex gap-2">
                                                    <span className="icon text-gradient"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                                    66 Broklyant, New York America
                                                </p>
                                                <a href="property-details.html" className="simple-btn text-gradient fw-semibold font-14">Book Now <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="property-item style-two">
                                            <div className="property-item__thumb">
                                                <a href="property-details.html" className="link">
                                                    <img src={ppt7} alt="" className="cover-img" />
                                                </a>
                                            </div>
                                            <div className="property-item__content">
                                                <h6 className="property-item__title">
                                                    <a href="property-details.html" className="link">Turning Dreams into Addresses Home State</a>
                                                </h6>
                                                <ul className="amenities-list flx-align">
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBed} /></span>
                                                        <span className="text">3 Beds</span>
                                                    </li>
                                                    <li className="amenities-list__item flx-align">
                                                        <span className="icon text-gradient"><FontAwesomeIcon icon={faBath} /></span>
                                                        <span className="text">3 Baths</span>
                                                    </li>
                                                </ul>
                                                <h6 className="property-item__price">$456.00 <span className="day">/per day</span></h6>
                                                <p className="property-item__location d-flex gap-2">
                                                    <span className="icon text-gradient"><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                                                    66 Broklyant, New York America
                                                </p>
                                                <a href="property-details.html" className="simple-btn text-gradient fw-semibold font-14">Book Now <span className="icon-right"><FontAwesomeIcon icon={faArrowRight} /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Repeat similar structure for other properties */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LatestProperties
