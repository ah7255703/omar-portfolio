import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'


function Overlay({ image_url, toggle, expanded }) {
    return (
        <div className={`fixed animate-in animate-out fade-in-30 z-40 overflow-auto h-screen min-h-0 inset-0 bg-opacity-50 items-center bg-gray-700 justify-center ${!expanded ? 'hidden' : 'flex'}`}>
            <div className='flex items-center justify-center max-h-full '>
                    <button onClick={toggle} className='absolute left-3 top-3 hover:opacity-100 opacity-60 bg-black text-white rounded-full w-[50px] h-[50px] flex items-center justify-center'><AiOutlineClose size={30} /></button>
                <div className="max-w-[90%] max-h-full relative">
                    <img src={image_url} alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    )
}


export default Overlay