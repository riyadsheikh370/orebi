import React, { useContext, useEffect, useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosAdd, IoLogoWhatsapp } from "react-icons/io";
import { PiSquaresFourFill } from "react-icons/pi";
import { GrSort } from "react-icons/gr";
import Post from '../components/pagination/Post';
import { apiData } from '../components/ContextApi';
import PaginationArea from "../components/pagination/PaginationArea";
import { Link } from 'react-router-dom';


const Shop = () => {
  let data = useContext(apiData)
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerpage] = useState(6)
  // let [catshow, setCatShow] = useState(false)
  let [category, setCategory] = useState([])
  let [categorySearchFilter, setCategorySearchFilter] = useState([])
  let [multiList, setMultiList] = useState('')

  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage
  let allData = data.slice(firstPage, lastPage)

  let pageNumber = []


  for (let i = 0; i < Math.ceil(categorySearchFilter.length > 0 ? categorySearchFilter : data.length / perPage); i++) {
    pageNumber.push(i)
  };
  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  }
  let [colshowCategory, setcolshowCategory] = useState(false)
  let categoryo = () => {
    setcolshowCategory(!colshowCategory)
  }
  let [colshow, setcolshow] = useState(false)
  let color = () => {
    setcolshow(!colshow)
  }
  let [brandshow, setbrandshow] = useState(false)
  let brand = () => {
    setbrandshow(!brandshow)
  }
  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentPage((state) => state + 1)
    }
  }
  let prev = () => {
    if (currentPage > 1) {
      setCurrentPage((state) => state - 1)
    }
  }

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))])
  }, [data])

  let handleSubcate = (citem) => {
    let categoryFilter = data.filter((item) => item.category == citem)
    setCategorySearchFilter(categoryFilter)
  }

  let handleList = () => {
    setMultiList("activeList")
  }


  return (
    <section>
      <div className="container mx-auto">
        <div className="Page_head_line py-[40px] px-3 lg:px-0">
          <h1 className=' font-sans font-[700] text-[40px] md:text-[49px] text-[#262626] ' >Prodect</h1>
          <h5 className='text-[12px] font-sans'><Link to="/">Home</Link> | Shop</h5>
        </div>
        <div className="main_box lg:flex justify-between">
          <div className="catagory md:w-[25%] lg:px-0 px-3">
            <ul>
              <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={categoryo} >{colshowCategory == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Category<IoMdArrowDropup /> </div> : <div className=" flex items-center justify-between w-[90%]">Shop by Category<IoMdArrowDropdown /></div>}</li>
              {colshowCategory == true && <div className="one">
                {category.map((item) => (
                  <li onClick={() => handleSubcate(item)} className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>{item}</span><IoIosAdd /></li>
                ))}
              </div>}
            </ul>

            <ul>
              <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={color} >{colshow == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Color<IoMdArrowDropup /> </div> : <div className=" flex items-center justify-between w-[90%]">Shop by Color<IoMdArrowDropdown /></div>}</li>
              {colshow == true && <div className="one">
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#000000]"></div>Color 1</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#FF8686]"></div>Color 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#7ED321]"></div>Color 3</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#B6B6B6]"></div>Color 4</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span className='flex items-center'><div className=" mr-[10px] color h-[10px] w-[10px] rounded-[50%] bg-[#15CBA5]"></div>Color 5</span><IoIosAdd /></li>
              </div>}
            </ul>
            <ul>
              <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={brand} >{brand == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Brand<IoMdArrowDropup /> </div> : <div className="h  flex items-center justify-between w-[90%]">Shop by Brand<IoMdArrowDropdown /></div>}</li>
              {brandshow == true && <div className="one">
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Brand 1</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Brand 2</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Brand 3</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Brand 4</span><IoIosAdd /></li>
                <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Brand 5</span><IoIosAdd /></li>
              </div>}
            </ul>
          </div>
          <div className="prodect_item md:w-[75%]">
            <div className="sistambtn lg:flex justify-between">
              <div className="gridmain ml-[10px] justify-between flex lg:w-[11%] w-[25%] lg:ml-[-1px]">
                <div onClick={() => setMultiList("")} className={`lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center ${multiList == "activeList" ? "bg-white text-black" : "bg-black text-white"} border-[1px] border-[#737373] text-[20px]`}><PiSquaresFourFill /></div>
                <div onClick={handleList} className="lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#737373] text-[20px]"><GrSort /></div>
              </div>
              <div className="op flex justify-between lg:w-[40%] w-[99%] px-2 lg:px-0 lg:pt-0 pt-[20px]">
                <div className="items-center flex">
                  <h2 className='mr-[10px] font-sans'>Sort by :</h2>
                  <select className='p-[5px] border-[1px] border-[#262626] outline-none rounded-[3px]'>
                    <option>Featured</option>
                    <option >Price</option>
                    <option >Category</option>
                  </select>
                </div>
                <div className="one items-center flex">
                  <h2 className='mr-[10px] font-sans'>Sort by :</h2>
                  <select className='p-[5px] border-[1px] border-[#262626] outline-none rounded-[3px]'>
                    <option>Featured</option>
                    <option >Price</option>
                    <option >Category</option>
                  </select>
                </div>
              </div>
            </div>
            <Post allData={allData} categorySearchFilter={categorySearchFilter} multiList={multiList} />
            <div className="lg:text-end text-center">
              <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} next={next} prev={prev} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop



