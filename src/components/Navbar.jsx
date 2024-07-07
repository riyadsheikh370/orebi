import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaCartPlus, FaSearch, FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartImg from "../assets/cart.png";
import Container from './Container';
import { apiData } from './ContextApi';
import Flex from './Flex';

const Navbar = () => {
    let info = useContext(apiData);
    let data = useSelector((state) => state.product.cartItem);
    let [cartShow, setCartShow] = useState(false);
    let [usercartShow, setUsercartShow] = useState(false);
    let [userShow, setuserShow] = useState(false);
    let [searchInput, setSearchInput] = useState('');
    let [searchFilter, setSearchFilter] = useState([]);
    let [selectedItemIndex, setSelectedItemIndex] = useState(-1); // Track selected item index
    let cartref = useRef();
    let userref = useRef();
    let userAccref = useRef();
    let navigate = useNavigate();

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cartref.current.contains(e.target)) {
                setCartShow(!cartShow);
            } else {
                setCartShow(false);
            }
            if (userref.current.contains(e.target)) {
                setUsercartShow(!usercartShow);
            } else {
                setUsercartShow(false);
            }
            if (userAccref.current.contains(e.target)) {
                setuserShow(!userShow);
            } else {
                setuserShow(false);
            }
        });

        return () => {
            document.removeEventListener("click", () => { });
        };
    }, [cartShow, usercartShow, userShow]);

    let handleInput = (e) => {
        setSearchInput(e.target.value);
        if (e.target.value === "") {
            setSearchFilter([]);
        } else {
            let searchone = info.filter((item) => item.title.toLowerCase().includes(e.target.value));
            setSearchFilter(searchone);
        }
    };

    let handleSingleSearch = (id) => {
        navigate(`/shop/${id}`);
        setSearchFilter([]);
        setSearchInput("");
    };

    let handleKey = (e) => {
        switch (e.key) {
            case "ArrowUp":
                setSelectedItemIndex((prevIndex) => Math.max(prevIndex - 1, 0));
                break;
            case "ArrowDown":
                setSelectedItemIndex((prevIndex) => Math.min(prevIndex + 1, searchFilter.length - 1));
                break;
            case "Enter":
                if (selectedItemIndex !== -1) {
                    handleSingleSearch(searchFilter[selectedItemIndex].id);
                }
                break;
            default:
                console.log(e.key);
        }
    };

    return (
        <nav className='bg-rose-950 py-4'>
            <Container>
                <Flex className="items-center">
                    <div className="w-[30%] relative">
                        <div ref={cartref} className="flex items-center gap-x-3 text-white">
                            <FaBars />
                            <p className='font-sans hidden lg:block text-[16px] lg:text-[#767676] text-[white] hover:text-[white]'>Shop by Category</p>
                        </div>
                        {cartShow &&
                            <div className="absolute z-50 top-[50px] left-0 bg-rose-950 w-[300px]">
                                <ul className='py-4'>
                                    <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Accesories</li>
                                    <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Furniture</li>
                                    <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Electronics</li>
                                    <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Clothes</li>
                                    <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Bags</li>
                                    <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Home appliances</li>
                                </ul>
                            </div>
                        }
                    </div>
                    <div className="w-[40%]">
                        <div className="relative">
                            <input
                                value={searchInput}
                                onKeyUp={handleKey}
                                onChange={handleInput}
                                placeholder='Search...'
                                className='w-full h-[50px] border-2 border-[#262626] outline-none px-2'
                            />
                            <div className="absolute top-[50%] right-4 translate-y-[-50%] ">
                                <FaSearch />
                            </div>
                            {searchFilter.length > 0 &&
                                <div className="w-[500px] h-[400px] overflow-y-scroll z-50 absolute bg-[#F5F5F3] top-[50px] left-0">
                                    {searchFilter.map((item, index) => (
                                        <div
                                            key={item.id}
                                            className={`py-3 cursor-pointer ${index === selectedItemIndex ? "bg-gray-200" : ""
                                                }`}
                                            onClick={() => handleSingleSearch(item.id)}
                                        >
                                            <div className="flex justify-around items-center">
                                                <div className="">
                                                    <img className='w-[100px] h-[100px]' src={item.thumbnail} alt="" />
                                                </div>
                                                <div className="">
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }

                        </div>
                    </div>
                    <div className="w-[30%] relative">
                        <div className="flex justify-end items-center gap-x-2">
                            <div className="flex text-white" ref={userAccref}>
                                <FaUser />
                                <MdArrowDropDown />
                            </div>
                            <div ref={userref} className="text-white">
                                <div className="relative">
                                    <FaCartPlus />
                                    {data.length > 0 ? <div className="absolute text-center text-white rounded-full content-[''] h-[20px] w-[20px] bg-rose-900 left-[15px] top-[-20px]">
                                        {data.length}
                                    </div> : ""}
                                </div>
                            </div>
                        </div>
                        {userShow &&
                            <div className="absolute z-50 top-[30px] right-0 w-[300px] bg-rose-950 py-3 px-6">
                                <ul className='font-sans text-[16px] font-normal text-[#FFFFFFB2]'>
                                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>My Account</li>
                                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>
                                    <Link to="/login">Log in</Link></li>
                                    <li className='py-[16px] duration-300 ease-in-out hover:text-[#fff] hover:pl-[10px]'>
                                        <Link to="/signup">Sign Up</Link></li>
                                </ul>
                            </div>
                        }

                        {usercartShow &&
                            <div className="w-[360px] z-50 absolute bg-[#F5F5F3] top-[50px] right-0">
                                {data.map((item) => (
                                    <div className="py-3 ">
                                        <div className="flex justify-around items-center">
                                            <div className="w-[150px]">
                                                <img src={item.thumbnail} className='h-[100px]' alt="" />
                                            </div>
                                            <div className="">
                                                <h3>{item.title}</h3>
                                                <h5>${item.price}</h5>
                                            </div>
                                            <div className="">
                                                <RxCross2 />
                                            </div>
                                        </div>
                                        <div className="">
                                            <h3 className='pl-4 py-3'>Subtotal: <span>$44.00</span></h3>
                                            <div className="flex justify-around">
                                                <div className="">
                                                    <Link to="/cart" className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">View Cart</Link>
                                                </div>
                                                <div className="">
                                                    <Link to="/checkout" className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">Checkout</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }

                    </div>
                </Flex>
            </Container>
        </nav>
    );
};

export default Navbar;
