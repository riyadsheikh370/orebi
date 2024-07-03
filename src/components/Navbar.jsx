// import React, { useContext, useEffect, useRef, useState } from 'react'
// import Container from './Container'
// import Flex from './Flex'
// import { FaBars } from "react-icons/fa6";
// import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";
// import { MdArrowDropDown } from "react-icons/md";
// import CartImg from "../assets/cart.png"
// import { RxCross2 } from "react-icons/rx";
// import { useSelector } from "react-redux";
// import { apiData } from './ContextApi';
// import { useNavigate } from 'react-router-dom';

// const Navbar = () => {
//     let info = useContext(apiData)
//     let data = useSelector((state) => state.product.cartItem)
//     let [cartShow, setCartShow] = useState(false)
//     let [usercartShow, setUsercartShow] = useState(false)
//     let [userShow, setuserShow] = useState(false)
//     let [searchInput, setSearchInput] = useState('')
//     let [searchFilter, setSearchFilter] = useState([])
//     let cartref = useRef()
//     let userref = useRef()
//     let userAccref = useRef()
//     let navigate = useNavigate()

//     useEffect(() => {
//         document.addEventListener("click", (e) => {
//             if (cartref.current.contains(e.target) == true) {
//                 setCartShow(!cartShow)
//             } else {
//                 setCartShow(false)

//             }
//             if (userref.current.contains(e.target) == true) {
//                 setUsercartShow(!usercartShow)
//             } else {
//                 setUsercartShow(false)
//             }
//             if (userAccref.current.contains(e.target) == true) {
//                 setuserShow(!userShow)
//             } else {
//                 setuserShow(false)
//             }
//         })
//     }, [cartShow, usercartShow, userShow])

//     let handleInput = (e) => {
//         setSearchInput(e.target.value)
//         if (e.target.value == "") {
//             setSearchFilter([])
//         } else {
//             let searchone = info.filter((item) => item.title.toLowerCase().includes(e.target.value))
//             setSearchFilter(searchone)
//         }
//     }

//     let handleSingleSearch = (id) => {
//         navigate(`/shop/${id}`)
//         setSearchFilter([])
//         setSearchInput("")
//     }

//     let handleKey = (e) => {
//         console.log(e.key);
//     }


//     return (
//         <nav className='bg-rose-950 py-4 lg:px-0 px-3'>
//             <Container>
//                 <Flex className="items-center">
//                     <div className="w-[30%] relative">
//                         <div ref={cartref} className="flex items-center gap-x-3 text-white">
//                             <FaBars />
//                             <p className='font-sans hidden lg:block text-[16px] lg:text-[#767676] text-[white] hover:text-[white]'>Shop by Category</p>
//                         </div>
//                         {cartShow &&
//                             <div className="absolute z-50 top-[50px] left-0 bg-rose-950 w-[300px]">
//                                 <ul className='py-4'>
//                                     <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Accesories</li>
//                                     <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Furniture</li>
//                                     <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Electronics</li>
//                                     <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Clothes</li>
//                                     <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Bags</li>
//                                     <li className='text-[rgba(255,255,255,0.7)] hover:text-[#fff] font-sans text-[16px] py-2 duration-300 ease-in-out pl-3 hover:pl-6'>Home appliances</li>
//                                 </ul>
//                             </div>
//                         }
//                     </div>
//                     <div className="w-[40%]">
//                         <div className="relative">
//                             <input value={searchInput} onKeyUp={handleKey} onChange={handleInput} placeholder='Search...' type="search" className='w-full h-[50px] border-2 border-[#262626] outline-none px-2' />
//                             <div className="absolute top-[50%] right-4 translate-y-[-50%]">
//                                 <FaSearch />
//                             </div>
//                             {searchFilter.length > 0 &&
//                                 <div className="w-[508px] h-[350px] overflow-y-scroll z-50 absolute bg-[#F5F5F3] top-[50px] left-[2px]">
//                                     {searchFilter.map((item) => (
//                                         <div className="">
//                                             <div className="py-3 ">
//                                                 <div onClick={() => handleSingleSearch(item.id)} className="flex justify-around items-center">
//                                                     <div className="w-[150px]">
//                                                         <img src={item.thumbnail} className='h-[100px]' alt="" />
//                                                     </div>
//                                                     <div className="">
//                                                         <h3>{item.title}</h3>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             }
//                         </div>
//                     </div>
//                     <div className="w-[30%] relative">
//                         <div className="flex justify-end items-center gap-x-2">
//                             <div className="flex text-white" ref={userAccref}>
//                                 <FaUser />
//                                 <MdArrowDropDown />
//                             </div>
//                             <div ref={userref} className="text-white">
//                                 <div className="relative">
//                                     <FaCartPlus />
//                                     {data.length > 0 ? <div className="absolute text-center text-white rounded-full content-[''] h-[20px] w-[20px] bg-rose-900 left-[15px] top-[-20px]">
//                                         {data.length}
//                                     </div>
//                                         : ""}
//                                 </div>
//                             </div>
//                         </div>
//                         {userShow &&
//                             <div className="absolute z-50 top-[30px] right-0 w-[300px] bg-rose-950 py-4">
//                                 <ul className='font-sans text-[16px] font-normal text-[#FFFFFFB2]'>
//                                     <li className='py-2 duration-300 ease-in-out
//                        hover:text-[#fff] pl-3 hover:pl-6'>My Account</li>
//                                     <li className='py-2 duration-300 ease-in-out
//                        hover:text-[#fff] pl-3 hover:pl-6'>Log in</li>
//                                     <li className='py-2 duration-300 ease-in-out
//                        hover:text-[#fff] pl-3 hover:pl-6'>Sign Up</li>
//                                 </ul>
//                             </div>
//                         }

