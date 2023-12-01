import React from 'react'
import logo from '../assets/images/logo.png'
import searchicon from '../assets/svg/searchicon.svg'
const Mynavbar = () => {
    return (
        <div>
            <nav className='py-4'>
                <div className='container'>
                    <div className='flex spacebetween itemscenter'>
                        <ul>
                            <li>
                                <a href="#" className='flex itemscenter gap3 bs-black fs-lg fw-normal space-0-759 ff-worksan'>
                                    <img src={logo} alt="logo" />
                                    maître d
                                </a></li>
                        </ul>
                        <label for="iconbar">
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                        <input type="checkbox" id="iconbar" hidden />
                        <ul className='flex  itemscenter gap5 menubar'>
                            <li><a href="#" className='bs-black ff-worksan fs-sm fw-normal'>Home</a></li>
                            <li><a href="#" className='bs-black ff-worksan fs-sm fw-normal'>Modules</a></li>
                            <li><a href="#" className='bs-black ff-worksan fs-sm fw-normal'>Pricing</a></li>
                            <li><a href="#" className='bs-black ff-worksan fs-sm fw-normal'>Features</a></li>
                            <li><a href="#" className='bs-black ff-worksan fs-sm fw-normal flex itemscenter gap30'>Contact Us
                                <img src={searchicon} alt="searchicon" />
                            </a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Mynavbar
