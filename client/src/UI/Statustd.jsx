import React from 'react'

const Statustd = ({status_name}) => {
  return (
    <>
        <td><small  className={`${status_name} == "pending"? 'pending'?${status_name}=="completed"? 'completed': 'cancel'`}>{status_name}</small></td>
    </>
  )
}

export default Statustd