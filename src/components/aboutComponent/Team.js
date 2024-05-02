import React from 'react'
import team from '../../assets/images/thumbs/team1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Team.css'

const Team = () => {
    return (
        <div>
            <section className="team padding-y-60">
                <div className="container container-two">
                    <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
                        <div className="section-heading__inner">
                            <span className="section-heading__subtitle"><span className="text-gradient fw-semibold">OuR Professionals</span></span>
                            <h2 className="section-heading__title">Investment and Growth through Real Estate</h2>
                        </div>
                        <a href="#" className="btn btn-main">Learn More <span className="icon-right"><FontAwesomeIcon icon={faPlus} /></span></a>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-4 col-sm-6 col-xs-6">
                            <div className="team-item">
                                <div className="team-item__thumb">
                                    <img src={team} alt="" className="cover-img" />
                                </div>
                                <div className="team-item__content flx-between flex-nowrap">
                                    <div>
                                        <h6 className="team-item__name mb-1 text-white">Annette Black</h6>
                                        <span className="team-item__designation font-12 text-white fw-light">President of Sales</span>
                                    </div>
                                    <div className="social-share">
                                        <button type="button" className="social-share__button"><FontAwesomeIcon icon={faShareAlt} /></button>
                                        <ul className="social-share-list">
                                            <li className="social-share-list__item">
                                                <a href="https://www.facebook.com" className="social-share-list__link"><FontAwesomeIcon icon={faFacebookF} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.twitter.com" className="social-share-list__link"> <FontAwesomeIcon icon={faTwitter} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.linkedin.com" className="social-share-list__link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.pinterest.com" className="social-share-list__link"><FontAwesomeIcon icon={faInstagram} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-xs-6">
                            <div className="team-item">
                                <div className="team-item__thumb">
                                    <img src={team} alt="" className="cover-img" />
                                </div>
                                <div className="team-item__content flx-between flex-nowrap">
                                    <div>
                                        <h6 className="team-item__name mb-1 text-white">Annette Black</h6>
                                        <span className="team-item__designation font-12 text-white fw-light">President of Sales</span>
                                    </div>
                                    <div className="social-share">
                                        <button type="button" className="social-share__button"><FontAwesomeIcon icon={faShareAlt} /></button>
                                        <ul className="social-share-list">
                                            <li className="social-share-list__item">
                                                <a href="https://www.facebook.com" className="social-share-list__link"><FontAwesomeIcon icon={faFacebookF} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.twitter.com" className="social-share-list__link"> <FontAwesomeIcon icon={faTwitter} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.linkedin.com" className="social-share-list__link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.pinterest.com" className="social-share-list__link"><FontAwesomeIcon icon={faInstagram} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-xs-6">
                            <div className="team-item">
                                <div className="team-item__thumb">
                                    <img src={team} alt="" className="cover-img" />
                                </div>
                                <div className="team-item__content flx-between flex-nowrap">
                                    <div>
                                        <h6 className="team-item__name mb-1 text-white">Annette Black</h6>
                                        <span className="team-item__designation font-12 text-white fw-light">President of Sales</span>
                                    </div>
                                    <div className="social-share">
                                        <button type="button" className="social-share__button"><FontAwesomeIcon icon={faShareAlt} /></button>
                                        <ul className="social-share-list">
                                            <li className="social-share-list__item">
                                                <a href="https://www.facebook.com" className="social-share-list__link"><FontAwesomeIcon icon={faFacebookF} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.twitter.com" className="social-share-list__link"> <FontAwesomeIcon icon={faTwitter} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.linkedin.com" className="social-share-list__link"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                            </li>
                                            <li className="social-share-list__item">
                                                <a href="https://www.pinterest.com" className="social-share-list__link"><FontAwesomeIcon icon={faInstagram} /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Repeat the above div structure for other team members */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
