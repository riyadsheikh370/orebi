import React, { useContext, useEffect, useState } from 'react'
// import { apiData } from '../ContextApi';
import { FaHeart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/ProductSlice';

const Post = ({ allData, categorySearchFilter, multiList }) => {

    let [filterShow, setFilterShow] = useState([])
    let [catShow, setCatShow] = useState(true)
    let dispatch = useDispatch()

    useEffect(() => {
        let filterAmi = categorySearchFilter.slice(0, 5)
        setFilterShow(filterAmi)
    }, [categorySearchFilter])

    let handleShow = () => {
        setFilterShow(categorySearchFilter)
        setCatShow(false)
    }

    let handleHide = () => {
        let filterAmi = categorySearchFilter.slice(0, 5)
        setFilterShow(filterAmi)
        setCatShow(true)
    }

    let handlePCart = (item) => {
        dispatch(addToCart({ ...item, qun: 1 }));
    };

    return (
        <>

            {categorySearchFilter.length > 0 ?
                <div className="">
                    <div className="flex flex-wrap">
                        {filterShow.map((item) => (
                            <div className='lg:w-[32%] lg:py-5 py-4 w-[100%] lg:px-4 px-3'>
                                <Link to={`/shop/${item.id}`}>
                                    <div className="">
                                        <div className="relative group overflow-hidden">
                                            <img src={item.thumbnail} className="h-[300px]" alt="" />
                                            <div className="bg-white absolute left-0 h-[120px] bottom-[-120px] w-full group-hover:bottom-0 duration-300 ease-in-out flex items-center justify-end">
                                                <ul className='pr-5'>
                                                    <li className='flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart /></li>
                                                    <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /></li>
                                                    <li className='flex items-center justify-end gap-x-4'>Add to Cart <SlBasket /></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex justify-between py-3">
                                            <h2 className='text-[#262626] font-sans text-[20px] font-bold'>{item.title}</h2>
                                            <p className='text-[#767676] font-sans text-[16px] font-bold'>${item.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    {catShow ? categorySearchFilter.length > 5 &&
                        <div className="flex items-center justify-end font-sans font-bold">
                            <button onClick={handleShow}>Show All</button>
                            <RiArrowDownSFill />
                        </div>
                        :
                        <div className="flex items-center justify-end font-sans font-bold">
                            <button onClick={handleHide}>Hide</button>
                            <RiArrowUpSFill />
                        </div>
                    }
                </div>
                :
                <div className={`${multiList == "activeList" ? "" : "prodects flex justify-between flex-wrap py-7"}`}>
                    {
                        allData.map((item) => (
                            <div className='lg:w-[32%] lg:py-5 py-4 w-[100%] lg:px-0 px-3'>
                                <div className="">
                                    <div className="relative group overflow-hidden">
                                        <Link to={`/shop/${item.id}`}>
                                            <img src={item.thumbnail} className="h-[300px]" alt="" />
                                        </Link>
                                        <div className="bg-white absolute left-0 h-[120px] bottom-[-120px] w-full group-hover:bottom-0 duration-300 ease-in-out flex items-center justify-end">
                                            <ul className='pr-5'>
                                                <li className='flex items-center justify-end gap-x-4'>Add to Wish List <FaHeart /></li>
                                                <li className='flex items-center justify-end gap-x-4 py-2'>Compare <TfiReload /></li>
                                                <li onClick={() => handlePCart(item)} className='flex items-center justify-end gap-x-4'>Add to Cart <SlBasket /></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex justify-between py-3">
                                        <h2 className='text-[#262626] font-sans text-[20px] font-bold'>{item.title}</h2>
                                        <p className='text-[#767676] font-sans text-[16px] font-bold'>${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }
            { }
        </>
    )
}

export default Post
