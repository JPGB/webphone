import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../ContextProvider';

const CallsOnHold = () => {

    const [callsOnHold, setCallsOnHold] = useState([])

    const [channelState, setChannelState] = useContext(GlobalContext)

    useEffect(() => {
        setCallsOnHold(channelState.filter(e => !e.free && !e.active))
    }, [channelState])

    const setToActiveCall = (e) => {
        const [id, number, line] = e.currentTarget.id.split('-');
        let channelCopy = JSON.parse(JSON.stringify(channelState));

        channelCopy.map(e => e.active = false)
        channelCopy.find(e => e.number == number).active = true

        setChannelState(channelCopy)
    }

    const hangUp = (e) => {
        const [id, number, line] = e.currentTarget.id.split('-');
        let channelCopy = JSON.parse(JSON.stringify(channelState));

        let foundChannelByNumber = channelCopy.find(e => e.number == number)

        foundChannelByNumber.active = false
        foundChannelByNumber.free = true

        setChannelState(channelCopy)

    }

    return (
        <div id='callOnHold' className='w-full'>

            {
                callsOnHold.map(e => (
                    <div key={`${e.number}-${e.line}`} id={`mainCallOnHold-${e.number}-${e.line}`} className='flex items-center justify-between w-full px-4 my-1 shadow bg-zinc-100'>
                        <div id={`leftCardOnHold-${e.number}-${e.line}`} className='flex flex-col w-1/2 h-10 text-sm'>
                            <span>{e.number}</span>
                            <span>Em espera</span>
                        </div>
                        <div id={`rightCardOnHold-${e.number}-${e.line}`} className='flex items-center justify-end w-1/2 h-10 gap-2'>
                            <svg id={`playIcon-${e.number}-${e.line}`} onClick={setToActiveCall} viewBox="0 0 24 24" width="24" height="24" stroke="#FFF" strokeWidth="1" fill="#000" strokeLinecap="round" strokeLinejoin="round" className="rounded-full cursor-pointer"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            <svg id={`hangUpIcon-${e.number}-${e.line}`} onClick={hangUp} style={{ transform: "rotate(135deg)" }} viewBox="0 0 24 24" width="24" height="24" stroke="#FFF" strokeWidth="1" fill="#000" strokeLinecap="round" strokeLinejoin="round" className="rounded-full cursor-pointer"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default CallsOnHold