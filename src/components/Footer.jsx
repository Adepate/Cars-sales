import React from 'react'

const Footer = () => {
  return (
    <div className='mt-24  bg-gray-50'>
        <div className='grid grid-cols-4 px-8 py-12'>
            <div className=''>
                <h3 className='font-semibold mb-4'>Company</h3>
                <p className='mb-2'>About Us</p>
                <p className='mb-2'>Careers</p>
                <p className='mb-2'>Press</p>
            </div>
            <div>
                <h3 className='font-semibold mb-4'>Support</h3>
                <p className='mb-2'> Contact Us</p>
                <p className='mb-2'>FAQ</p>
                <p className='mb-2'>Help Center</p>
            </div>
            <div>
                <h3 className='font-semibold mb-4'>Legal</h3>
                <p className='mb-2'>Term of Service</p>
                <p className='mb-2'>Privacy Policy</p>
                <p className='mb-2'>Press</p>
            </div>
            <div>
                <h3 className='font-semibold'>Connect</h3>
            </div>
        </div>
        <div className='text-center'>
            <p>2024 Auto sale. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer