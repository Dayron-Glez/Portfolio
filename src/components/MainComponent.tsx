import Faztgrab from '../assets/faztgrab-m.png'
import DevFinder from '../assets/github-devFinder-m.png'
import Mascolive from '../assets/mascolive-m.png'
import JavaScriptLogo from '../assets/java-script.png'
import TypeScriptLogo from '../assets/typescript.png'
import ReactLogo from '../assets/react-logo.png'
import ReduxLogo from '../assets/redux.png'
import NextLogo from '../assets/nextjs.png'
import BootStrapLogo from '../assets/bootstrap.png'
import SassLogo from '../assets/sass.png'
import TailwindLogo from '../assets/tailwind.png'
import NodeLogo from '../assets/node.png'
import {  useEffect, useRef } from 'react'
import RightArrowComponent from './RightArrowComponent'
import LeftArrowComponent from './LeftArrowComponent'


const Maincomponent = () => {
  // const navRef = useRef<HTMLDivElement>(null);

  const mobileDivRef = useRef<HTMLAnchorElement>(null);
  const desktopDivRef = useRef<HTMLAnchorElement>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);

  const handleClick = () => {
    const isMobileDevice = window.innerWidth <= 768;
    const targetDiv = isMobileDevice ? mobileDivRef.current : desktopDivRef.current;

    if (targetDiv) {
        targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
};

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        (entry.target as HTMLElement).classList.add('fade-in');
      } else {
        (entry.target as HTMLElement).classList.remove('fade-in');
      }
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }
  );

  refs.current.forEach(ref => {
    if (ref) {
      observer.observe(ref);
    }
  });

  return () => {
    refs.current.forEach(ref => {
      if (ref) {
        observer.unobserve(ref);
      }
    });
  };
}, []);
  

  return (
    <>
        <a onClick={handleClick} className='flex flex-col items-center animate-[animation] transition-all duration-2000'>
          <svg id='svg' className=' absolute bottom-5 h-12 w-12 lg:h-14 lg:w-14' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#2cb7ea" d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
        </a>
      <main className=' '>
        <nav className="flex flex-wrap items-center justify-center sticky top-0 z-40 mt-10 lg:mt-20 mb-10 bg-[#065b70]/30 backdrop-blur-lg h-[65px] ">
          <div className="container px-4 mx-auto  lg:hidden flex flex-wrap items-center justify-center">
            <div className="w-full flex lg:w-auto  container  justify-around sm:justify-center items-center">




              <li id='all-projects' className=' list-none p-2 transition-colors duration-500 text-[16px] text-[#2cb7ea]   rounded-md hover:bg-[#2cb7ea] hover:text-white'><a ref={mobileDivRef} href="#all">All Projects</a></li>
              <li className=' list-none p-2 transition-colors duration-500 text-[16px] text-[#2cb7ea]   rounded-md hover:bg-[#2cb7ea] hover:text-white'><a href="#contact">Contact</a></li>


              <a download href='/DayronGlezCV.pdf' className='flex   text-center items-center p-2'><p className=' p-2 transition-colors duration-500 text-[16px]    rounded-md bg-[#2cb7ea] text-white  '>Download CV</p></a>
            </div>
          </div>
          <div className='hidden lg:flex lg:flex-row lg:max-w-5xl lg:h-20 lg:mb-40'>
            <ul className="flex  flex-row items-center lg:w-screen justify-evenly h-[65px]">
              <li id='all-projects1' className='text-xl text-white hover:text-[#2cb7ea]'><a ref={desktopDivRef} href="#all">All Projects</a></li>
              <li className='text-xl text-white hover:text-[#2cb7ea]'><a href="#contact">Contact</a></li>
              <li>
                <a href='/DayronGlezCV.pdf' download className='text-center'><p className=' transition-colors  text-xl text-white  m-4 p-2 rounded-md bg-[#2cb7ea]'>Download CV</p></a>
              </li>
            </ul>
          </div>
        </nav>
        <section ref={ref => refs.current[0] = ref}  className='fade p-5 mx-auto w-11/12 '>
          <h2 className='text-[#2cb7ea] text-3xl'>About me</h2>
          <p  className=' text-cyan-100 text-xl text-left mt-5  '>
            Programming has been my passion since my last year of high school. As a freelancer, I have worked on several projects in the last three years. My goal is to create websites and applications that are not only secure and accessible, but also have a user-friendly design.
            <br />
            <br />
            To achieve my goals, I have dedicated myself to the study of the most robust current tools and technologies.
          </p>


        </section>

        <h1 className=' flex flex-row justify-center align-middle text-3xl text-[#2cb7ea] mx-auto w-11/12 px-5 mt-20'> Relevant Projects  </h1>
        <section ref={ref => refs.current[1] = ref} className='fade grid grid-cols-1 md:gap-x-2 md:grid-cols-2 lg:grid-cols-3 mw-11/12 mt-12 container mx-auto lg:px-10 px-10 place-items-center'>

          <div className=' project-card flex flex-col mt-10 mb-10 '>
            <img loading='lazy' src={Faztgrab} alt="faztgrab project" className=' rounded-t-xl h-[250px] lg:h-[400px] ' />
            <div className=' project-info pl-8 pr-8 flex flex-col items-center bg-[#044151] rounded-b-xl'>
              <h2 className=' text-cyan-100 text-4xl mt-5 mb-5'>Faztgrab</h2>
              <p className='  text-cyan-100 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa ipsa eveniet? Cupiditate a sequi quis, maiores aliquid laborum hic, repellendus recusandae modi neque similique nam explicabo. Autem, commodi magni.</p>
            </div>
          </div>

          <div className=' project-card flex flex-col mt-10 mb-10'>
            <img loading='lazy' src={DevFinder} alt="DevFinder project" className=' rounded-t-xl h-[250px] lg:h-[400px]' />
            <div className=' project-info pl-8 pr-8 flex flex-col items-center bg-[#044151] rounded-b-xl'>
              <h2 className='text-cyan-100 text-4xl mt-5 mb-5'>DevFinder</h2>
              <p className='text-cyan-100 rounded-t-none mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa ipsa eveniet? Cupiditate a sequi quis, maiores aliquid laborum hic, repellendus recusandae modi neque similique nam explicabo. Autem, commodi magni.</p>
            </div>
          </div>

          <div className=' project-card flex flex-col mt-10 mb-10 '>
            <img loading='lazy' src={Mascolive} alt="Mascolive project" className=' rounded-t-xl h-[250px] lg:h-[400px]' />
            <div className=' project-info pl-8 pr-8 flex flex-col items-center bg-[#044151] rounded-b-xl'>
              <h2 className='text-cyan-100 text-4xl mt-5 mb-5'>Mascolive</h2>
              <p className='text-cyan-100 rounded-t-none mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa ipsa eveniet? Cupiditate a sequi quis, maiores aliquid laborum hic, repellendus recusandae modi neque similique nam explicabo. Autem, commodi magni.</p>
            </div>
          </div>
          <div className='flex flex-row pt-0 lg:pt-40 w-full text-center  lg:px-12'>
          </div>
        </section>
            <div className='lg:hidden'>
              <h2 className='text-[#2cb7ea] text-4xl  mx-auto w-11/12 pr-5 pt-20 md:pt-40 '>Tools and Skills</h2>
              <section className='grid gap-y-4 gap-x-14 grid-cols-3 lg:grid-cols-9  p-10 lg:px-20 place-items-center'>
                <a href='https://lenguajejs.com/' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px]  md:w-[150px] text-center  px-4 py-0 '>
                  <img src={JavaScriptLogo} alt="JavaScript Logo" height={60} width={60}  />
                  <p className=' text-cyan-100 text-xl md:text-3xl'>JavaScript</p>
                </a>
                <a href='https://www.typescriptlang.org/docs/' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px]  md:w-[150px] text-center  px-4 py-0 '>
                  <img src={TypeScriptLogo} alt="typeScript Logo" height={60} width={60}  />
                  <p className=' text-cyan-100 text-xl md:text-3xl'>TypeScript</p>
                </a>
                <a href='https://es.react.dev/' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px]  md:w-[150px] text-center  px-4 py-0 '>
                  <img src={ReactLogo} alt="React Logo" height={60} width={60} className='' />
                  <p className=' text-cyan-100 text-xl md:text-3xl pt-1'>React</p>
                </a>
                <a href='https://redux.js.org/' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px]  md:w-[150px] text-center  px-4 py-0 '>
                  <img src={ReduxLogo} alt="Redux Logo" height={60} width={60}  />
                  <p className=' text-cyan-100 text-xl md:text-3xl'>Redux</p>
                </a>
                <a href='https://nextjs.org/docs' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px]  md:w-[150px] text-center  px-4 py-0 '>
                  <img src={NextLogo} alt="Next.js Logo" height={60} width={60}  />
                  <p className=' text-cyan-100 text-xl md:text-3xl'>Next.js</p>
                </a>
                <a href='https://getbootstrap.com/docs/4.1/getting-started/introduction/' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px] md:w-[150px] text-center  px-4 py-0 '>
                  <img src={BootStrapLogo} alt="Bootstrap Logo" height={60} width={60}  />
                  <p className=' text-cyan-100 text-xl md:text-3xl'>Bootstrap</p>
                </a>
                <a href='https://sass-lang.com/documentation/' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px]  md:w-[150px] text-center  px-4 py-0 '>
                  <img src={SassLogo} alt="Sass Logo" height={60} width={60}  />
                  <p className=' text-cyan-100 text-xl md:text-3xl'>Sass</p>
                </a>
                <a href='https://v2.tailwindcss.com/docs' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px]  md:w-[150px] text-center  px-4  '>
                  <img src={TailwindLogo} alt="Tailwind CSS Logo" height={60} width={60}  />
                  <p className=' text-cyan-100 text-xl md:text-3xl'>tailwindcss</p>
                </a>
                <a href='https://nodejs.org/docs/latest/api/' target='_blank' className='card items-center justify-center tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg  h-[120px] w-[100px]  md:w-[150px] text-center  px-4 py-0 '>
                  <img src={NodeLogo} alt="Node Logo" height={60} width={60} />
                  <p className=' text-cyan-100 text-xl md:text-3xl'>Node.js</p>
                </a>

              </section>
            </div>

      </main>
    </>
  )
}

export default Maincomponent