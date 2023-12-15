import  {  useRef } from 'react';
import Logo from '../assets/logo.png'



const HeaderComponent = () => {
  const arrow = useRef<HTMLDivElement>(null);
 
  setTimeout(() => {
    arrow.current?.classList.remove('animate__fadeInUp')
    arrow.current?.classList.add('animate__bounce')
  },2500)

  return (
    <>
    <header className=' h-screen flex flex-col  items-center justify-center w-[100%] gap-14 lg:gap-16'>
      
      <div className='animate__animated animate__backInUp animate__slow'>
        <img src={Logo} height={140} width={140}  className=' lg:h-[180px] lg:w-[180px]'/>
      </div>

      <div>
        <h1 className='text-white text-3xl animate__animated animate__fadeIn animate__slower animate__delay-1s lg:text-[50px]'>Dayron González García</h1>
      </div>

      <div className='flex flex-col items-center animate__animated animate__backInDown animate__slow'>
        <h1 className=' text-cyan-100  text-[60px]    lg:text-[100px] '>Front-End</h1>
        <h1 className=' text-[#2cb7ea] text-[60px]  lg:text-[100px]'>Developer</h1>
        
      </div>
        <div  className='flex flex-col items-center animate-[animation] transition-all duration-2000'>
          <svg id='svg' className=' absolute bottom-0 h-12 w-12 lg:h-14 lg:w-14'  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 384 512"><path fill="#2cb7ea" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
        </div>
        
    </header>
    </>
  )
}

export default HeaderComponent