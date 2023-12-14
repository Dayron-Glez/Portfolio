import Faztgrab from '../assets/faztgrab-m.png'
import DevFinder from '../assets/github-devFinder-m.png'
import Mascolive from '../assets/mascolive-m.png'
import ArrowForward from '../assets/arrow forward.svg'
import JavaScriptLogo from '../assets/java-script.png'
import TypeScriptLogo from '../assets/typescript.png'
import ReactLogo from '../assets/react-logo.svg'
import ReduxLogo from '../assets/redux.png'
import NextLogo from '../assets/nextjs.png'
import BootStrapLogo from '../assets/bootstrap.png'
import SassLogo from '../assets/sass.png'
import TailwindLogo from '../assets/tailwind.png'
import NodeLogo from '../assets/node.png'


const Maincomponent = () => {

  return (
    <>
      <main className=' '>
        <nav className="flex flex-wrap items-center justify-center sticky top-0 z-40 mb-10 backdrop-blur-lg h-[65px] ">
          <div className="container mx-auto  lg:hidden flex flex-wrap items-center justify-center">
            <div className="w-full flex lg:w-auto  px-5 container  justify-around sm:justify-center items-center">




              <li className=' list-none p-2 transition-colors duration-500 text-[18px] text-[#2cb7ea]   rounded-md hover:bg-[#2cb7ea] hover:text-white'><a href="#">All Projects</a></li>
              <li className=' list-none p-2 transition-colors duration-500 text-[18px] text-[#2cb7ea]   rounded-md hover:bg-[#2cb7ea] hover:text-white'><a href="#">Contact</a></li>


              <a download href='../public/DayronGlezCV.pdf' className='flex   text-center items-center p-2'><p className=' p-2 transition-colors duration-500 text-[18px] text-[#2cb7ea]   rounded-md hover:bg-[#2cb7ea] hover:text-white  '>Download CV</p></a>
            </div>
          </div>
          <div className='hidden lg:flex lg:flex-row lg:max-w-5xl lg:h-20 lg:mb-40'>
            <ul className="flex  flex-row items-center lg:w-screen justify-evenly">
              <li className='text-xl text-white hover:text-[#2cb7ea]'>All Projects</li>
              <li className='text-xl text-white hover:text-[#2cb7ea]'>Contact</li>
              <li>
                <a download href='../public/DayronGlezCV.pdf' className='   text-center   '><p className=' transition-colors  text-xl text-white lg:m-0 lg:p-0 m-4 p-4 rounded-md  hover:text-[#2cb7ea]  '>Download CV</p></a>
              </li>
            </ul>
          </div>
        </nav>
        <section className=' p-5 mx-auto w-11/12'>
          <h2 className='text-[#2cb7ea] text-3xl'>About me</h2>
          <p className=' text-cyan-100 text-xl text-left mt-5  '>
            Programming has been my passion since my last year of high school. As a freelancer, I have worked on several projects in the last three years. My goal is to create websites and applications that are not only secure and accessible, but also have a user-friendly design.
            <br />
            <br />
            To achieve my goals, I have dedicated myself to the study of the most robust current tools and technologies.
          </p>


        </section>

        <h1 className='text-3xl text-[#2cb7ea] mx-auto w-11/12 pl-5 pr-5 mt-20'>Relevant Projects</h1>
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto w-11/12 pl-5 pr-5 mt-12'>

          <div className=' project-card flex flex-col mt-10 mb-10 '>
            <img src={Faztgrab} alt="faztgrab project" className=' rounded-t-xl h-[250px] ' />
            <div className=' project-info pl-8 pr-8 flex flex-col items-center bg-[#044151] rounded-b-xl'>
              <h2 className=' text-cyan-100 text-4xl mt-5 mb-5'>Faztgrab</h2>
              <p className='  text-cyan-100 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa ipsa eveniet? Cupiditate a sequi quis, maiores aliquid laborum hic, repellendus recusandae modi neque similique nam explicabo. Autem, commodi magni.</p>
            </div>
          </div>

          <div className=' project-card flex flex-col mt-10 mb-10'>
            <img src={DevFinder} alt="DevFinder project" className=' rounded-t-xl h-[250px]' />
            <div className=' project-info pl-8 pr-8 flex flex-col items-center bg-[#044151] rounded-b-xl'>
              <h2 className='text-cyan-100 text-4xl mt-5 mb-5'>DevFinder</h2>
              <p className='text-cyan-100 rounded-t-none mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa ipsa eveniet? Cupiditate a sequi quis, maiores aliquid laborum hic, repellendus recusandae modi neque similique nam explicabo. Autem, commodi magni.</p>
            </div>
          </div>

          <div className=' project-card flex flex-col mt-10 mb-10 '>
            <img src={Mascolive} alt="Mascolive project" className=' rounded-t-xl h-[250px]' />
            <div className=' project-info pl-8 pr-8 flex flex-col items-center bg-[#044151] rounded-b-xl'>
              <h2 className='text-cyan-100 text-4xl mt-5 mb-5'>Mascolive</h2>
              <p className='text-cyan-100 rounded-t-none mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis culpa ipsa eveniet? Cupiditate a sequi quis, maiores aliquid laborum hic, repellendus recusandae modi neque similique nam explicabo. Autem, commodi magni.</p>
            </div>
          </div>
          <div className='flex flex-row mt-20 mb-5 w-full text-center'>
            <a href='#' className='flex justify-start items-center w-full'>
              <p className=' text-cyan-100 text-3xl'>All projects</p>
              <img src={ArrowForward} alt="arrow" height={30} width={36} className='animate__animated animate__flash animate__slower animate__infinite invert mt-1' />
            </a>
          </div>
        </section>
        <h2 className='text-[#2cb7ea] text-4xl  mx-auto w-11/12 pl-5 pr-5 mt-20'>Tools and Skills</h2>
        <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5'>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={JavaScriptLogo} alt="React Logo" height={60} width={60} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>JavaScript</h3>
            <p className=' text-cyan-100 text-lg pt-5 pb-10'>Interpreted programming language with first-class functions.</p>
          </div>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={TypeScriptLogo} alt="React Logo" height={60} width={60} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>TypeScript</h3>
            <p className=' text-cyan-100 text-lg pt-5 pb-10'>A strongly typed programming language that builds on JavaScript.</p>
          </div>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={ReactLogo} alt="React Logo" height={70} width={70} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>React</h3>
            <p className=' text-cyan-100 text-lg  pt-5 pb-10'>A JavaScript library for building user interfaces.</p>
          </div>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={ReduxLogo} alt="React Logo" height={60} width={60} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>Redux</h3>
            <p className=' text-cyan-100 text-lg pt-5 pb-10'>A Predictable State Container for JS Apps.</p>
          </div>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={NextLogo} alt="React Logo" height={60} width={60} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>Next.js</h3>
            <p className=' text-cyan-100 text-lg pt-5 pb-10'>A React framework for building full-stack web applications.</p>
          </div>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={BootStrapLogo} alt="React Logo" height={60} width={60} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>Bootstrap</h3>
            <p className=' text-cyan-100 text-lg pt-5 pb-10'>A cross-platform library or open source toolset for site and web application design.</p>
          </div>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={SassLogo} alt="React Logo" height={60} width={60} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>Sass</h3>
            <p className=' text-cyan-100 text-lg pt-5 pb-10'>A stylesheet language that’s compiled to CSS.</p>
          </div>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={TailwindLogo} alt="React Logo" height={60} width={60} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>tailwindcss</h3>
            <p className=' text-cyan-100 text-lg pt-5 pb-10'>A utility-first CSS framework packed with classes.</p>
          </div>
          <div className='card  pl-5 pr-5 flex flex-col justify-center items-center text-center rounded-xl'>
            <img src={NodeLogo} alt="React Logo" height={60} width={60} className='pt-10' />
            <h3 className=' text-cyan-100 text-3xl pt-5'>Node.js</h3>
            <p className=' text-cyan-100 text-lg pt-5 pb-10'>An open-source, cross-platform JavaScript runtime environment.</p>
          </div>

        </section>


      </main>
    </>
  )
}

export default Maincomponent