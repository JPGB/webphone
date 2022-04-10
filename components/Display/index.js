import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../ContextProvider';

const Display = () => {
    const [channelState] = useContext(GlobalContext)

    useEffect(() => {
        // console.log('channelState do Diplay');
        // console.log(channelState);
    });

    const goToTheEnd = (e) => {
        e.preventDefault();
        if (/(^[*#0-9])/.test(e.key)) document.querySelector("#phoneDisplay").value = document.querySelector("#phoneDisplay").value + e.key
        if (e.key == "Backspace") document.querySelector("#phoneDisplay").value = document.querySelector("#phoneDisplay").value.slice(0, -1);
        document.querySelector("#phoneDisplay").blur()
        document.querySelector("#phoneDisplay").focus()
    }

    return (
        <input onKeyDown={goToTheEnd} id="phoneDisplay" className='flex w-full px-3 py-2 text-5xl leading-tight text-center text-violet-800 rounded outline-none appearance-none focus:outline-none focus:shadow-outline' ></input >
    )
}

export default Display