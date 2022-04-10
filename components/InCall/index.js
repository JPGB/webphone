import React from 'react'
import ActiveCall from '../ActiveCall'
import CallsOnHold from '../CallsOnHold'
import InCallMenu from './../InCallMenu/index';


const InCall = ({ isVisible }) => {
    return (
        <div className={`${isVisible ? 'flex' : 'hidden'} flex-col items-center justify-between w-full h-5/6`}>

            <CallsOnHold />
            <ActiveCall />
            <InCallMenu />

        </div>
    )
}

export default InCall