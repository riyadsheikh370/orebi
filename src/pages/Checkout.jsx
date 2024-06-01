import React from 'react'
import Container from "../components/Container"
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <>
            <section>
                <Container>
                    <div className="py-[50px]">
                        <h4 className='text-[49px] font-bold font-sans'>Checkout</h4>
                        <h5 className='text-[12px] font-sans'><Link to="/">Home</Link> | Checkout</h5>
                    </div>
                    <h5 className='text-[16px] font-sans text-[#767676] pb-[100px] pt-[40px]'>Have a coupon? <span className='text-black'>Click here to enter your code</span></h5>
                    <h4 className='text-[49px] font-bold font-sans'>Billing Details</h4>
                    <div className="flex pt-[45px] w-[100%] justify-between">
                        <div className="w-[49%]">
                            <h4 className='text-[16px] font-sans font-bold'>First Name *</h4>
                            <input type="text" placeholder='First Name' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="w-[49%]">
                            <h4 className='text-[16px] font-sans font-bold'>Last Name *</h4>
                            <input type="text" placeholder='Last Name' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                    </div>
                    <div className="">
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>Companye Name (optional)</h4>
                            <input type="text" placeholder='Company Name' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>Country *</h4>
                            <input type="text" placeholder='Please select' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>Street Address *</h4>
                            <input type="text" placeholder='House number and street name' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                            <input type="text" placeholder='Apartment, suite, unit etc. (optional)' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>Town/City *</h4>
                            <input type="text" placeholder='Town/City' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>County (optional)</h4>
                            <input type="text" placeholder='County' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>Post Code *</h4>
                            <input type="text" placeholder='Post Code' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>Phone *</h4>
                            <input type="text" placeholder='Phone' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>Email Address *</h4>
                            <input type="text" placeholder='Email' className=' border-b-[1px] border-[#F0F0F0] w-[100%] outline-none py-4' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[49px] font-bold font-sans py-[40px]'>Additional Information</h4>
                            <h4 className='text-[16px] font-sans font-bold pt-[20px]'>Other Notes (optional)</h4>
                            <input type="text" placeholder='Notes about your order, e.g. special notes for delivery.' className=' border-b-[1px] border-[#F0F0F0] w-[100%] pb-[100px] outline-none py-4' />
                        </div>
                        <a className="my-[70px] py-[14px] font-sans text-[14px] font-bold px-[47px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer duration-300 ease-in-out">
                            Proceed to Bank</a>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Checkout
