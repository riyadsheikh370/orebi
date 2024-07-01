import React from 'react'
import Container from './Container'
import Flex from './Flex'
import P1 from "../assets/p1.png"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import P4 from "../assets/p4.png"
import P5 from "../assets/p5.png"
import P6 from "../assets/p6.png"
import P7 from "../assets/p7.png"
import P8 from "../assets/p8.png"
import Ads2 from "../assets/ads2.png"

const Basic = () => {
    return (
        <>
            <section className='lg:py-[50px] bg-rose-950'>
                <Container>
                    <Flex className="justify-between">
                        <div className="w-[24%]">
                            <img src={P1} alt={P1} />
                        </div>
                        <div className="w-[24%]">
                            <img src={P2} alt={P2} />
                        </div>
                        <div className="w-[24%]">
                            <img src={P3} alt={P3} />
                        </div>
                        <div className="w-[24%]">
                            <img src={P4} alt={P4} />
                        </div>
                    </Flex>
                    <div className="lg:py-[90px] py-[30px]">
                        <img src={Ads2} alt={Ads2} />
                    </div>
                    <h2 className='text-[white] font-sans lg:text-[36px] text-[23px] font-bold pb-[30px]'>Special Offers</h2>
                    <Flex className="justify-between">
                        <div className="w-[24%]">
                            <img src={P5} alt={P5} />
                        </div>
                        <div className="w-[24%]">
                            <img src={P6} alt={P6} />
                        </div>
                        <div className="w-[24%]">
                            <img src={P7} alt={P7} />
                        </div>
                        <div className="w-[24%]">
                            <img src={P8} alt={P8} />
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Basic
