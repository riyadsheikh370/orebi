import React, { useContext, useEffect, useState } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { GrSort } from "react-icons/gr";
import { PiSquaresFourFill } from "react-icons/pi";
import Container from '../components/Container';
import { apiData } from '../components/ContextApi';
import PaginationArea from '../components/pagination/PaginationArea';
import Post from '../components/pagination/Post';
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosAdd } from "react-icons/io";


const Shop = () => {
  let data = useContext(apiData)
  let [currentPage, setCurrentpage] = useState(1)
  let [perPage, setPerPage] = useState(9)
  let [catshow, setCatShow] = useState(false)
  let [category, setCategory] = useState([])
  let [categorySearchFilter, setCategorySearchFilter] = useState([])
  let [multiList, setMultiList] = useState('')
  let [lowprice, setLowprice] = useState("")
  let [highprice, setHighprice] = useState("")
  let [filterPrice, setFilterPrice] = useState([])


  let lastPage = currentPage * perPage
  let firstPage = lastPage - perPage

  let allData = data.slice(firstPage, lastPage)

  let pageNumber = []

  for (let i = 0; i < Math.ceil(categorySearchFilter.length > 0 ? categorySearchFilter : data.length / perPage); i++) {
    pageNumber.push(i)
  }

  let paginate = (pageNumber) => {
    setCurrentpage(pageNumber + 1);
  }

  let next = () => {
    if (currentPage < pageNumber.length) {
      setCurrentpage((state) => state + 1)
    }
  }

  let prev = () => {
    if (currentPage > 1) {
      setCurrentpage((state) => state - 1)
    }
  }
  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))])
  }, [data])

  let [brandshow, setbrandshow] = useState(false)
  let brand = () => {
    setbrandshow(!brandshow)
  }

  let handleSubcate = (citem) => {
    let categoryFilter = data.filter((item) => item.category == citem)
    setCategorySearchFilter(categoryFilter)
  }

  let handleList = () => {
    setMultiList("activeList");
  }
  let handlePrice = (value) => {
    setLowprice(value.low)
    setHighprice(value.high)
    let priceFilter = data.filter((item) => item.price > value.low && item.price < value.high)
    setFilterPrice(priceFilter);
  }


  return (
    <section>
      <Container>
        <div className='lg:flex'>
          <div className="lg:w-[20%] w-full ">
            <div className="mt-16 pl-5">
              <h3 onClick={() => setCatShow(!catshow)} className='font-sans lg:text-[20px] text-[12px] font-bold text-[#262626] flex justify-between items-center cursor-pointer'>Shop by Category <p>{catshow == true ? <FaCaretUp /> : <FaCaretDown />}</p></h3>
              {catshow &&
                <ul>
                  {category.map((item) => (

                    <li onClick={() => handleSubcate(item)} className='font-sans lg:text-[16px] text-[12px] font-normal text-[#767676] lg:py-5 py-2 border-b-2 border-[#F0F0F0] capitalize'>{item}</li>
                  ))}
                </ul>
              }
            </div>
            <div className="mt-16 pl-5">
              <ul>
                <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={brand} >{brand == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Price<IoMdArrowDropup /> </div> : <div className="h  flex items-center justify-between w-[90%]">Shop by Price<IoMdArrowDropdown /></div>}</li>
                {brandshow == true && <div className="one">
                  <li onClick={() => handlePrice({ low: 0, high: 10 })} className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'>Price $ 0-10<IoIosAdd /></li>
                  <li onClick={() => handlePrice({ low: 10, high: 20 })} className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Price $ 10-20</span><IoIosAdd /></li>
                </div>}
              </ul>

            </div>
          </div>


          <div className="lg:w-[80%] w-full">
            <div className="lg:flex justify-between pt-[10px] mt-[50px] pl-10">
              <div className="flex gap-x-5 lg:justify-normal justify-center lg:w-[30%] w-100%">
                <div onClick={() => setMultiList("")} className={`lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center ${multiList == "activeList" ? "bg-white text-white" : "bg-black text-white"} border-[1px] border-[#737373] text-[20px]`}><PiSquaresFourFill /></div>
                <div onClick={handleList} className="lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#737373] text-[20px]"><GrSort /></div>
              </div>
              <div className="flex lg:justify-end justify-between lg:gap-x-10 lg:w-[70%] w-[100%] pt-[20px] lg:pt-0">
                <div className="">
                  <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Sort by : </label>
                  <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[10px] py-[5px] text-[16px] font-sans text-[#767676] font-normal'>
                    <option value="">Featured</option>
                    <option value="">Price</option>
                    <option value="">Category</option>
                  </select>
                </div>
                <div className="">
                  <label htmlFor="" className='text-[16px] font-sans text-[#767676] font-normal'>Show : </label>
                  <select name="" id="" className='border-[1px] border-[#767676] rounded-sm text-start lg:px-[60px] px-[25px] py-[5px] text-[16px] font-sans text-[#767676] font-normal'>
                    <option value="">36</option>
                    <option value="">30</option>
                    <option value="">24</option>
                  </select>
                </div>
              </div>
            </div>

            <Post filterPrice={filterPrice} allData={allData} categorySearchFilter={categorySearchFilter} multiList={multiList} />


            <div className="text-end">
              <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} next={next} prev={prev} />
            </div>

          </div>
        </div>
      </Container>
    </section>
  )
}

export default Shop







// import React, { useContext, useEffect, useState } from 'react'
// import { IoMdArrowDropdown, IoMdArrowDropup, IoIosAdd, IoLogoWhatsapp } from "react-icons/io";
// import { PiSquaresFourFill } from "react-icons/pi";
// import { GrSort } from "react-icons/gr";
// import Post from '../components/pagination/Post';
// import { apiData } from '../components/ContextApi';
// import PaginationArea from "../components/pagination/PaginationArea";
// import { Link } from 'react-router-dom';


