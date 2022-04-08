import React from 'react'
import Display from '../Display'
import Dialpad from './../Dialpad/index';
import CallBtn from './../CallBtn/index';

const Phone = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <div className='flex flex-col items-center justify-around w-5/6 h-5/6'>
                <Display />
                <Dialpad />
                <CallBtn/>
            </div>
        </div>
    )
}

export default Phone