import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import Logo from "../assets/logo.png"
import { RxCross2 } from "react-icons/rx";
import { FaBars } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Header = () => {
    let [show, setShow] = useState(false);
    let handleShow = () => {
        setShow(!show)  
    }

    return (
        <>
            <div className="h-[80px] bg-[#F5F5F3]">
                <Container>
                    <Flex className="justify-between items-center h-[80px] px-3 lg:px-0">
                        <div className="w-1/4">
                            <img src={Logo} alt={Logo} />
                        </div>
                        <div className="w-3/4">
                            <ul className={`lg:flex justify-center gap-x-10 font-sans text-center text-[16px] items-center z-[50] absolute top-0 left-0 lg:static duration-700 ease-in-out ${show == true ? "bg-[#767676] top-[80px] w-full rounded" : "top-[80px] left-[-400px] w-full"}`}>
                                <li className='text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>
                                    <Link to="/">Home</Link>
                                </li>
                                <li className='text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>
                                    <Link to="/shop">Shop</Link>
                                </li>
                                <li className='text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>
                                    <Link to="/about">About</Link>
                                </li>
                                <li className='text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>
                                    <Link to="/contact">Contacts</Link>
                                </li>
                                <li className='text-[16px] lg:text-[#767676] text-white hover:text-[#262626]'>
                                    <Link to="/checkout">Checkout</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:hidden" onClick={handleShow}>
                            {show == true ? <RxCross2 /> : <FaBars />}
                        </div>
                    </Flex>
                </Container>
            </div>


        </>
    )
}

export default Header
