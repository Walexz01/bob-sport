import React from 'react'
import {GiCancel} from 'react-icons/gi'
import {BsBagCheckFill} from 'react-icons/bs'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import Progress from '../components/Progress'
import Card from '../UI/Card/Card'

const Storeinfo = () => {
  return (
    <>
        <Card className='sold__products_cards'>
              {/* this containthe title of the card */}
              <div className="card__title">
              <span><IoMdCheckmarkCircleOutline/></span>
              Sold products           
              </div>
              {/* this containthe details about the card */}

              <div className="card__details">

                <div className="card__detail">
                  <div className="card__details--title">Total</div>
                  <div className="card__details--value">120</div>
                </div>

                <div className="card__detail">
                  <div className="card__details--title">Cost</div>
                  <div className="card__details--value">#12000</div>
                </div>

              </div>
              <div className="circular__progress">
                <Progress percentage= '40'trailColor='#ddffe1' pathColor='#2c8029'/>
              </div>

            </Card>
          {/* ordered__products_cards */}
          
            <Card className='ordered__products_cards'>
              {/* this containthe title of the card */}
              <div className="card__title">
              <span><BsBagCheckFill/></span>
              Ordered Products          
              </div>
              {/* this containthe details about the card */}

              <div className="card__details">

                <div className="card__detail">
                  <div className="card__details--title">Total</div>
                  <div className="card__details--value">120</div>
                </div>

                <div className="card__detail">
                  <div className="card__details--title">Cost</div>
                  <div className="card__details--value">#12000</div>
                </div>

              </div>
              <div className="circular__progress">
              <Progress percentage= '60'trailColor='#dde2f0' pathColor='#2d28c4'/>
              </div>

            </Card>

          {/* ordered__products_cards */}
          
            <Card className='cancel_orders_cards'>
              {/* this containthe title of the card */}
              <div className="card__title">
              <span><GiCancel/></span>
              Canceled Orders         
              </div>
              {/* this containthe details about the card */}

              <div className="card__details">

                <div className="card__detail">
                  <div className="card__details--title">Total</div>
                  <div className="card__details--value">120</div>
                </div>

                <div className="card__detail">
                  <div className="card__details--title">Cost</div>
                  <div className="card__details--value">#12000</div>
                </div>

              </div>
              <div className="circular__progress">
              <Progress percentage= '10'trailColor='#fef2f1' pathColor='#d03b3b'/>
              </div>

            </Card>

    </>
  )
}

export default Storeinfo