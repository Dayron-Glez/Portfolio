
import Logo from '../assets/logo.png'


const HeaderComponent = () => {
  return (
    <>
    <header className=' h-screen flex flex-col  items-center justify-center w-[100%] gap-10  '>
      
      <div className='animate__animated animate__backInUp animate__slow'>
        <img src={Logo} height={140} width={140} />
      </div>

      <div>
        <h1 className='text-white text-xl animate__animated animate__fadeIn animate__slower animate__delay-1s'>Dayron González García<span></span></h1>
      </div>

      <div className='flex flex-col gap-5 animate__animated animate__backInDown animate__slow'>
        <h1 className=' text-cyan-100 text-5xl '>Front-End</h1>
        <h1 className='text-5xl text-[#2cb7ea]'>Developer</h1>
      </div>
         
    
    </header>
    </>
  )
}

export default HeaderComponent