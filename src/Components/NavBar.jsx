import  { useState } from "react";
import { Link } from "react-scroll";
import { FaTimesCircle} from "react-icons/fa"
import {CiMenuFries} from "react-icons/ci"
import AOS from 'aos'
import { useEffect } from 'react'


const NavBar = () => {
  useEffect(()=>{
    AOS.init({
        easing: 'ease-out-quart',
        delay:0,
        duration:750
})
},[1000])
    const [click,setClick]=useState(false)
    const handleClick = ()=> setClick(!click);
    
  const content = 
    <>
      <div className="lg:hidden block absolute  top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b text-white border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b text-white border-slate-800 hover:bg-slate-800 hover:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b text-white border-slate-800 hover:bg-slate-800 hover:rounded">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b text-white border-slate-800 hover:bg-slate-800 hover:rounded">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contacts">
            <li className="my-4 py-4 border-b text-white border-slate-800 hover:bg-slate-800 hover:rounded">
              Contacts
            </li>
          </Link>
        </ul>
      </div>
    </>
  
  return (
    <div>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800">
        <div className="flex items-center flex-1">
          <span className="text-3x1 font-bold">LOGO</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 item center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Home</li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">About</li>
              </Link>
              <Link spy={true} smooth={true} to="services">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Services</li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Projects</li>
              </Link>
              <Link spy={true} smooth={true} to="Contacts">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">Contacts</li>
              </Link>
            </ul>
          </div>
        </div>
        <button className="block  sm:hidden transition font-bold" onClick={handleClick}>
        {click ? <FaTimesCircle/> :<CiMenuFries/>}
      </button>
      </div>
      <div>
           {click && content}
      </div>
     
    </div>
  );
};
export default NavBar;