// const Shop = () => {
//   let data = useContext(apiData)
//   let [currentPage, setCurrentPage] = useState(1)
//   let [perPage, setPerpage] = useState(9)
//   let [catshow, setCatShow] = useState(false)
//   let [category, setCategory] = useState([])
//   let [categorySearchFilter, setCategorySearchFilter] = useState([])
//   let [multiList, setMultiList] = useState('')
//   let [lowprice, setLowprice] = ("")
//   let [highprice, setHighprice] = ("")
//   let [filterPrice, setFilterPrice] = useState([])

//   let lastPage = currentPage * perPage
//   let firstPage = lastPage - perPage
//   let allData = data.slice(firstPage, lastPage)

//   let pageNumber = []


//   for (let i = 0; i < Math.ceil(categorySearchFilter.length > 0 ? categorySearchFilter : data.length / perPage); i++) {
//     pageNumber.push(i)
//   };
//   let paginate = (pageNumber) => {
//     setCurrentPage(pageNumber + 1);
//   }
//   let [colshowCategory, setcolshowCategory] = useState(false)
//   let categoryo = () => {
//     setcolshowCategory(!colshowCategory)
//   }

//   let [brandshow, setbrandshow] = useState(false)
//   let brand = () => {
//     setbrandshow(!brandshow)
//   }
//   let next = () => {
//     if (currentPage < pageNumber.length) {
//       setCurrentPage((state) => state + 1)
//     }
//   }
//   let prev = () => {
//     if (currentPage > 1) {
//       setCurrentPage((state) => state - 1)
//     }
//   }

//   useEffect(() => {
//     setCategory([...new Set(data.map((item) => item.category))])
//   }, [data])

//   let handleSubcate = (citem) => {
//     let categoryFilter = data.filter((item) => item.category == citem)
//     setCategorySearchFilter(categoryFilter)
//   }

//   let handleList = () => {
//     setMultiList("activeList")
//   }
// let handlePrice = (value) =>{
//   setLowprice(value.low)
//   setHighprice(value.high)
//   let priceFilter = data.filter((item)=>item.price > value.low && item.price < value.high)
//   setFilterPrice(priceFilter)
// }

//   return (
//     <section>
//       <div className="container mx-auto">
//         <div className="Page_head_line py-[40px] px-3 lg:px-0">
//           <h1 className=' font-sans font-[700] text-[40px] md:text-[49px] text-[#262626] ' >Prodect</h1>
//           <h5 className='text-[12px] font-sans'><Link to="/">Home</Link> | Shop</h5>
//         </div>
//         <div className="main_box lg:flex justify-between">
//           <div className="catagory md:w-[25%] lg:px-0 px-3">
//             <ul>
//               <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={categoryo} >{colshowCategory == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Category<IoMdArrowDropup /> </div> : <div className=" flex items-center justify-between w-[90%]">Shop by Category<IoMdArrowDropdown /></div>}</li>
//               {colshowCategory == true && <div className="one">
//                 {category.map((item) => (
//                   <li onClick={() => handleSubcate(item)} className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>{item}</span><IoIosAdd /></li>
//                 ))}
//               </div>}
//             </ul>
//             <ul>
//               <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' onClick={brand} >{brand == true ? <div className="H  flex items-center justify-between w-[90%]">Shop by Price<IoMdArrowDropup /> </div> : <div className="h  flex items-center justify-between w-[90%]">Shop by Price<IoMdArrowDropdown /></div>}</li>
//               {brandshow == true && <div className="one">
//                 <li onClick={()=>handlePrice({low:0, high:10})} className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'>Price $ 0-10<IoIosAdd /></li>
//                 <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Price $ 10-20</span><IoIosAdd /></li>
//               </div>}
//             </ul>
//           </div>
//           <div className="prodect_item md:w-[75%]">
//             <div className="sistambtn lg:flex justify-between">
//               <div className="gridmain ml-[10px] justify-between flex lg:w-[11%] w-[25%] lg:ml-[-1px]">
//                 <div onClick={() => setMultiList("")} className={`lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center ${multiList == "activeList" ? "bg-white text-black" : "bg-black text-white"} border-[1px] border-[#737373] text-[20px]`}><PiSquaresFourFill /></div>
//                 <div onClick={handleList} className="lg:h-[46px] h-[26px] lg:w-[46px] w-[26px] flex justify-center items-center text-[#737373] hover:text-white duration-300 ease-in-out hover:bg-black border-[1px] border-[#737373] text-[20px]"><GrSort /></div>
//               </div>
//               <div className="op flex justify-between lg:w-[40%] w-[99%] px-2 lg:px-0 lg:pt-0 pt-[20px]">
//                 <div className="items-center flex">
//                   <h2 className='mr-[10px] font-sans'>Sort by :</h2>
//                   <select className='p-[5px] border-[1px] border-[#262626] outline-none rounded-[3px]'>
//                     <option>Featured</option>
//                     <option >Price</option>
//                     <option >Category</option>
//                   </select>
//                 </div>
//                 <div className="one items-center flex">
//                   <h2 className='mr-[10px] font-sans'>Sort by :</h2>
//                   <select className='p-[5px] border-[1px] border-[#262626] outline-none rounded-[3px]'>
//                     <option>Featured</option>
//                     <option >Price</option>
//                     <option >Category</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//             <Post filterPrice={filterPrice} allData={allData} categorySearchFilter={categorySearchFilter} multiList={multiList} />
//             <div className="lg:text-end text-center">
//               <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} next={next} prev={prev} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Shop




