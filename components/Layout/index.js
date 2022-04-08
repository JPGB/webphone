import React from 'react'
import Header from '../Header'
import Phone from './../Phone/index';

const Layout = () => {
    return (
        <div className='w-1/3 border border-black border-solid h-3/5'>
            <Header />
            <Phone />
        </div>
    )
}

export default Layout