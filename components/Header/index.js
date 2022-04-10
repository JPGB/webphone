import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-4 border-b border-solid border-violet-200'>
      <div className='flex justify-start w-1/3'>Logo</div>
      <div className='flex justify-center w-1/3'>Ramal</div>
      <div className='flex justify-end w-1/3'>Compactar</div>
    </div>
  )
}

export default Header