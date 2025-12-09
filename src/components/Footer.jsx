import React from 'react'

const Footer = () => {
  return (
    <div className='mt-14 mx-8'>
        <div className='grid grid-cols-4 '>
            <div>
                <h3 className='font-medium'>Company</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press</p>
            </div>
            <div>
                <h3 className='font-medium'>Support</h3>
                <p>Contact Us</p>
                <p>FAQ</p>
                <p>Help Center</p>
            </div>
            <div>
                <h3 className='font-medium'>Legal</h3>
                <p>Term of Service</p>
                <p>Privacy Policy</p>
                <p>Press</p>
            </div>
            <div>
                <h3 className='font-medium'>Connect</h3>
            </div>
        </div>
        <div className='text-center'>
            <p>2024 Auto sale. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer