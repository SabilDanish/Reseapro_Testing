import React from 'react'
import faq from '../../assets/images/thumbs/faq-two-img.png'

const FaqSection = () => {
    return (
        <div>
            <section className="faq-two padding-y-120">
                <div className="container container-two">
                    <div className="section-heading">
                        <span className="section-heading__subtitle bg-gray-100">
                            <span className="text-gradient fw-semibold">Ask question</span>
                        </span>
                        <h2 className="section-heading__title">Let us find the perfect best property for you</h2>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="common-accordion style-two accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Your satisfaction is our top priority?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{}}>
                                        <div className="accordion-body">
                                            <p className="accordion-body__desc font-18">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing at packages and web page editors now use Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Your satisfaction is our top priority?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{}}>
                                        <div className="accordion-body">
                                            <p className="accordion-body__desc font-18">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing at packages and web page editors now use Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Your satisfaction is our top priority?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{}}>
                                        <div className="accordion-body">
                                            <p className="accordion-body__desc font-18">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop publishing at packages and web page editors now use Lorem Ipsum</p>
                                        </div>
                                    </div>
                                </div>
                                {/* More accordion items go here */}
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-4 d-lg-block d-none">
                            <div className="faq-two-thumb">
                                <img src={faq} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FaqSection
