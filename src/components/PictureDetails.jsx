import React from 'react'
import { Image } from 'antd';

const PictureDetails = ({ picture }) => {
    return (
        <div className="text-white">
            <div className="flex justify-center items-center h-full w-full">
                <div className="flex justify-center  max-w-sm sm:max-w-md  items-center border-stroke/10 border-[5px] bg-gradient-to-t bg-opacity-[13%] from-glass-100/[7%] from-[100%] via-[0%] filter backdrop-blur-md via-glass-200/0 to-glass-300/[40%] to-[0%] rounded-md p-4 shadow-md relative overflow-hidden">
                    <h1 className='test-xl'>Test</h1>
                    <p>Details</p>
                </div>
            </div>
        </div>
    )
}

export default PictureDetails