import WhatsAppLogo from '../assets/whatsapp.png'
import LinkedInLogo from '../assets/linkedin.png'
import GitHubLogo from '../assets/github (1).png'
import { contactForm } from '../interfaces/formInterface'
import { useForm } from "react-hook-form";



import JavaScriptLogo from '../assets/java-script.png'
import TypeScriptLogo from '../assets/typescript.png'
import ReactLogo from '../assets/react-logo.png'
import ReduxLogo from '../assets/redux.png'
import NextLogo from '../assets/nextjs.png'
import BootStrapLogo from '../assets/bootstrap.png'
import SassLogo from '../assets/sass.png'
import TailwindLogo from '../assets/tailwind.png'
import NodeLogo from '../assets/node.png'

const FooterComponent = () => {
    const form = useForm<contactForm>({
        defaultValues: {
            name: "",
            email: '',
            subject: '',
            message: ''
        }

    });
    const { register, formState: { isDirty }, reset } = form;





    return (
        <>

            <footer className=' h-full w-full p-10 lg:px-20'>

                <div className=" items-center ">

                    <div className=" flex flex-col lg:grid  lg:grid-cols-2 place-content-center">
                        <div>

                            <h2 id='contact' className=' text-[#2cb7ea] text-4xl '>Hit me up <span className='animate__animated animate__fadeIn animate__slow animate__infinite'>!</span></h2>

                            <form action="https://formsubmit.co/125090127fb13929834b0448d636f09c" method="POST" onClick={() => { reset }} className=''>
                                <div className="mb-5 mt-20">
                                    <label
                                        htmlFor="name"
                                        className="mb-3 block font-medium text-cyan-100 text-xl"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        {...register('name')}
                                        autoComplete='off'
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="w-full md:w-[450px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:outline-cyan-200"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="email"
                                        className="mb-3 block font-medium text-cyan-100 text-xl"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        {...register('email')}
                                        autoComplete='off'
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@domain.com"
                                        className="w-full  md:w-[450px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:outline-cyan-200"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="subject"
                                        className="mb-3 block font-medium text-cyan-100 text-xl"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        {...register('subject')}
                                        autoComplete='off'
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Enter your subject"
                                        className="w-full md:w-[450px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:outline-cyan-200"
                                    />
                                </div>
                                <div className="mb-5">
                                    <label
                                        htmlFor="message"
                                        className="mb-3 block font-medium text-cyan-100 text-xl"
                                    >
                                        Message
                                    </label>
                                    <textarea

                                        {...register('message')}
                                        autoComplete='off'
                                        rows={4}
                                        name="message"
                                        id="message"
                                        placeholder="Type your message"
                                        className="w-full md:w-[450px] resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:outline-cyan-200"
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        disabled={!isDirty}

                                        className=" submit hover:shadow-form rounded-md bg-[#2cb7ea] py-3 px-8 text-base font-semibold text-white outline-none disabled:bg-slate-400"
                                    >
                                        Submit
                                    </button>
                                </div>
                                <input type="hidden" name='_next' value='https://dayronglez-portfolio.vercel.app' />

                            </form>
                        </div>
                        <div className='hidden lg:flex lg:flex-col '>

                            <h2 className='text-[#2cb7ea] text-4xl  mx-auto w-11/12 pl-12 pr-5 text-start'>Tools and Skills</h2>
                            <section className='grid gap-14 grid-cols-3 lg:grid-cols-3  p-10 mt-14 lg:px-20 place-items-center'>
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
                        
                        <div className='flex flex-row w-full md:w-[450px] mt-20 justify-between items-center lg:justify-between'>
                            <a className='footer-anchor' href="http://api.whatsapp.com/send?phone=54435959"><img className='lg:h-16 lg:w-16' src={WhatsAppLogo} alt="WhatsAppLogo" /></a>
                            <a className='footer-anchor' href="https://github.com/Dayron-Glez"><img className='lg:h-16 lg:w-16' src={GitHubLogo} alt="GitHubLogo" /></a>
                            <a className='footer-anchor' href="https://www.linkedin.com/in/dayron-gonzalez-garcia-9579ab229/"><img className='lg:h-16 lg:w-16' src={LinkedInLogo} alt="LinkedInLogo" /></a>
                        </div>
                        
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent