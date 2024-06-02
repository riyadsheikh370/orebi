import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Sale1 from "../assets/sale1.png"
import Sale2 from "../assets/sale2.png"
import Sale3 from "../assets/sale3.png"

const Ads = () => {
    return (
        <>
            <section className='lg:py-20 py-4 bg-zinc-300'>
                <Container>
                    <Flex className="justify-between">
                        <div className="w-[48%]">
                            <img src={Sale1} alt={Sale1} />
                        </div>
                        <div className="w-[48%]">
                            <div className="">
                                <img src={Sale3} alt={Sale3} />
                            </div>
                            <div className="lg:mt-[33px] mt-[10px]">
                                <img src={Sale2} alt={Sale2} />
                            </div>
                        </div>
                    </Flex>
                </Container>
            </section>
        </>
    )
}

export default Ads
