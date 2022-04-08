import React from 'react'

// import { Web } from 'sip.js'

const CallBtn = () => {

    const useSipJs = () => {
        // console.log(Web);
    }

    return (
        <div className='flex items-center justify-center w-16 h-16 bg-indigo-800 rounded-full hover:bg-indigo-700 hover:cursor-pointer' onClick={useSipJs}>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FFF" strokeWidth="1" fill="#FFF" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
    )
}

export default CallBtn