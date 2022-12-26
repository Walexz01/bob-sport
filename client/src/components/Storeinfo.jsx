import React from 'react'
import Storeinfocard from './Storeinfocard'
import {GiCancel} from 'react-icons/gi'
import {BsBagCheckFill} from 'react-icons/bs'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'


const Storeinfo = () => {
  return (
    <>
    {/* sold__products_cards */}
      <Storeinfocard className = 'sold__products_cards' icon ={<IoMdCheckmarkCircleOutline/> }title = 'Sold products' total = '120' cost = '#12000'percentage='40' trailColor='#ddffe1' pathColor='#2c8029' />
      {/* sold__products_cards */}
      <Storeinfocard className = 'sold__products_cards' icon ={<BsBagCheckFill/> }title = ' Ordered Products' total = '120' cost = '#12000'percentage='60' trailColor='#dde2f0' pathColor='#2d28c4' />
      {/* cancel_orders_cards */}
      <Storeinfocard className = 'cancel_orders_cards' icon ={<GiCancel/> }title = 'Canceled Orders' total = '120' cost = '#12000'percentage='10' trailColor='#fef2f1' pathColor='#d03b3b' />

    </>
  )
}

export default Storeinfo