import React from 'react'
import Container from "../components/Container"
import About1 from "../assets/about1.png"
import About2 from "../assets/about2.png"

const About = () => {
    return (
        <>
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
                <div className="">
                    <p className='text-[33px] font-sans py-[50px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-[32%]">
                        <h5 className='text-[25px] font-sans py-[20px]'>Our Vision</h5>
                        <p className='text-[16px] font-sans text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div className="w-[32%]">
                        <h5 className='text-[25px] font-sans py-[20px]'>Our Vision</h5>
                        <p className='text-[16px] font-sans text-[#767676] pb-[90px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                    </div>
                    <div className="w-[32%]">
                        <h5 className='text-[25px] font-sans py-[20px]'>Our Vision</h5>
                        <p className='text-[16px] font-sans text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default About
