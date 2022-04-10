import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../ContextProvider';

const InCallMenu = () => {

    const [channelState, setChannelState, componentsVisibility, setComponentsVisibility] = useContext(GlobalContext)
    const [hasFreeChannel, sethasFreeChannel] = useState(false)

    const hangUp = (e) => {

        let channelCopy = JSON.parse(JSON.stringify(channelState));

        let foundChannelByNumber = channelCopy.find(e => e.active)

        foundChannelByNumber.active = false
        foundChannelByNumber.free = true

        setChannelState(channelCopy)

    }

    const newCall = (e) => {
        if (hasFreeChannel) {
            setComponentsVisibility({
                phone: true,
                inCall: false,
                CancelNewCall: true
            })
        }
    }

    useEffect(() => {
        if (channelState.find(e => e.free)) sethasFreeChannel(true)
        else sethasFreeChannel(false)
    }, [channelState])

    return (
        <div className='flex items-center justify-between w-3/4 gap-1 rounded h-14'>
            <div onClick={newCall} className={`${hasFreeChannel ? 'cursor-pointer hover:bg-zinc-50' : 'cursor-not-allowed'} flex items-center justify-center w-full h-full rounded shadow  `}>New call</div>
            <div onClick={hangUp} className='flex items-center justify-center w-full h-full rounded shadow cursor-pointer hover:bg-zinc-50'>Hangup</div>
        </div>
    )
}

export default InCallMenu