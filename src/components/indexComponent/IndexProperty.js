import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ppt1 from "../../assets/images/icons/ppty-type-icon1.svg";
import './IndexProperty.css'

const IndexProperty = () => {
    const propertyTypes = [
        {
            icon: '../../assets/images/icons/ppty-type-icon1.svg',
            title: 'Prestige Management',
            description: 'Real estate is a lucrative industry that involves the buying selling and renting of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate.'
        },
        {
            icon: '../../assets/images/icons/ppty-type-icon1.svg',
            title: 'Prime Investments',
            description: 'Real estate is a lucrative industry that involves the buying selling and renting of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate.'
        },
        {
            icon: '../../assets/images/icons/ppty-type-icon1.svg',
            title: 'SmartHouse Agency',
            description: 'Real estate is a lucrative industry that involves the buying selling and renting of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate.'
        },
        {
            icon: '../../assets/images/icons/ppty-type-icon1.svg',
            title: 'Reliable Rentals',
            description: 'Real estate is a lucrative industry that involves the buying selling and renting of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate.'
        },
        {
            icon: '../../assets/images/icons/ppty-type-icon1.svg',
            title: 'Golden Key Properties',
            description: 'Real estate is a lucrative industry that involves the buying selling and renting of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate.'
        },
        {
            icon: '../../assets/images/icons/ppty-type-icon1.svg',
            title: 'Swift Home Sales',
            description: 'Real estate is a lucrative industry that involves the buying selling and renting of properties. It encompasses residential commercial and industrial properties Real estate agents play a crucial role in facilitating real estate.'
        }
    ];

    return (
        <div>
            <section className="property-type-three padding-t-120 padding-b-60">
                <div className="container container-two">
                    <div className="section-heading style-left">
                        <span className="section-heading__subtitle bg-white"> <span className="text-gradient fw-semibold">Property Type</span> </span>
                        <h2 className="section-heading__title">Investing in real estate made it lot easy</h2>
                    </div>
                    <div className="row gy-4">
                        {propertyTypes.map((property, index) => (
                            <div key={index} className="col-xl-4 col-sm-6 col-xs-6">
                                <div className="property-type-three-item d-flex align-items-start">
                                    <span className="property-type-three-item__icon flex-shrink-0">
                                        <img src={ppt1} alt="" />
                                    </span>
                                    <div className="property-type-three-item__content">
                                        <h6 className="property-type-three-item__title">{property.title}</h6>
                                        <p className="property-type-three-item__desc font-18" style={{color: "#888686"}}>{`${property.description.slice(0,35)}...`}</p>
                                        <a href="property.html" className="simple-btn text-heading fw-semibold" style={{color: "#181616"}}>More About
                                            <span className="icon-right"> <FontAwesomeIcon icon={faArrowRight} /> </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default IndexProperty
