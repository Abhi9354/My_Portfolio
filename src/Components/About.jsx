
import AOS from 'aos'
import { useEffect } from 'react'
import img from '../assets/Profile1.jpeg'
import resume from '../assets/resume.pdf'




const About = () => {
  useEffect(()=>{
    AOS.init({
        easing: 'ease-out-quart',
        delay:0,
        duration:750
})
},[1000])
  return (
    
    <div id="About" className="lg:px-56 px10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
    <img data-aos="fade-down"  src={img} width={290} height={290} alt="" className='rounded border-2 p-1 border-fuchsia-500 img_glow'/>
    <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
      <h1 data-aos="fade-right" className="text-[52px] font-semiBold mb-8 leading-normal uppercase text-fuchsia-500">
       About me
      </h1>
      <p data-aos="fade-left" >👋 Hello!
I am Abhishek Kumar, an enthusiastic and driven student pursuing Computer Science Engineering (CSE). My fervent goal is to utilize technology to bring about positive transformations.</p>
      <div className="flex mt-8 gap-2">
        <div className="flex items-center justify-center">
          <div className="flex space-x-2" >
             <button className="neno-button shadow-xl border-fuchsia-500 hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden "><a
     
     href={resume}
     download="resume.pdf"
     >
    Download Resume
  </a></button>
              
          </div>
        </div>
      </div>
    </div>
  

  </div>
 
  )
}

export default About
