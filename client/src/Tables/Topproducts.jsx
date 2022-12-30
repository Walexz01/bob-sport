import React from 'react'
import Topprobody from '../components/Topprobody'
import Tablecontainer from '../UI/Tablecontainer'

const Topproducts = () => {
  return (
    <>
        <Tablecontainer className='top__products' table_name= 'Top 10 Products' >
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