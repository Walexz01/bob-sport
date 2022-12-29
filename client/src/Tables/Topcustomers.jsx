import React from 'react'
import Topcusbody from '../components/Topcusbody'
import Tablecontainer from '../UI/Card/Tablecontainer'

const Topcustomers = () => {
  return (
    <>
        <Tablecontainer className='top__customers' table_name= 'Top Customers' path='customers'>
            <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Total Orders </th>
                    <th> </th>
                  </tr>
                </thead>
                    <Topcusbody/>
            </table>
        </Tablecontainer>

    </>
  )
}

export default Topcustomers