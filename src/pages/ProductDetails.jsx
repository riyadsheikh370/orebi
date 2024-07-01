import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container';
import Flex from '../components/Flex';
import { IoMdStarHalf } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import Facdin from '../components/Facdin';
import { useDispatch } from 'react-redux'
import { addToCart } from '../components/slice/ProductSlice';

const ProductDetails = () => {
    let [singleData, setSingleData] = useState([])
    let ProductId = useParams()
    let dispatch = useDispatch()


    let getData = () => (
        axios.get(`https://dummyjson.com/products/11${ProductId.id}`).then((response) => {
            setSingleData(response.data);
        })
    )

    useEffect(() => {
        getData()
    }, [])

    let clientRating = Array.from({ length: 5 }, (elm, index) => {

        let ratingNumber = index + 0.5

        return (
            singleData.rating >= index + 1 ? <FaStar className='text-[#FFD881]' /> : singleData.rating > ratingNumber ? <IoMdStarHalf className='text-[#FFD881]' /> : <CiStar />
        )
    });

    let handleAddTocart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }));
    }




    return (
        <>
            <section>
                <Container>
                    <Flex className="flex-wrap justify-between">
                        {singleData?.images?.map((item) => (
                            <div className="w-[48%] my-5">
                                <img src={item} alt="" />
                            </div>
                        ))}
                    </Flex>
                    <div className="">
                        <h3 className='text-[#262626] font-sans lg:text-[36px] text-[23px] font-bold'>Product</h3>
                        <div className="flex items-center my-4">
                            {clientRating}
                            <div className="pl-3">
                                <span>Review</span>
                            </div>
                        </div>
                        <h3 className='text-[#262626] font-sans lg:text-[20px] text-[23px] font-bold'>${singleData.price}</h3>
                        {/* <div className="flex items-center">
                            <div className="mr-2">
                                <h3 className='text-[#262626] font-sans text-[20px] font-normal'>QUANTITY :</h3>
                            </div>
                            <div className="flex w-[150px] h-[50px] border-2 border-[#262626] justify-around items-center">
                                <div className="">-</div>
                                <div className="">0</div>
                                <div className="">+</div>
                            </div>
                        </div> */}
                        <div className="flex items-center gap-x-6 py-6 border-b-[1px] border-[#262626]">
                            <h3 className='text-[#262626] font-sans text-[20px] font-normal'>STATUS :</h3>
                            <h4>0</h4>
                        </div>
                        <div className="my-8">
                            <a className="py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer duration-300 ease-in-out">
                                Add to Wish List
                            </a>
                            <Link to="/cart" onClick={() => handleAddTocart(singleData)}>
                                <a className="py-[16px] px-[45px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer ms-4 duration-300 ease-in-out">
                                    Add to Cart
                                </a>
                            </Link>
                        </div>
                        <Facdin />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProductDetails
