import React from 'react'
import Container from "../components/Container"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <Container>
        <div className="">
          <h4 className='text-[#262626] font-sans text-[200px] font-bold'>404</h4>
          <p className='text-[#767676] font-sans text-[16px] w-[662px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
          <div className="relative w-[50%] py-[50px]">
            <input placeholder='Type to search' type="search" className='w-full h-[50px] border-[1px] border-[#F0F0F0] outline-none px-2' />
            <div className="absolute top-[50%] right-4 translate-y-[-50%] ">
              <FaSearch />
            </div>
          </div>
          <Link to="/">
            <a className="mb-[70px] py-[14px] font-sans text-[14px] font-bold px-[47px] border-2 border-[#262626] inline-block hover:bg-[#262626] hover:text-white cursor-pointer duration-300 ease-in-out">
              Back to Home</a>
          </Link>
        </div>
      </Container>
    </>
  )
}

export default Error
