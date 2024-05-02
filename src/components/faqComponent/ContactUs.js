import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <section className="contact-us">
                <div className="container container-two">
                    <div className="contact-form bg-gray-100 shadow-none">
                        <div className="section-heading">
                            <span className="section-heading__subtitle bg-white">
                                <span className="text-gradient fw-semibold">Contact us</span>
                            </span>
                            <h2 className="section-heading__title">Do you have any question?</h2>
                            <p className="section-heading__desc">For your car we will do everything advice, repairs and maintenance. We are the some preferred choice by many car owners because</p>
                        </div>
                        <form action="#" className="contact-form__form">
                            <div className="row gy-4">
                                <div className="col-sm-6 col-xs-6">
                                    <input type="text" className="common-input" placeholder="Your Name" />
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <input type="email" className="common-input" placeholder="Your E-mail" />
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <input type="tel" className="common-input" placeholder="Phone Number" />
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <input type="text" className="common-input" placeholder="Subject" />
                                </div>
                                <div className="col-12">
                                    <textarea className="common-input" placeholder="Your Message" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-main w-100">Submit Now</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
