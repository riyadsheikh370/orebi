import React from 'react'
import Container from "../components/Container"
import Mapp from "../assets/map.png"

const Contact = () => {
    return (
        <>
            <section className='lg:px-0 px-3'>
                <Container>
                    <div className="py-[50px]">
                        <h4 className='text-[49px] font-bold font-sans'>Contacts</h4>
                        <h5 className='text-[12px] font-sans'>Home | Contacts</h5>
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
                        <div className="py-[10px] w-[170px] bg-black text-white text-center mt-[50px]">
                            <h4 className='text-[14px] font-sans font-bold'>Post</h4>
                        </div>
                    </div>
                    <div className="lg:py-[90px] py-[30px]">
                        <img src={Mapp} alt={Mapp} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact
