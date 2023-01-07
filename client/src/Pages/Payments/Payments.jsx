import React from 'react'
import Pagetop from '../../components/Pagetop'
import Paymenttable from '../../Tables/Paymenttable'
import "./payments.css"

const Payments = () => {

  return (
    <div className='payments__page__conatiner'>
      <Pagetop className='payments__page' title="Payments List"/>
       <Paymenttable/>
    </div>
  )
}

export default Payments