import React from 'react'
import Flogo from '../assets/images/logofooter.png'
import ellipeleft from '../assets/images/ellipeleft.png'
const Footer = () => {
    return (
        <div className='bg-footer relative overflow-hidden mt-md-147 mt-30'>
            <div className="container">
                <img src={Flogo} alt="logo" className='pt-82 flex justify-center mx-auto' />
                <p className='bs-white ff-worksan fs-xsm fw-normal max-375 text-center mx-auto pt-15'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                <div className='flex itemscenter gap-51 mx-auto justify-center pt-30'>
                    <a href="#" className='bs-white fw-semibold  fs-xsm lh-21 ff-worksan'>Navigation</a>
                    <a href="#" className='bs-white fw-semibold  fs-xsm lh-21 ff-worksan'>Company</a>
                    <a href="#" className='bs-white fw-semibold  fs-xsm lh-21 ff-worksan'>Contact</a>
                </div>
            </div>
            <p className='bs-grey ff-worksan fs-xs  fw-normal lh-18 text-center copyright'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
            <img src={ellipeleft} alt="ellipesleft" className='ellipesleft' />
            <div className='dotupper-1-left'></div>
            <div className='dotupper-2-left'></div>
            <div className='dotupper-3-left'></div>
            <div className='dotupper-4-left'></div>
        </div>
    )
}

export default Footer