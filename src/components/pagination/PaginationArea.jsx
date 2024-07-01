import React from 'react'

const PaginationArea = ({ pageNumber, paginate, currentPage, next, prev }) => {
    return (
        <>
            <nav className='pb-[60px]' aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    {pageNumber.length > 0 &&
                        <li>
                            <a onClick={prev} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300  rounded hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-[#262626] dark:hover:text-white"
                            >
                                Previous
                            </a>
                        </li>
                    }
                    {pageNumber.map((item, i) => (
                        <li onClick={() => paginate(item)} className={currentPage == i + 1 ? "flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#262626] border border-gray-300 cursor-pointer" : "flex justify-center text-gray-500 items-center px-3 h-8 leading-tight  bg-[white] border border-gray-300 cursor-pointer"}>
                            {item + 1}
                        </li>
                    ))}
                    {pageNumber.length > 0 &&
                        <li>
                            <a onClick={next} className="flex items-center justify-center px-6 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700  dark:text-gray-400 dark:hover:bg-[#262626] dark:hover:text-white"
                            >
                                Next
                            </a>
                        </li>
                    }
                </ul>
            </nav>

        </>
    )
}

export default PaginationArea
