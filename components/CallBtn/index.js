import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../ContextProvider';

const CallBtn = () => {

    const [channelState, setChannelState] = useContext(GlobalContext)

    useEffect(() => {
        //     console.log('channelState do CallBtn');
        //     console.log(channelState);
    }, [channelState]);

    const call = (e) => {

        let channelCopy = JSON.parse(JSON.stringify(channelState));

        let foundChannelByNextFree = channelCopy.find(e => e.free)

        channelCopy.map(e => e.active = false)

        foundChannelByNextFree.number = document.querySelector("#phoneDisplay").value.trim()
        foundChannelByNextFree.active = true
        foundChannelByNextFree.free = false

        setChannelState(channelCopy)
    }

    return (
        <div id='callBtn' onClick={call} className='flex items-center justify-center w-16 h-16 bg-violet-800 rounded-full hover:bg-violet-700 hover:cursor-pointer'>
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="#FFF" strokeWidth="1" fill="#FFF" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
    )
}

export default CallBtn