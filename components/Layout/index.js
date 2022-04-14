import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../ContextProvider';

import Header from '../Header'
import Phone from './../Phone/index';
import InCall from './../InCall/index';

const Layout = () => {

    const [isNotOnCall, setIsNotOnCall] = useState(true)

    const [channelState, setChannelState, componentsVisibility, setComponentsVisibility] = useContext(GlobalContext)

    useEffect(() => {
        let componentsVisibility
        if (channelState.filter(e => !e.free).length < 1) {
            componentsVisibility = {
                phone: true,
                inCall: false
            }
        } else {
            componentsVisibility = {
                phone: false,
                inCall: true
            }
        }
        setComponentsVisibility(componentsVisibility)
    }, [channelState])

    return (
        <div className='border border-black border-solid w-full h-full'>
            <Header />
            <Phone isVisible={componentsVisibility.phone} />
            <InCall isVisible={componentsVisibility.inCall} />
        </div>
    )
}

export default Layout