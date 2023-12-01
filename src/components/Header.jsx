import React from 'react'
import ringheader from '../assets/images/ringhearder.png'
const Header = () => {
    return (
        <div className='relative'>
            <div className='container pt-md-120 pt-50'>
                <h1 className='bs-black fs-3xl ff-worksan ff-bolder space-1-274 max-729 mx-auto text-center'>Maitre D – Store Management for Barbers</h1>
                <button className='submitbtn bs-white ff-worksan fs-md fw-bold text-center mx-auto flex justify-center mt-59'>Submit</button>
            </div>
            <img src={ringheader} alt="ringheader" className='ringheader' />
        </div>
    )
}

export default Header