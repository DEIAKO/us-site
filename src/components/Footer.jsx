import React from 'react'
import { useState } from 'react'

const Footer = () => {

    const [click, setClick] = useState(0)
    const clickhandler = () => {
        setClick(click + 1)
    }
    const clickhandler2 = () => {
        setClick(click - 1)
    }   

  return (
    <div className="position-relative">
        <div className="position-absolute mt-10 text-center ">
        <h1 className='text-2xl text font-bold '> Counter - {click} </h1>
        <div className='mt-6'>

            <button className='bg-blue-500 mx-4 px-5 hover:bg-blue-400'
            onClick={clickhandler}> + </button>

            <button className='bg-blue-500 mx-4 px-5 hover:bg-blue-400'
            onClick={clickhandler2}> - </button>

        </div>
        
        </div>
    </div>
  )
}

export default Footer