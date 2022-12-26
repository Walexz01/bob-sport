import React from 'react'
import Progress from '../components/Progress'
import Card from '../UI/Card/Card'


const Storeinfocard = ({className,icon,title,total,cost,percentage,trailColor,pathColor}) => {
  return (
    <>
        <Card className={className}>
                {/* this containthe title of the card */}
                <div className="card__title">
                <span>{icon}</span>
                {title}          
                </div>
                {/* this containthe details about the card */}

                <div className="card__details">

                    <div className="card__detail">
                    <div className="card__details--title">Total</div>
                    <div className="card__details--value">{total}</div>
                    </div>

                    <div className="card__detail">
                    <div className="card__details--title">Cost</div>
                    <div className="card__details--value">{cost}</div>
                    </div>

                </div>
                <div className="circular__progress">
                    <Progress percentage= {percentage} trailColor={trailColor} pathColor={pathColor}/>
                </div>

        </Card>
        
    </>
  )
}

export default Storeinfocard