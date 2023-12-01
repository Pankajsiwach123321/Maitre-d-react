import React from 'react'
import manphone from '../assets/images/manphone.png'

const Sectionone = () => {
    return (
        <div>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-lg-6 col-12 pt-4 pt-lg-0 flex justify-center">
                        <img src={manphone} alt="manphone" className='w-100 max-443' />
                    </div>
                    <div className="col-lg-6 col-12 pt-4 pt-lg-0 flex justify-center flex-col">
                        <div>
                            <p className='gradaint-text-1 fs-sm ff-worksan aboutline relative max-auto fw-semibold'>About Us</p>
                        </div>
                        <p className='bs-black fs-xl fw-bold space-1-274 ff-worksan pt-3'>What is <span className='gradaint-text-1'>Maître D?</span></p>
                        <p className='bs-grey2 ff-worksan fs-sm fw-normal lh-26 pt-3'>Maître D is a full service solution, designed specifically for salons and barbershops. Our approach is modular, which means you only pay for the functionality that you need. Each module is completely integrated into the solution, so your entire business always remains syncronized. Maître D allows you to see everything within your business, from one location. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sectionone