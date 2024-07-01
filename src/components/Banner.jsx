import React from 'react'
import BanImg from "../assets/banner.png"
import Slider from "react-slick";
import Container from './Container';
import { IoReload } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "70px",
          top: "50%",
          transform: "translateY(-50%)"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className='ami'
        style={{
          width: "30px",
          color: "transparent",
          padding: "10px 0",
          borderRight: "3px #fff solid"
        }}
      >
        0{i + 1}
      </div>
    )
  };
  return (
    <>
      <section className='bg-rose-950'>
        <Slider {...settings}>
          <div className="">
            <img src={BanImg} alt="banner" />
          </div>
          <div className="">
            <img src={BanImg} alt="banner" />
          </div>
          <div className="">
            <img src={BanImg} alt="banner" />
          </div>
          <div className="">
            <img src={BanImg} alt="banner" />
          </div>
        </Slider>
        <Container>
          <div className="lg:flex justify-between py-4 lg:px-0 px-3">
            <div className="">
              <h2 className='font-sans text-[16px] text-white'> <span className='pr-2'>2</span>Two years warranty</h2>
            </div>
            <div className="">
              <div className="flex items-center gap-x-4 text-white">
                <TbTruckDelivery />
                <h2 className='font-sans text-[16px] text-white'> Free shipping</h2>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-x-4 text-white">
                <IoReload />
                <h2 className='font-sans text-[16px] text-white'> Return policy in 30 days</h2>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>

  )
}

export default Banner