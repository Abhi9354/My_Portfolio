import { useEffect, useState } from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar"
import Projects from "./Components/Projects";
import Service from "./Components/Service";
import { BallTriangle } from "react-loader-spinner";



const App = () => {
  const[loader,setLoader]=useState(false);
  useEffect(()=>{
      setLoader(true);
      setTimeout(()=>{
          setLoader(false)
      },3000)
  },[])

  return (
    <>{
    loader ?
    <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
      <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#d946ef"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
    </div>

    :
    <div className="bg-slate-900 " >
       <NavBar/>
       <Banner/>
       <About/>
       <Service/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
    }
    </>
  )
}

export default App;