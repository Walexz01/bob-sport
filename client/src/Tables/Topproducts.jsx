import React from 'react'
import Topprobody from '../components/Topprobody'
import Tablecontainer from '../UI/Card/Tablecontainer'

const Topproducts = () => {
  return (
    <>
        <Tablecontainer className='top__products' table_name= 'Top Products' path='products'>
            <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Total purchase </th>
                    <th>Unit price </th>
                  </tr>
                </thead>
                    <Topprobody/>
            </table>
        </Tablecontainer>

        
    </>
  )
}

export default Topproducts