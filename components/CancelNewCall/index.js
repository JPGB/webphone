import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../ContextProvider';

const CancelNewCall = () => {

    const [channelState, setChannelState, componentsVisibility, setComponentsVisibility] = useContext(GlobalContext)

    const cancelCall = (e) => {
        setComponentsVisibility({
            phone: false,
            inCall: true,
            CancelNewCall: false
        })
    }


    return (
        <div onClick={cancelCall} className={`${componentsVisibility.CancelNewCall ? 'flex' : 'hidden'} items-center justify-center w-full h-10 text-white bg-red-600 cursor-pointer hover:bg-red-500`}>
            Toque para voltar a chamada
        </div>
    )
}

export default CancelNewCall