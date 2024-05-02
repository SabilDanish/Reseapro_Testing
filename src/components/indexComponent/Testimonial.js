import React from 'react'
import './Testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import user from '../../assets/images/thumbs/user-img1.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <section className="testimonials-three padding-y-120">
                <div className="container container-two">
                    <div className="testimonials-three__inner position-relative">
                        <div className="row align-items-center gy-4">
                            <div className="col-lg-5">
                                <div className="testimonials-three__box">
                                    <div className="section-heading style-left mb-0">
                                        <span className="section-heading__subtitle bg-white">
                                            <span className="text-gradient fw-semibold">clients testimonial</span>
                                        </span>
                                        <h2 className="section-heading__title">Your satisfaction is our top a the priority</h2>
                                        <p className="section-heading__desc text-heading">Real estate is a lucrative ind involves the buying selling and reproperties. It Real estate is a lucrative ind involves. Real estate is a lucrative</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="testimonials-three__wrapper">
                                <Slider {...settings}>
                                    <div className="testimonial-item style-two">
                                        <div className="testimonial-item__top flx-between gap-2">
                                            <div className="testimonial-item__info flx-align">
                                                <div className="testimonial-item__thumb">
                                                    <img src={user} alt="" style={{borderRadius: "50%"}} />
                                                </div>
                                                <div>
                                                    <h6 className="testimonial-item__name">Robert Fox</h6>
                                                    <span className="testimonial-item__designation">Prime Investments</span>
                                                </div>
                                            </div>
                                            <ul className="star-rating flx-align justify-content-end">
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item unabled"><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </div>
                                        <p className="testimonial-item__desc mb-0">Real estate is a lucrativ ind involves the buying selling and Real estate a is a lucrative indinvolves buyingrep pertiesen cos residentialreproperties. It encompasses residential Real estate a is a lucrative</p>
                                    </div>
                                    <div className="testimonial-item style-two">
                                        <div className="testimonial-item__top flx-between gap-2">
                                            <div className="testimonial-item__info flx-align">
                                                <div className="testimonial-item__thumb">
                                                    <img src={user} alt="" style={{borderRadius: "50%"}} />
                                                </div>
                                                <div>
                                                    <h6 className="testimonial-item__name">Robert Fox</h6>
                                                    <span className="testimonial-item__designation">Prime Investments</span>
                                                </div>
                                            </div>
                                            <ul className="star-rating flx-align justify-content-end">
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item unabled"><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </div>
                                        <p className="testimonial-item__desc mb-0">Real estate is a lucrativ ind involves the buying selling and Real estate a is a lucrative indinvolves buyingrep pertiesen cos residentialreproperties. It encompasses residential Real estate a is a lucrative</p>
                                    </div>
                                    <div className="testimonial-item style-two">
                                        <div className="testimonial-item__top flx-between gap-2">
                                            <div className="testimonial-item__info flx-align">
                                                <div className="testimonial-item__thumb">
                                                    <img src={user} alt="" style={{borderRadius: "50%"}} />
                                                </div>
                                                <div>
                                                    <h6 className="testimonial-item__name">Robert Fox</h6>
                                                    <span className="testimonial-item__designation">Prime Investments</span>
                                                </div>
                                            </div>
                                            <ul className="star-rating flx-align justify-content-end">
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item"><FontAwesomeIcon icon={faStar} /></li>
                                                <li className="star-rating__item unabled"><FontAwesomeIcon icon={faStar} /></li>
                                            </ul>
                                        </div>
                                        <p className="testimonial-item__desc mb-0">Real estate is a lucrativ ind involves the buying selling and Real estate a is a lucrative indinvolves buyingrep pertiesen cos residentialreproperties. It encompasses residential Real estate a is a lucrative</p>
                                    </div>
                                    </Slider>
                                    {/* Repeat this block for each testimonial item */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial
