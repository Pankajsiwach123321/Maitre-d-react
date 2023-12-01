import React from 'react'
import laptopman from '../assets/images/laptopman.png'
const Sectionfive = () => {
    return (
        <div className='relative'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-6 col-12 pt-4 pt-lg-0">
                        <h2 className='gradaint-text-1 fs-sm ff-worksan max-auto aboutline relative  fw-semibold '>Contact US</h2>
                        <p className='bs-black fs-xl fw-bold space-1-274 ff-worksan pt-3'>Get in touch!</p>
                        <div className='flex itemscenter gap-30 pt-75'>
                            <input type="text" placeholder='Full Name ' id='name' className='name-area bs-grey2 ff-worksan fs-sm fw-normal' />
                            <input type="email" placeholder='Email Address' id='email' className='name-area bs-grey2 ff-worksan fs-sm fw-normal' />
                        </div>
                        <input type="text" placeholder='Company Name' className='mt-29 name-area bs-grey2 ff-worksan fs-sm fw-normal' />
                        <textarea name="#" id="#" cols="0" rows="3" placeholder='Message' className='mt-29 name-area bs-grey2 ff-worksan fs-sm fw-normal'></textarea>
                        <button className='submitbtn bs-white ff-worksan fs-md fw-bold inline text-center max-auto mt-35'>Submit</button>
                    </div>
                    <div className='col-lg-6 col-12 pt-4 pt-lg-0 flex justify-center'>
                        <img src={laptopman} alt="laptopman" className='w-100 max-618' />
                    </div>
                </div>
            </div>
            <div className='squarebox-2'></div>
        </div>
    )
}

export default Sectionfive