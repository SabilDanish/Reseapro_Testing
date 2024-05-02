import React, { useState } from 'react'
import dotted from "../../assets/images/thumbs/dotted-bg.png"
import banner from "../../assets/images/thumbs/banner-shape.png"
import "./IndexBanner.css"

const IndexBanner = () => {
    const [rent, setRent] = useState(true)
    const [buy, setBuy] = useState(false)
    const [sell, setSell] = useState(false)

    const actionHandler = (param) => {
        console.log({param})
        if(param === "Rent"){
            setRent(true)
            setBuy(false)
            setSell(false)
        }if(param === "Buy"){
            setRent(false)
            setBuy(true)
            setSell(false)
        }if(param === "Sell"){
            setRent(false)
            setBuy(false)
            setSell(true)
        }
    }

    console.log({rent,buy,sell})
    return (
        <div>
            <section className="banner-three">
                <img src={dotted} alt="" className="banner-three__dotted" style={{width: "100%", height: "100%"}} />
                <img src={banner} alt="" className="banner-three__shape" />
                <div className="container container-two">
                    <div className="banner-three__inner position-relative padding-y-120">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-inner position-relative">
                                    <div className="banner-content">
                                        <span className="banner-content__subtitle text-uppercase font-14 text-gradient">FinTech Fusion</span>
                                        <h1 className="banner-content__title">Your trusted real estate{" "}
                                            <span className="position-relative d-inline">
                                                partner
                                                <img src="assets/images/shapes/curve-shape.png" alt="" className="curve-shape" />
                                            </span>
                                        </h1>
                                        <p className="banner-content__desc font-18 mb-4 mb-lg-5">Unlock the Power of Real Estate Making Your Real Estate Dreams a Reality Real Estate here Unlock the Power of Real Estate</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-0 order-1">
                                <div className="banner-thumb">
                                    <img src="assets/images/thumbs/banner-three.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <ul className="common-tab nav nav-pills" id="pills-tabThree" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${rent ? 'active' : ''}`} onClick={() => actionHandler("Rent")}>Rent</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${buy ? 'active' : ''}`} onClick={() => actionHandler("Buy")}>Buy</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${sell ? 'active' : ''}`} onClick={() => actionHandler("Sell")}>Sell</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabThreeContent">
                                    {rent && <div className="tab-pane fade show active">
                                        <div className="filter">
                                            <form action="#">
                                                <div className="row gy-sm-4 gy-3">
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <input type="text" className="common-input" placeholder="Enter Keyword" />
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <div className="select-has-icon icon-black">
                                                            <select className="select common-input">
                                                                <option value="1" disabled>Property Type</option>
                                                                <option value="1">Apartment</option>
                                                                <option value="1">House</option>
                                                                <option value="1">Land</option>
                                                                <option value="1">Single Family</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <div className="select-has-icon icon-black">
                                                            <select className="select common-input">
                                                                <option value="1" disabled>Location</option>
                                                                <option value="1">Bangladesh</option>
                                                                <option value="1">Japan</option>
                                                                <option value="1">Korea</option>
                                                                <option value="1">Singapore</option>
                                                                <option value="1">Germany</option>
                                                                <option value="1">Thailand</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <button type="submit" className="btn btn-main w-100 find-now-btn">Find Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>}
                                    {buy && <div className="tab-pane fade show active">
                                        <div className="filter">
                                            <form action="#">
                                                <div className="row gy-sm-4 gy-3">
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <input type="text" className="common-input" placeholder="Enter Keyword" />
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <div className="select-has-icon icon-black">
                                                            <select className="select common-input">
                                                                <option value="1" disabled>Property Type</option>
                                                                <option value="1">Apartment</option>
                                                                <option value="1">House</option>
                                                                <option value="1">Land</option>
                                                                <option value="1">Single Family</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <div className="select-has-icon icon-black">
                                                            <select className="select common-input">
                                                                <option value="1" disabled>Location</option>
                                                                <option value="1">Bangladesh</option>
                                                                <option value="1">Japan</option>
                                                                <option value="1">Korea</option>
                                                                <option value="1">Singapore</option>
                                                                <option value="1">Germany</option>
                                                                <option value="1">Thailand</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <button type="submit" className="btn btn-main w-100">Find Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>}
                                    {sell && <div className="tab-pane fade show active">
                                        <div className="filter">
                                            <form action="#">
                                                <div className="row gy-sm-4 gy-3">
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <input type="text" className="common-input" placeholder="Enter Keyword" />
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <div className="select-has-icon icon-black">
                                                            <select className="select common-input">
                                                                <option value="1" disabled>Property Type</option>
                                                                <option value="1">Apartment</option>
                                                                <option value="1">House</option>
                                                                <option value="1">Land</option>
                                                                <option value="1">Single Family</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <div className="select-has-icon icon-black">
                                                            <select className="select common-input">
                                                                <option value="1" disabled>Location</option>
                                                                <option value="1">Bangladesh</option>
                                                                <option value="1">Japan</option>
                                                                <option value="1">Korea</option>
                                                                <option value="1">Singapore</option>
                                                                <option value="1">Germany</option>
                                                                <option value="1">Thailand</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-sm-6 col-xs-6">
                                                        <button type="submit" className="btn btn-main w-100">Find Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndexBanner
