import React from 'react'
import { Link } from 'react-router-dom'

const Pagetop = ({className,title,link_name, path}) => {
  return (
    <div className={`${className} page__details`}>
        <div className={`${className}--title page__details--title`}>{title}</div>
        { link_name &&
          <Link className={`${className}--link page__details--link`} to={path}>{link_name}</Link>

        }
    </div>  
    )
}

export default Pagetop