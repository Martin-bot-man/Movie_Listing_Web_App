import React from 'react'
import{Link} from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="flex flex-row  justify-between bg-[#121829CC] text-[#A8AEBF]  font-Poppins font-bold">
      <div className="h-12 w-12 mt-6 ml-12 mb-6 ">
        <img src="/images/Logo.svg" alt="logo" />
      </div>
      <ul className="flex flex-row justify-between space-x-6 mr-40 mt-8 mb-8">
        <li>
          <Link to="/">Movies</Link>
        </li>
        <li>
          <Link to="/about">Tv Shows</Link>
        </li>
        <li className="">
          <Link to="/contact" className="flex items-center" >
            <span className="mr-4">Suggest me</span> 
            <FaLongArrowAltRight />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar