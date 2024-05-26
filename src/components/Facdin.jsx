import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import Container from '../components/Container';
import { RxCross2 } from "react-icons/rx";

const Facdin = () => {
    let [show, setShow] = useState(false)
    let [show1, setShow1] = useState(false)
    return (
        <>
            <Container>
                <div className="w-[50%] border-t-[1px] border-[#F0F0F0] mt-[50px]">
                    <div onClick={() => setShow(!show)} className="flex justify-between items-center">
                        <h4 className='text-[#262626] font-sans text-[16px] font-bold py-2'>FEATURES  & DETAILS</h4>
                        {show == true ? <RxCross2 /> : <FaPlus />}
                    </div>
                    {show && (
                        <p className='text-[#767676] font-sans text-[16px] pb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    )}
                </div>
                <div className="w-[50%] border-t-[1px] border-[#F0F0F0] pb-[50px]">
                    <div  onClick={() => setShow1(!show1)}  className="flex justify-between items-center">
                        <h4 className='text-[#262626] font-sans text-[16px] font-bold py-2'>SHIPPING & RETURNS</h4>
                        {show == true ? <RxCross2 /> : <FaPlus />}
                    </div>
                    {show1 && (
                        <p className='text-[#767676] font-sans text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    )}
                </div>
            </Container>
        </>
    )
}

export default Facdin
