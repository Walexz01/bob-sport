import React from 'react'
import Pagetop from '../../components/Pagetop'
import Salestable from '../../Tables/Salestable'
import "./sales.css"

const Sales = () => {
  return (
    <div className='sales__page__container'>
      <Pagetop title='All Sales' className='salees__page' />
      <Salestable/>

    </div>
  )
}

export default Sales