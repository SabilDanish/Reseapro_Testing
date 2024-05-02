import React from 'react'
import './IndexAbout.css'
import about from '../../assets/images/thumbs/about-three-img.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';


const IndexAbout = () => {
    return (
        <div>
            <section className="about-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="about-three-thumb">
                                <div className="about-three-thumb__inner">
                                    <img src={about} alt="" />
                                    <div className="project-content">
                                        <div className="project-content__inner">
                                            <h2 className="project-content__number">10k+</h2>
                                            <span className="project-content__text font-12">Complete project</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-heading style-left">
                                    <span className="section-heading__subtitle bg-gray-100" style={{ backgroundColor: '#f3f3f3' }}> <span className="text-gradient fw-semibold">About Us</span> </span>
                                    <h2 className="section-heading__title">Unlocking the door to your a the new home</h2>
                                    <p className="section-heading__desc font-18">Real estate is a lucrative industry that involves the buying selling and renting of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate</p>
                                </div>
                                <ul className="check-list style-two">
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><FontAwesomeIcon icon={faCheck} /></span>
                                        <span className="text fw-semibold">Dream Property Solutions</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><FontAwesomeIcon icon={faCheck} /></span>
                                        <span className="text fw-semibold"> Prestige Property Management</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><FontAwesomeIcon icon={faCheck} /></span>
                                        <span className="text fw-semibold">Secure Property Partners</span>
                                    </li>
                                    <li className="check-list__item d-flex align-items-center">
                                        <span className="icon"><FontAwesomeIcon icon={faCheck} /></span>
                                        <span className="text fw-semibold">Global Real Estate Investments</span>
                                    </li>
                                </ul>
                                <div className="about-button">
                                    <a href="#" className="btn btn-outline-main bg-white">Learn More <span className="icon-right"> <FontAwesomeIcon icon={faArrowRight} /> </span> </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndexAbout
