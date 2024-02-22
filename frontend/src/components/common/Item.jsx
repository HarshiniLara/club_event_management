import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Item = ({name, Icon, link}) => {
    const isActive = useSelector(state=>state.nav.page) == link;
  return (
    <div>
        <Link to={link}>
        {isActive?(
        <div className='flex flex-row cursor-pointer  bg-yellow-300 text-[#4A096D] items-center rounded m-1 w-100 gap-3 p-2 '>
            <Icon className=' w-6 h-6' />
            <p>{name}</p>
        </div>)
        : 
        (<div className='flex flex-row cursor-pointer text-white hover:bg-white hover:text-[#4A096D] items-center rounded m-1 w-100 gap-3 p-2 '>
            <Icon className=' w-6 h-6' />
            <p>{name}</p>
        </div>)}
        </Link>
    </div>
  )
}

export default Item