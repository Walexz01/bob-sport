import React from 'react'
import Storeinfo from '../../components/Storeinfo'
import "./home.css"
import Recentorders from '../../Tables/Recentorders'
import Topcustomers from '../../Tables/Topcustomers'
import Topproducts from '../../Tables/Topproducts'


const Home = () => {
  return (
    <div className='home_page_container'>
      {/* this is the right side for the home page */}
      <div className="right">
        <div className="right__top__container">
          {/* store__info__cards */}
          <Storeinfo/> 
        </div>
          <div className="right__bottom__container">
            {/* recent__orders starts */}
              <Recentorders/>
            {/* recent__orders ends */}
          </div>
      </div>

      {/* this is the left side for the home page */}
      <div className="left__side__container">
        {/* top__customers starts */}
        <Topcustomers/>
        {/* top__customers ends */}

        {/* top__products starts */}
        <Topproducts/>
        {/* top__products ends */}
      </div>

    </div>
  )
}

export default Home