// import React, { useContext, useState } from 'react'
// import Container from "../components/Container"
// import Flex from "../components/Flex"
// import { FaHeart } from "react-icons/fa";
// import { TfiReload } from "react-icons/tfi";
// import { SlBasket } from "react-icons/sl";
// import { apiData } from '../components/ContextApi';
// import { Link } from 'react-router-dom';
// import Post from '../components/pagination/Post';
// import PaginationArea from '../components/pagination/PaginationArea';

// const Shop = () => {
//   let data = useContext(apiData)

//   let [currentPage, setCurrentpage] = useState(1)
//   let [perPage, setPerPage] = useState(6)

//   let lastPage = currentPage * perPage
//   let firstPage = lastPage - perPage

//   let allData = data.slice(firstPage, lastPage)

//   let pageNumber = []

//   for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
//     pageNumber.push(i)
//   }

//   let paginate = (pageNumber) =>{
//     setCurrentpage(pageNumber + 1);
//   }


//   return (
//     <>
//       <section>
//         <Container>
//           <Flex>
//             <div className="w-[20%]">Category</div>
//             <div className="w-[80%]">
//               <div className="flex justify-between flex-wrap">
//                 <Post allData={allData} />
//               </div>
//               <div className="text-end">
//                 <PaginationArea pageNumber={pageNumber} paginate={paginate} />
//               </div>
//             </div>
//           </Flex>
//         </Container>
//       </section>
//     </>
//   )
// }

// export default Shop






import React, { useContext, useState } from 'react'
// import { GiEternalLove } from "react-icons/gi";
// import { GoGitCompare } from "react-icons/go";
// import { FaShoppingCart } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup, IoIosAdd } from "react-icons/io";
import { BsGridFill } from "react-icons/bs";
import { CiGrid2H } from "react-icons/ci";
// import { Link } from 'react-router-dom';
import Post from '../components/pagination/Post';
import { apiData } from '../components/ContextApi';
import PaginationArea from "../components/pagination/PaginationArea";


const Shop = () => {
  let data = useContext(apiData)
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerpage] = useState(6)

  let lastPage = currentPage * perPage

  let firstPage = lastPage - perPage

  let allData = data.slice(firstPage, lastPage)

  let pageNumber = []


  for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i)
  };

  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber + 1);
  }


  let [colshow, setcolshow] = useState(false)
  let color = () => {
    setcolshow(!colshow)
  }
  let [brandshow, setbrandshow] = useState(false)
  let brand = () => {
    setbrandshow(!brandshow)
  }
  return (
    <section>
      <div className="container mx-auto">
        <div className="Page_head_line py-[40px]">
          <h1 className=' font-sans font-[700] text-[40px] md:text-[49px] text-[#262626] ' >Prodect</h1>
          <span className='text-[12px] font-[400] font-sans text-[#767676]' >Home Prodect</span>
        </div>
        <div className="main_box flex justify-between">
          <div className="catagory md:w-[25%]">
            <ul>
              <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' >Shop by Category</li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 1</span><IoIosAdd /></li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans flex justify-between w-[90%] items-center'><span>Category 2</span><IoIosAdd /></li>
              <li className='font-[400] text-[rgb(118,118,118)] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>Category 3</span><IoIosAdd /></li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans py-[2[21px] flex justify-between w-[90%] items-center'><span>Category 4</span><IoIosAdd /></li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans py-[2[21px] flex justify-between w-[90%] items-center py-[21px]'><span>Category 4</span><IoIosAdd /></li>
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
            <ul>
              <li className='font-[700] text-[#262626] text-[20px] font-sans pb-[21px]' >Shop by Price</li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>$0.00 - $9.99</span><IoIosAdd /></li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>$0.00 - $9.99</span><IoIosAdd /></li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>$0.00 - $9.99</span><IoIosAdd /></li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>$0.00 - $9.99</span><IoIosAdd /></li>
              <li className='font-[400] text-[#767676] text-[16px] font-sans py-[21px] flex justify-between w-[90%] items-center'><span>$0.00 - $9.99</span><IoIosAdd /></li>
            </ul>
          </div>
          <div className="prodect_item md:w-[75%]">
            <div className="sistambtn flex justify-between">
              <div className="gridmain ml-[10px] justify-between flex w-[11%]  lg:ml-[-1px]">
                <div className="grid1 text-[20px] p-[10px] border-[1px] border-[#262626] hover:text-[#fff] hover:bg-[#262626]"><BsGridFill /></div>
                <div className="grid2 text-[20px] p-[10px] border-[1px] border-[#262626] hover:text-[#fff] hover:bg-[#262626]"><CiGrid2H /></div>
              </div>
              <div className="op flex justify-between w-[40%]">
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
            <div className="prodects flex justify-between flex-wrap py-7">
              <Post allData={allData} />
            </div>
            <div className="text-end">
              <PaginationArea pageNumber={pageNumber} paginate={paginate} currentPage={currentPage} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shop



