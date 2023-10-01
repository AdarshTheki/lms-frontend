import React from 'react'

const Footer = () => {

  // create year data
  const newData = new Date();
  const year = newData.getFullYear();
  return (
    <div>
      <footer className='relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row justify-between items-center bg-gray-800 text-white font-semibold text-sm'>
        <section className='flex flex-col sm:flex-row items-center'>
          Copyright {year} | All right reserved
        </section>
        <div className='flex flex-col sm:flex-row items-center'>
        </div>
      </footer>
    </div>
  )
}

export default Footer
