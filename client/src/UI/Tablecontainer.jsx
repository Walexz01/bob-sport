import React from 'react'
import { Link } from 'react-router-dom'

const Tablecontainer = ({className,table_name,path,more,children}) => {
  return (
    <div className={`table__container ${className}`}>
      {table_name &&
            <div className={`${className}--top table__container--top`}>
              <h2>{table_name}</h2>
              { more &&
                <Link to={`/${path}`}>{more}</Link>          

              }
            </div>
      }
        {children}
    </div>
  )
}

export default Tablecontainer