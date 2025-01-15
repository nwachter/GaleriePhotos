import React from 'react'
import notFound from '../assets/images/notFound.png'

const NotFound = () => {
    return (
        <div className='h-full p-6'>
            <img src={notFound} className='h-full w-full' />
        </div>
    )
}

export default NotFound