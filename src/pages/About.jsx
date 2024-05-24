import React from 'react'
import Container from "../components/Container"
import About1 from "../assets/about1.png"
import About2 from "../assets/about2.png"

const About = () => {
    return (
        <>
            <section className='lg:px-0 px-3'>
                <Container>
                    <div className="py-[50px]">
                        <h4 className='text-[49px] font-bold font-sans'>About</h4>
                        <h5 className='text-[12px] font-sans'>Home | About</h5>
                    </div>
                    <div className="flex justify-between">
                        <div className="w-[49%]">
                            <img src={About1} alt="about1" />
                        </div>
                        <div className="w-[49%]">
                            <img src={About2} alt="about2" />
                        </div>
                    </div>
                    <p className='lg:text-[33px] text-[20px] font-sans lg:py-[50px] py-5'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
                    <div className="lg:flex justify-between">
                        <div className="lg:w-[32%]">
                            <h5 className='text-[25px] font-sans lg:py-[20px] py-[5px] lg:pt-0 pt-2'>Our Vision</h5>
                            <p className='text-[16px] font-sans text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                        <div className="lg:w-[32%]">
                            <h5 className='text-[25px] font-sans lg:py-[20px] py-[5px] lg:pt-0 pt-4'>Our Vision</h5>
                            <p className='text-[16px] font-sans text-[#767676] lg:pb-[90px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                        </div>
                        <div className="lg:w-[32%]">
                            <h5 className='text-[25px] font-sans lg:py-[20px] py-[5px] lg:pt-0 pt-4'>Our Vision</h5>
                            <p className='text-[16px] font-sans text-[#767676] lg:pb-0 pb-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default About
