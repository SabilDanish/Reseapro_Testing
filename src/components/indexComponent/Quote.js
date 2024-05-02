import React from 'react'
import cusser from '../../assets/images/icons/customer-service.svg'
import './Quote.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Quote = () => {
    return (
        <div>
            <section className="message-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4 gy-sm-5">
                        <div className="col-lg-4">
                            <div className="message-two__content">
                                <div className="section-heading style-left mb-0">
                                    <span className="section-heading__subtitle bg-gray-100">
                                        <span className="text-gradient fw-semibold">Get a quote</span>
                                    </span>
                                    <h2 className="section-heading__title">They chose perfect the property</h2>
                                    <p className="section-heading__desc">Real estate is a lucrative ind involves the selling and
                                        a reproperties. It encompasses residential</p>
                                    <div className="contact-content__box">
                                        <div className=" d-flex align-items-center gap-3">
                                            <div className="contact-content__icon">
                                                <img src={cusser} alt="" />
                                            </div>
                                            <div className="contact-content__infos">
                                                <span className="contact-content__text">Need help?</span>
                                                <a href="#"
                                                    className="contact-content__contact font-20 fw-semibold text-heading" style={{color: "#181616", textDecoration: "none"}}>(307)
                                                    555-0133</a>
                                            </div>
                                        </div>
                                        <p className="section-heading__desc">Real estate is a lucrative ind involves the selling
                                            and a reproperties. It encompasses residential</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 ps-lg-4">
                            <div className="form-box max-w-unset">
                                <form action="#">
                                    <div className="row gy-4">
                                        <div className="col-sm-6 col-xs-6">
                                            <label htmlFor="name" className="form-label">Your Name</label>
                                            <div className="position-relative">
                                                <input type="text" id="name" className="common-input common-input--withIcon"
                                                    placeholder="Name" />
                                                <span className="input-icon"><i className="fas fa-user"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-xs-6">
                                            <label htmlFor="phone" className="form-label">Your Phone</label>
                                            <div className="position-relative">
                                                <input type="tel" id="phone" className="common-input common-input--withIcon"
                                                    placeholder="Your Phone" />
                                                <span className="input-icon"><i className="fas fa-phone"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-sm-12">
                                            <label htmlFor="email" className="form-label">Your Email</label>
                                            <div className="position-relative">
                                                <input type="email" id="email" className="common-input common-input--withIcon"
                                                    placeholder="Your Email" />
                                                <span className="input-icon"><i className="fas fa-paper-plane"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <label htmlFor="message" className="form-label">Your Message</label>
                                            <div className="position-relative">
                                                <textarea id="message" className="common-input common-input--withIcon"
                                                    placeholder="Write Message.."></textarea>
                                                <span className="input-icon"><i className="fas fa-map-marker-alt"></i></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-main w-100"> Send Message </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Quote
