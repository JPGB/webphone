import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
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