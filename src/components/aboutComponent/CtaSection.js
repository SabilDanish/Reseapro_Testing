import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './CtaSection.css'

const CtaSection = () => {
    return (
        <div>
            <section className="cta padding-b-120">
                <div className="container container-two">
                    <div className="cta-box flx-between gap-2">
                        <div className="cta-content">
                            <h2 className="cta-content__title">Subscribe To Our <span className="text-gradient">Newsletter</span> </h2>
                            <p className="cta-content__desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <form action="#" className="cta-content__form d-flex align-items-center gap-2">
                                <div className="position-relative w-100">
                                    <input type="text" className="common-input common-input--withLeftIcon w-100" placeholder="Enter Your Email Address" />
                                    <span className="input-icon input-icon--left text-gradient font-20 line-height-1">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                </div>
                                <button type="submit" className="btn btn-main text-uppercase flex-shrink-0"> Subscribe <span className="text">Now</span> </button>
                            </form>
                        </div>
                        <div className="cta-content__thumb d-xl-block d-none">
                            <img src="assets/images/thumbs/cta-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CtaSection
