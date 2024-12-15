import{Link} from "react-router-dom"
import { FaLongArrowAltRight } from "react-icons/fa";



const Navbar = () => {
  return (
    <nav className="absolute w-full px-16 py-2 flex flex-row items-center  justify-between text-[#A8AEBF]  bg-[#121829CC] font-Poppins font-bold">
      <div className="h-12 w-12 ">
        <img src="/images/Logo.svg" alt="logo" />
      </div>
      <ul className="flex flex-row justify-between space-x-6">
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