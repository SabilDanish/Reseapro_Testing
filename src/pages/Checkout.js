import React from 'react'
import CheckoutPage from '../components/checkoutComponent/CheckoutPage'
import CtaAction from '../components/checkoutComponent/CtaAction'
import Breadcrumbs from '../components/Breadcrumbs'

const Checkout = () => {
  return (
    <div>
      <Breadcrumbs title={"Checkout"}/>
      <CheckoutPage />
      <CtaAction />
    </div>
  )
}

export default Checkout
