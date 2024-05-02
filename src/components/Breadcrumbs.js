import React from 'react'
import breadcrumbs from '../assets/images/thumbs/breadcrumb-img.png'
import './Breadcrumbs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumbs = ({title}) => {
  return (
    <div>
      <section className="breadcrumb padding-y-120">
      <img src={breadcrumbs} alt="" className="breadcrumb__img" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="breadcrumb__wrapper">
              <h2 className="breadcrumb__title">{title}</h2>
              <ul className="breadcrumb__list">
                <li className="breadcrumb__item">
                  <a href="index.html" className="breadcrumb__link">
                    <FontAwesomeIcon icon={faHome} /> Home
                  </a>
                </li>
                <li className="breadcrumb__item"><FontAwesomeIcon icon={faAngleRight} /></li>
                <li className="breadcrumb__item">
                  <span className="breadcrumb__item-text">{title}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Breadcrumbs
