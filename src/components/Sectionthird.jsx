import React from 'react'
import custumerreview from '../assets/images/custumer-review.png'
import orangecoros from '../assets/images/orangecross.png'

const Sectionthird = () => {
    return (
        <div>
            <div className='container pb-90'>
                <h2 className='gradaint-text-1 fs-sm ff-worksan aboutline relative flex max-auto fw-semibold justify-center mx-auto'>Features</h2>
                <p className='bs-black fs-xl fw-bold space-1-274 ff-worksan pt-3 text-center'>Simple pricing for  <span className='gradaint-text-1'>everyone</span></p>
                <div className='slider-card mt-78 relative'>
                    <div className="row">
                        <div className="col-lg-6 col-12 pt-4 pt-lg-0 flex items-end justify-center justify-lg-start">
                            <img src={custumerreview} alt="custumerreviw" className='w-100 max-443' />
                        </div>
                        <div className="col-lg-6 col-12 pt-4 pt-lg-0 py-38">
                            <p className='bs-black fs-lg fw-bold lh-36 ff-worksan pt-2pc'>Manage Your <span className='gradaint-text-1'> Customer Queues</span></p>
                            <p className='bs-grey2 fs-sm fw-normal lh-24 ff-worksan max-484 pt-3'>The Maitre D queue management system is designed to allow your customers to sign up for walk-in appointments and select the services they want ahead of time. The queue will provide them with estimated wait times, costs and will allow them to even select their preferred stylist.</p>
                            <p className='bs-grey2 fs-sm fw-normal lh-24 ff-worksan max-484 pt-4'>As the queue gets bigger or smaller, its easy to monitor your operations and understand when wait periods are getting too long to service your customer base and to better resource your stores during busy periods. Beat the frustration of your customers ahead of time and help manage how they wait for your services</p>
                            <button className='submitbtn bs-white ff-worksan fs-md fw-bold text-center  mt-59'>Buy Now</button>
                        </div>
                    </div>
                    <img src={orangecoros} alt="orangecrss" className='orangecross2' />
                </div>
            </div>
        </div>
    )
}

export default Sectionthird