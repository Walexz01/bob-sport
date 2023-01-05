import React from 'react'
import _ from 'lodash'


const Pagination = ({setCurrentPage,pageSize,count,currentPage}) => {
          // this is used to calculate the total number of pages 
          const total_page = Math.ceil(count / pageSize)

          // this usesthe lodash function called range to create a list of array 1 to the total_page Number 
          const pag_No_arr = _.range(1, total_page + 1 )
          if (total_page === 1) return null;
  return (
       <div className="pag_container">
              <ul className="pagination">
                { pag_No_arr.map((no)=>{
                    return(
                        <li key={no} className={ currentPage === no ? 'active-pag page-item' : 'page-item' } onClick={e=> setCurrentPage(no)}>{no}</li>
                    )
                  })
                  
                }
                
              </ul>
        </div> 
  )
}

export default Pagination