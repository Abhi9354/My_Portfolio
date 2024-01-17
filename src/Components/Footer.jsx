import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  
  FaTwitter,
} from "react-icons/fa";
import AOS from 'aos'
import { useEffect } from 'react'

const Footer = () => {
  useEffect(()=>{
    AOS.init({
        easing: 'ease-out-quart',
        delay:0,
        duration:750
})
},[1000])
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semifold text-fuchsia-800 py-2 uppercase ">Logo</span>
          <p className="text-[16px] my-4">Passionate Computer Science Engineer and Web Developer, transforming ideas into seamless digital experiences. Proficient in coding, problem-solving, and creating innovative web solutions.Lets build the future of the web together. </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semifold text-fuchsia-800 py-2 uppercase">Services</h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Web Design</li>
            <li className="my-2">Web Development</li>
            <li className="my-2">SEO</li>
            <li className="my-2">E-commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semifold text-fuchsia-800 py-2 uppercase">Contact</h2>
          <p className="text-[16px] my-4 ">Email: abhiq7ty4@gmail.com</p>
          <p className="text-[16px] my-4">Phone: +919354737083</p>
        </div>
       <div>
       <h2 className="text-[22px] font-semifold text-fuchsia-800 py-2 uppercase">Follow Me</h2>
          <div className="flex space-x-4">
            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://github.com/Abhi9354">
              <FaGithub />
            </a>
            <a className="ext-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"href="https://www.linkedin.com/in/abhishek-kumar-a456281b1/">
              <FaLinkedinIn />
            </a>
            <a className="ext-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"href="https://twitter.com/BitwiseAbhi">
              <FaTwitter />
            </a>
            <a className="ext-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"href="https://www.instagram.com/imtheabhishek_?igsh=d3ptOG51cXFwemI4">
              <FaInstagram />
            </a>
          </div>
       </div>
        
      </div>
    </footer>
  );
};

export default Footer;
