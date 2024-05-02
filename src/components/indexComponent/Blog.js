import React from 'react'
import './Blog.css'
import blog from '../../assets/images/thumbs/blog-two-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
    return (
        <div>
            <section className="blog padding-y-120">
                <div className="container container-two">
                    <div className="section-heading">
                        <div className="section-heading__inner">
                            <span className="section-heading__subtitle bg-white">
                                <span className="text-gradient fw-semibold">Latest blog and news</span>
                            </span>
                            <h2 className="section-heading__title">Investing in estate made lot easy</h2>
                        </div>
                    </div>

                    <div className="row gy-4">
                        <div className="col-lg-4 col-sm-6">
                            <div className="blog-item">
                                <div className="blog-item__thumb">
                                    <a href="blog-details.html" className="blog-item__thumb-link">
                                        <img src={blog} className="cover-img" alt="" />
                                    </a>
                                    <span className="blog-item__date style-three font-18"> 23 <br /> DEC </span>
                                </div>
                                <div className="blog-item__content bg-white border-0">
                                    <ul className="text-list border-0 p-0 flx-align">
                                        <li className="text-list__item font-12">
                                            <span className="icon text-gradient"><FontAwesomeIcon icon={faUser} /></span>
                                            <a href="#" className="link">By admin</a>
                                        </li>
                                        <li className="text-list__item font-12">
                                            <span className="icon text-gradient"><FontAwesomeIcon icon={faComments} /></span>
                                            <a href="#" className="link">Comments (07)</a>
                                        </li>
                                    </ul>
                                    <h6 className="blog-item__title mb-4">
                                        <a href="blog-details.html" className="blog-item__title-link border-effect"> Your journey to home ownership starts here </a>
                                    </h6>
                                    <a href="blog-details.html" className="btn btn-outline-light">Read More
                                        <span className="icon-right icon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="blog-item">
                                <div className="blog-item__thumb">
                                    <a href="blog-details.html" className="blog-item__thumb-link">
                                        <img src={blog} className="cover-img" alt="" />
                                    </a>
                                    <span className="blog-item__date style-three font-18"> 23 <br /> DEC </span>
                                </div>
                                <div className="blog-item__content bg-white border-0">
                                    <ul className="text-list border-0 p-0 flx-align">
                                        <li className="text-list__item font-12">
                                            <span className="icon text-gradient"><FontAwesomeIcon icon={faUser} /></span>
                                            <a href="#" className="link">By admin</a>
                                        </li>
                                        <li className="text-list__item font-12">
                                            <span className="icon text-gradient"><FontAwesomeIcon icon={faComments} /></span>
                                            <a href="#" className="link">Comments (07)</a>
                                        </li>
                                    </ul>
                                    <h6 className="blog-item__title mb-4">
                                        <a href="blog-details.html" className="blog-item__title-link border-effect"> Your journey to home ownership starts here </a>
                                    </h6>
                                    <a href="blog-details.html" className="btn btn-outline-light">Read More
                                        <span className="icon-right icon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="blog-item">
                                <div className="blog-item__thumb">
                                    <a href="blog-details.html" className="blog-item__thumb-link">
                                        <img src={blog} className="cover-img" alt="" />
                                    </a>
                                    <span className="blog-item__date style-three font-18"> 23 <br /> DEC </span>
                                </div>
                                <div className="blog-item__content bg-white border-0">
                                    <ul className="text-list border-0 p-0 flx-align">
                                        <li className="text-list__item font-12">
                                            <span className="icon text-gradient"><FontAwesomeIcon icon={faUser} /></span>
                                            <a href="#" className="link">By admin</a>
                                        </li>
                                        <li className="text-list__item font-12">
                                            <span className="icon text-gradient"><FontAwesomeIcon icon={faComments} /></span>
                                            <a href="#" className="link">Comments (07)</a>
                                        </li>
                                    </ul>
                                    <h6 className="blog-item__title mb-4">
                                        <a href="blog-details.html" className="blog-item__title-link border-effect"> Your journey to home ownership starts here </a>
                                    </h6>
                                    <a href="blog-details.html" className="btn btn-outline-light">Read More
                                        <span className="icon-right icon">
                                            <FontAwesomeIcon icon={faArrowRight} />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Repeat similar code blocks for other blog items */}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
