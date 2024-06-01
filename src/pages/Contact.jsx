import React from 'react'
import Container from "../components/Container"
import Mapp from "../assets/map.png"
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <section className='lg:px-0 px-3'>
                <Container>
                    <div className="py-[50px]">
                        <h4 className='text-[49px] font-bold font-sans'>Contacts</h4>
                        <h5 className='text-[12px] font-sans'><Link to="/">Home</Link> | Contacts</h5>
                    </div>
                    <div className="">
                        <h3 className='text-[39px] font-sans font-bold py-5'>Fill up a Form</h3>
                        <div className="">
                            <h4 className='text-[16px] font-sans font-bold'>Name</h4>
                            <input type="text" placeholder='Your name here' className=' border-b-[1px] border-[gray] lg:w-[50%] w-[100%] outline-none py-2' />
                        </div>
                        <div className="py-[25px]">
                            <h4 className='text-[16px] font-sans font-bold'>Email</h4>
                            <input type="text" placeholder='Your email here' className=' border-b-[1px] border-[gray] lg:w-[50%] w-[100%] outline-none py-2' />
                        </div>
                        <div className="">
                            <h4 className='text-[16px] font-sans font-bold'>Message</h4>
                            <input type="text" placeholder='Your message here' className=' border-b-[1px] border-[gray] lg:w-[50%] w-[100%] outline-none pb-[50px]' />
                        </div>
                        <a className="mb-[70px] py-[9px] font-sans text-[14px] font-bold px-[47px] border-2 border-[#262626] mt-[70px] inline-block hover:bg-[#262626] hover:text-white cursor-pointer duration-300 ease-in-out">
                            Post</a>
                    </div>
                    <div className="lg:py-[70px] py-[30px]">
                        <img src={Mapp} alt={Mapp} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact
