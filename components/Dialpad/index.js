import React from 'react'

const Dialpad = () => {

    const dialPadClick = (e) => {
        // console.log(e.currentTarget.innerText.split('')[0]);
        document.querySelector("#phoneDisplay").value = document.querySelector("#phoneDisplay").value + e.currentTarget.innerText.split('')[0]
        document.querySelector("#phoneDisplay").focus()
    }

    return (
        <div className='grid w-full grid-cols-3 grid-rows-4 gap-4 pb-4 text-3xl text-indigo-800' id='mainDialPad'>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>1<span className='text-xs'></span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>2<span className='text-xs'>ABC</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>3<span className='text-xs'>DEF</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>4<span className='text-xs'>GHI</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>5<span className='text-xs'>JKL</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>6<span className='text-xs'>MNO</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>7<span className='text-xs'>PQRS</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>8<span className='text-xs'>TUV</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>9<span className='text-xs'>WXYZ</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>*<span className='text-xs'></span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>0<span className='text-xs'>+</span></div>
            <div className='flex flex-col items-center justify-center h-16 hover:bg-slate-100 hover:cursor-pointer' onClick={dialPadClick}>#<span className='text-xs'></span></div>
        </div>
    )
}

export default Dialpad