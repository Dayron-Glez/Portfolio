import './App.css'
import 'animate.css';
import HeaderComponent from './components/HeaderComponent';
import Maincomponent from './components/MainComponent';
import FooterComponent from './components/FooterComponent';
function App() {

  return (
    <>
    
      <HeaderComponent/>
      <Maincomponent/>
      <FooterComponent/>

    
    {/* <main className='flex flex-col w-[100%] mt-5'>
      <div className='flex flex-col  mt-20 w-[100%] items-start'>
        <h1 className='text-white text-4xl '>Let me turn your</h1>
        <h1 className='text-white text-4xl pl-10'>ideas into reality</h1>
        <hr className='mt-8 pl-10 h-[5px] rounded-full border-none w-[115px] bg-[#2cb7ea]  animate__animated animate__backInLeft animate__delay-0.1s'/>
        <h3 className='text-slate-200 text-l mt-10 text-left'>Hi, I’m Dayron González, a web developer from Cuba.</h3>
        <h3 className='text-slate-200 text-l mt-1'>My services are tailored to your specific goals and requirements.</h3>
      </div>
      <div className='flex w-[100%] justify-left'>
        <a download href='../public/DayronGlezCV.pdf' className='flex text-white text-l mt-12 bg-[#2cb7ea] h-10 text-center items-center rounded-md '><p className='text-white m-8'>Download CV</p></a>
      </div>
        
    </main> */}
    </>
  )
}

export default App