//                         {usercartShow &&
//                             <div className="w-[360px] z-50 absolute bg-[#F5F5F3] top-[50px] right-0">
//                                 <div className="py-3 ">
//                                     <div className="flex justify-around items-center">
//                                         <div className="w-[150px]">
//                                             <img src={CartImg} className='h-[100px]' alt="" />
//                                         </div>
//                                         <div className="">
//                                             <h3>Black Smart Watch</h3>
//                                             <h5>$44.00</h5>
//                                         </div>
//                                         <div className="">
//                                             <RxCross2 />
//                                         </div>
//                                     </div>
//                                     <div className="">
//                                         <h3 className='pl-4 py-3'>Subtotal: <span>$44.00</span></h3>
//                                         <div className="flex justify-around">
//                                             <div className="">
//                                                 <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">View Cart</a>
//                                             </div>
//                                             <div className="">
//                                                 <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">Checkout</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         }
//                     </div>
//                 </Flex>
//             </Container>
//         </nav>
//     )
// }

// export default Navbar




import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaBars } from "react-icons/fa6";
import { FaSearch, FaUser, FaCartPlus } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import CartImg from "../assets/cart.png"
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { apiData } from './ContextApi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let info = useContext(apiData)
    let data = useSelector((state) => state.product.cartItem)
    let [cartShow, setCartShow] = useState(false)
    let [usercartShow, setUsercartShow] = useState(false)
    let [userShow, setuserShow] = useState(false)
    let [searchInput, setSearchInput] = useState('')
    let [searchFilter, setSearchFilter] = useState([])
    let [selectedIndex, setSelectedIndex] = useState(-1) // Track the selected index
    let cartref = useRef()
    let userref = useRef()
    let userAccref = useRef()
    let navigate = useNavigate()

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (cartref.current && !cartref.current.contains(e.target)) {
                setCartShow(false)
            }
            if (userref.current && !userref.current.contains(e.target)) {
                setUsercartShow(false)
            }
            if (userAccref.current && !userAccref.current.contains(e.target)) {
                setuserShow(false)
            }
        }

        document.addEventListener("click", handleClickOutside)
        return () => document.removeEventListener("click", handleClickOutside)
    }, [])

    let handleInput = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value === "") {
            setSearchFilter([])
            setSelectedIndex(-1)
        } else {
            let searchone = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchone)
            setSelectedIndex(0)
        }
    }

    let handleSingleSearch = (id) => {
        navigate(`/shop/${id}`)
        setSearchFilter([])
        setSearchInput("")
        setSelectedIndex(-1)
    }

    let handleKey = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex(prevIndex => (prevIndex + 1) % searchFilter.length)
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex(prevIndex => (prevIndex - 1 + searchFilter.length) % searchFilter.length)
        } else if (e.key === 'Enter' && selectedIndex >= 0) {
            handleSingleSearch(searchFilter[selectedIndex].id)
        }
    }

    return (
        <nav className='bg-rose-950 py-4 lg:px-0 px-3'>
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
                            <input value={searchInput} onKeyDown={handleKey} onChange={handleInput} placeholder='Search...' type="search" className='w-full h-[50px] border-2 border-[#262626] outline-none px-2' />
                            <div className="absolute top-[50%] right-4 translate-y-[-50%]">
                                <FaSearch />
                            </div>
                            {searchFilter.length > 0 &&
                                <div className="w-[508px] h-[350px] overflow-y-scroll z-50 absolute bg-[#F5F5F3] top-[50px] left-[2px]">
                                    {searchFilter.map((item, index) => (
                                        <div key={item.id} className={`${selectedIndex === index ? 'bg-gray-200' : ''}`}>
                                            <div className="py-3 ">
                                                <div onClick={() => handleSingleSearch(item.id)} className="flex justify-around items-center">
                                                    <div className="w-[150px]">
                                                        <img src={item.thumbnail} className='h-[100px]' alt="" />
                                                    </div>
                                                    <div className="">
                                                        <h3>{item.title}</h3>
                                                    </div>
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
                                    </div>
                                        : ""}
                                </div>
                            </div>
                        </div>
                        {userShow &&
                            <div className="absolute z-50 top-[30px] right-0 w-[300px] bg-rose-950 py-4">
                                <ul className='font-sans text-[16px] font-normal text-[#FFFFFFB2]'>
                                    <li className='py-2 duration-300 ease-in-out hover:text-[#fff] pl-3 hover:pl-6'>My Account</li>
                                    <li className='py-2 duration-300 ease-in-out hover:text-[#fff] pl-3 hover:pl-6'>Log in</li>
                                    <li className='py-2 duration-300 ease-in-out hover:text-[#fff] pl-3 hover:pl-6'>Sign Up</li>
                                </ul>
                            </div>
                        }

                        {usercartShow &&
                            <div className="w-[360px] z-50 absolute bg-[#F5F5F3] top-[50px] right-0">
                                <div className="py-3 ">
                                    <div className="flex justify-around items-center">
                                        <div className="w-[150px]">
                                            <img src={CartImg} className='h-[100px]' alt="" />
                                        </div>
                                        <div className="">
                                            <h3>Black Smart Watch</h3>
                                            <h5>$44.00</h5>
                                        </div>
                                        <div className="">
                                            <RxCross2 />
                                        </div>
                                    </div>
                                    <div className="">
                                        <h3 className='pl-4 py-3'>Subtotal: <span>$44.00</span></h3>
                                        <div className="flex justify-around">
                                            <div className="">
                                                <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">View Cart</a>
                                            </div>
                                            <div className="">
                                                <a className='w-[148px] h-[50px] border-2 border-[#262626] inline-block text-center leading-[50px]' href="#">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }


                    </div>
                </Flex>
            </Container>
        </nav>
    )
}

export default Navbar
