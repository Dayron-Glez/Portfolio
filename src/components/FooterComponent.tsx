import WhatsAppLogo from '../assets/whatsapp.png'
import LinkedInLogo from '../assets/linkedin.png'
import GitHubLogo from '../assets/github (1).png'
const FooterComponent = () => {
    return (
        <>

            <footer className='flex flex-col h-full w-full p-10 lg:px-20'>

                <div className=" items-center ">

                    <div className="">
                        <h2 id='contact' className=' text-[#2cb7ea] text-4xl '>Hit me up <span className='animate__animated animate__fadeIn animate__slow animate__infinite'>!</span></h2>

                        <form action="https://formsubmit.co/125090127fb13929834b0448d636f09c" method="POST">
                            <div className="mb-5 mt-20">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block font-medium text-cyan-100 text-xl"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
                                    rows={4}
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    className=" submit hover:shadow-form rounded-md bg-[#2cb7ea] py-3 px-8 text-base font-semibold text-white outline-none "
                                >
                                    Submit
                                </button>
                            </div>
                            <input type="hidden" name='_next' value='http://localhost:5173/' />

                        </form>
                        <div className='flex flex-row w-full mt-20 justify-between items-center lg:justify-evenly'>
                            <a className='footer-anchor ' href="http://api.whatsapp.com/send?phone=54435959"><img className='lg:h-16 lg:w-16' src={WhatsAppLogo} alt="WhatsAppLogo" /></a>
                            <a className='footer-anchor ' href="https://github.com/Dayron-Glez"><img className='lg:h-16 lg:w-16' src={GitHubLogo} alt="GitHubLogo" /></a>
                            <a className='footer-anchor ' href="https://www.linkedin.com/in/dayron-gonzalez-garcia-9579ab229/"><img className='lg:h-16 lg:w-16' src={LinkedInLogo} alt="LinkedInLogo" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterComponent