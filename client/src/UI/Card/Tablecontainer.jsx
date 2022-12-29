import React from 'react'
import { Link } from 'react-router-dom'

const Tablecontainer = ({className,table_name,path,children}) => {
  return (
    <div className={`table__container ${className}`}>
            <div className={`${className}--top table__container--top`}>
              <h2>{table_name}</h2>
              <Link to={`/${path}`}>See More</Link>          
            </div>
        {children}
    </div>
  )
}

export default Tablecontainer