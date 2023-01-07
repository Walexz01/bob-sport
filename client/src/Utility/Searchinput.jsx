import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Searchinput = ({input,handleInput}) => {
  return (
    <>
        <div className="input__group">
            <BiSearch/>
            <input type="search" name='search' value={input} onChange={handleInput} placeholder='Search....' />
        </div>
    </>
  )
}

export default Searchinput