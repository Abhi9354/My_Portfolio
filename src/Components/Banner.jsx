import {AiFillGithub} from 'react-icons/ai'
import { FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import img from '../assets/Profile1.jpeg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Banner = () => {
    useEffect(()=>{
        AOS.init({
            easing: 'ease-out-quart',
            delay:0,
            duration:750
    })
    },[1000])
  return (
    <div  className="lg:px-56 px10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos='fade-right' className="text-[52px] font-semiBold mb-8 leading-normal uppercase">
          Welcome To <span className="text-fuchsia-500">My Website</span>
        </h1>
        <p data-aos='fade-left'>Passionate Computer Science Engineer and Web Developer, transforming ideas into seamless digital experiences. Proficient in coding, problem-solving, and creating innovative web solutions.Lets build the future of the web together.</p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2" >
                <a href="https://github.com/Abhi9354" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <AiFillGithub className="text-[28px]"/>
                </a>
                <a href="https://www.linkedin.com/in/abhishek-kumar-a456281b1/" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <FaLinkedinIn className="text-[28px]"/>
                </a>
                <a href="https://twitter.com/BitwiseAbhi" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <FaTwitter className="text-[28px]"/>
                </a>
                <a href="https://www.instagram.com/imtheabhishek_?igsh=d3ptOG51cXFwemI4" className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2">
                    <FaInstagram className="text-[28px]"/>
                </a>
                
            </div>
          </div>
        </div>
      </div>
    <img data-aos='fade-up' src={img} width={290} height={290} alt="" className='rounded-full border-2 p-1 border-fuchsia-500 img_glow'/>

    </div>
  );
};

export default Banner;
