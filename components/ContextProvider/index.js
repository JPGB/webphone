import React, { createContext, useState, useEffect } from 'react'
import { Logger } from 'sip.js/lib/core';

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {

    useEffect(() => {
        window.addEventListener("message", (e) => {
            if (e.data?.event) {
                let { event, parameters } = e.data
                switch (event) {
                    case 'handleChannelState':
                        setChannelState(parameters)
                        break;

                    default:
                        break;
                }
            }
        });
    }, [])

    // useEffect(() => {
    //     const handler = event => {
    //         const data = event.data
    //         console.log("Hello World?", data)
    //     }

    //     window.addEventListener("message", handler)

    //     // clean up
    //     return () => window.removeEventListener("message", handler)
    // }, []) // empty array => run only once

    const [channelState, setChannelState] = useState([
        { active: true, free: true, line: "1", number: "9009", state: "setup", mute: false, hold: false },
        { active: false, free: true, line: "2", number: "9008", state: "setup", mute: false, hold: false },
        { active: false, free: true, line: "3", number: "9007", state: "setup", mute: false, hold: false }
    ])

    const [componentsVisibility, setComponentsVisibility] = useState({
        phone: true,
        inCall: false,
        CancelNewCall: false
    })

    const updateChannel = (channel) => {
        setChannelState(channel)
    }

    return (
        <GlobalContext.Provider
            value={[
                channelState, setChannelState,
                componentsVisibility, setComponentsVisibility
            ]}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default ContextProvider