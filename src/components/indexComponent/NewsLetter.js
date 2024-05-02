import React from 'react'
import newsletterBackground from '../../assets/images/thumbs/newsletter-bg.png';

const NewsLetter = () => {
    return (
        <div>
            <section className="newsletter bg-white">
                <div className="container container-two">
                    <div className="newsletter-content text-center background-img" style={{ backgroundImage: `url(${newsletterBackground})`, height: "20rem", borderRadius: "1rem" }}>
                        <h2 className="newsletter-content__title text-white">Subscribe To Our Newsletter</h2>
                        <p className="newsletter-content__desc text-white fw-light font-18">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                        <form action="#" className="newsletter-content__form d-flex align-items-center gap-2">
                            <div className="position-relative w-100">
                                <input type="text" className="common-input common-input--withLeftIcon w-100" placeholder="Enter Your Email Address" />
                                <span className="input-icon input-icon--left text-white font-20 line-height-1"><i className="far fa-envelope"></i></span>
                            </div>
                            <button type="submit" className="btn btn-main text-uppercase flex-shrink-0">Subscribe <span className="text">Now</span></button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default NewsLetter
