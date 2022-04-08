import React from 'react'

const Display = () => {
    const goToTheEnd = (e) => {
        e.preventDefault();
        console.log(e.key);
        if (/(^[*#0-9])/.test(e.key)) document.querySelector("#phoneDisplay").value = document.querySelector("#phoneDisplay").value + e.key
        if(e.key == "Backspace") document.querySelector("#phoneDisplay").value = document.querySelector("#phoneDisplay").value.slice(0, -1);
        document.querySelector("#phoneDisplay").blur()
        document.querySelector("#phoneDisplay").focus()
    }

    return (
        <input onKeyDown={goToTheEnd} id="phoneDisplay" className='flex w-full px-3 py-2 text-5xl leading-tight text-center text-indigo-800 rounded outline-none appearance-none focus:outline-none focus:shadow-outline' ></input >
    )
}

export default Display