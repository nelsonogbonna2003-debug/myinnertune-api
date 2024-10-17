import { useState } from 'react';
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ReactTyped } from "react-typed";
import ProgressBar from "@ramonak/react-progress-bar";

function LandingPage () {
    const [openModal, setOpenModal]  = useState(false);
    return (
        <>
            <Navbar/>
            <div className="header flex justify-center pt-[170px] pr-[100px] pb-[150px] pl-[80px] items-center text-black bg-[#878e99] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="w-[150%] text-left sm:w-[100%] sm:text-center md:text-left lg:text-left">
                    <h2 className="tracking-widest mb-4 text-[20px] sm:text-[17px] md:text-[20px]">WELCOME TO MY WORLD</h2>
                    <h1 className='text-[50px] font-bold mb-[10px] text-[#ff014f] sm:text-[30px] md:text-[50px]'>Hi, I'm Emeka <span className='text-[#ff014f]'>Kalu</span></h1>
                    <h1 className='text-[50px] font-bold mb-[10px] text-[#1e2125] sm:text-[30px] md:text-[50px]'>a <span className='text-[#ff014f]'>
                        <ReactTyped
                        strings={["Front-End Developer.", "Freelancer.", "Website Desginer.", "Graphic Designer.",]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                        >
                        </ReactTyped>
                    </span></h1>
                    <p className='w-[40%] text-[#3c3e41] text-bold text-[18px] mb-7 sm:text-[16px] sm:w-[100%] md:w-[70%] lg:w-[40%]'>Based in Nigeria, I'm a Proven success in boosting website performance and stability through regular maintenance and troubleshooting.</p>
                    <button className='flex justify-center items-center p-[10px] rounded-md text-[13px] text-center font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#878e99] animate-bounce sm:w-full md:w-[30%] lg:w-[20%]' type="button"><a href="#contact">Contact Me</a></button>
                </div>
            </div>
            <section id="features" className='bg-[#E4E4E4] p-20 sm:p-[25px] md:p-[25px] lg:p-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='text-[#ff014f] text-thin text-[20px]'>SERVICES</h1>
                <h2 className='text-[60px] text-[#3c3e41] font-bold mt-2 sm:text-[40px] md:text-[50px] lg:text-[60px]'>What I Do</h2>
                <div className="grid grid-cols-3 gap-4 mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="shadow-lg rounded-lg p-12 w-[100%] sm:p-[20px] md:p-[35px] lg:p-12 sm:w-[100%] md:w-[100%] lg:w-[100%]">
                        <img src="./Images/monitor.png" className='m w-[20%] mb-4 text-white' alt="" />
                        <h1 className='text-[25px]'>Web Development</h1>
                        <p className='text-[17px] w-[108%] mt-4 sm:text-[14px] md:text-[17px] lg:text-[17px]'>I build outstanding websites, user friendly and responsive design making users to have an outsanding experience</p>
                    </div>
                    <div className=" shadow-lg p-12 rounded-lg w-[100%] sm:p-[20px] md:p-[35px] lg:p-12 md:w-[100%] lg:w-[100%]">
                        <img src="./Images/graphic-design.png" className='m w-[20%] mb-4 text-white' alt="" />
                        <h1 className='text-[25px]'>Web Designing</h1>
                        <p className='text-[17px] w-[108%] mt-4 sm:text-[14px] md:text-[17px] lg:text-[17px]'>Designing incredible websites template, for users to implement easily without struggling with the codes</p>
                    </div>
                    <div className=" shadow-lg p-12 w-[100%] rounded-lg sm:p-[20px] md:p-[35px] lg:p-12 md:w-[100%] lg:w-[100%]">
                        <img src="./Images/camera.png" className='m w-[20%] mb-4 text-white' alt="" />     
                        <h1 className='text-[25px]'>Photo Editing</h1>
                        <p className='text-[17px] w-[108%] mt-4 sm:text-[14px] md:text-[17px] lg:text-[17px]'>In depth understanding on photo editing using Photoshop, enabling the quality and color enhancement</p>
                    </div>
                    <div className=" shadow-lg p-12 w-[100%] rounded-lg sm:p-[20px] md:p-[35px] lg:p-12 md:w-[100%] lg:w-[100%]">
                        <img src="./Images/expertise.png" className='m w-[20%] mb-4 text-white' alt="" />
                        <h1 className='text-[25px]'>Business Strategy</h1>
                        <p className='text-[18px] w-[108%] mt-4 sm:text-[14px] md:text-[17px] lg:text-[17px]'>Have knowledge and ideas on business startup and planning, also giving solutions to business</p>
                    </div>
                    <div className=" shadow-lg p-12 w-[100%] rounded-lg sm:p-[20px] md:p-[35px] lg:p-12 md:w-[100%] lg:w-[100%]">
                        <img src="./Images/drawing.png" className='m w-[20%] mb-4 text-white' alt="" />
                        <h1 className='text-[25px]'>Graphic Designing</h1>
                        <p className='text-[18px] w-[108%] mt-4 sm:text-[14px] md:text-[17px] lg:text-[17px]'>Intensive Understanding on graphic designs, using Corel-Draw to implement users personal designs</p>
                    </div>
                    <div className=" shadow-lg p-12 w-[100%] rounded-lg sm:p-[20px] md:p-[35px] lg:p-12 md:w-[100%] lg:w-[100%]">
                        <img src="./Images/self-employed.png" className='m w-[20%] mb-4 text-white' alt="" />
                        <h1 className='text-[25px]'>Freelancing</h1>
                        <p className='text-[18px] w-[108%] mt-4 sm:text-[14px] md:text-[17px] lg:text-[17px]'>Taking multiple projects with different clients, can also work on specfic projects</p>
                    </div>
                </div>
            </section>
            <hr className="hh"/>
            <section id='skills' className='bg-[#E4E4E4] p-20 sm:p-[25px] md:p-[25px] lg:p-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='text-[#ff014f] text-thin text-[20px]'>EXPERIENCE</h1>
                <h2 className='text-[60px] text-[#3c3e41] font-bold mt-2 sm:text-[40px] md:text-[50px] lg:text-[60px]'>Skills</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="">
                        <div className='w-full mt-10'>
                            <h1 className='mb-3 text-[20px]'>HTML5</h1>
                            <ProgressBar bgColor='#3e64ff' width='100%' completed="100" maxCompleted={100}></ProgressBar>
                        </div>
                        <div className='w-full mt-10'>
                            <h1 className='mb-3 text-[20px]'>CSS3</h1>
                            <ProgressBar bgColor='#3e64ff' width='100%' completed="100" maxCompleted={100} ></ProgressBar>
                        </div>
                    </div>      
                    <div className="">
                        <div className='w-full mt-10'>
                            <h1 className='mb-3 text-[20px]'>Photoshop</h1>
                            <ProgressBar bgColor='#3e64ff' width='100%' completed="70" maxCompleted={100}></ProgressBar>
                        </div>
                        <div className='w-full mt-10'>
                            <h1 className='mb-3 text-[20px]'>CorelDraw</h1>
                            <ProgressBar bgColor='#3e64ff' width='100%' completed="50" maxCompleted={100} ></ProgressBar>
                        </div>
                    </div>      
                    <div className="">
                        <div className='w-full mt-10'>
                            <h1 className='mb-3 text-[20px]'>REACT</h1>
                            <ProgressBar bgColor='#3e64ff' width='100%' completed="90" maxCompleted={100}></ProgressBar>
                        </div>
                        <div className='w-full mt-10'>
                            <h1 className='mb-3 text-[20px]'>TAILWIND CSS</h1>
                            <ProgressBar bgColor='#3e64ff' width='100%' completed="90" borderRadius="10px" maxCompleted={100} ></ProgressBar>
                        </div>
                    </div>  
                    <div className="">
                        <div className='w-full mt-10'>
                            <h1 className='mb-3 text-[20px]'>BOOTSTRAP</h1>
                            <ProgressBar bgColor='#3e64ff' width='100%' completed="90" maxCompleted={100}></ProgressBar>
                        </div>
                        <div className='w-full mt-10'>
                            <h1 className='mb-3 text-[20px]'>SASS</h1>
                            <ProgressBar bgColor='#3e64ff' width='100%' completed="90" borderRadius="10px" maxCompleted={100} ></ProgressBar>
                        </div>
                    </div>        
                </div>     
            </section>
            <hr className="hh"/>
            <section id='portfolio' className='bg-[#E4E4E4] p-20 sm:p-[25px] md:p-[25px] lg:p-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='text-[#ff014f] text-thin text-[20px]'>Projects</h1>
                <h2 className='text-[60px] text-[#3c3e41] font-bold mt-2 sm:text-[40px] md:text-[50px] lg:text-[60px]'>Portfolio</h2>
                <div className="grid grid-cols-3 gap-4 mt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="cursor-pointer shadow-lg rounded-lg bg-gradient-to-r from-[#e2e8ec] to-[#ffffff]" type='submit'>
                        <img src="./Images/Quiz-App.png" className='rounded-md w-full  mb-3' alt="" />
                        <h1 className='text-[#ff014f] text-thin text-[20px] mb-2 pl-4'>QUIZ APP</h1>
                        <div className="flex space-x-3 pl-4 mb-7 text-[16px]">
                            <p className='font-medium'>HTML</p>
                            <p className='font-medium'>CSS</p>
                            <p className='font-medium'>JAVASCRIPT</p>
                        </div> 
                        <button className='flex justify-center js p-[10px] ml-4 mb-4 rounded-md text-[13px] w-[40%] text-center font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#878e99] animate-bounce' type="button"><a href="https://quizzp.netlify.app/" target="_blank" rel="noopener noreferrer">View Project</a></button>
                    </div>
                    <div className="cursor-pointer shadow-lg rounded-lg bg-gradient-to-r from-[#e2e8ec] to-[#ffffff]" type='submit'>
                        <img src="./Images/Amali.png" className='rounded-md w-full  mb-3' alt="" />
                        <h1 className='text-[#ff014f] text-thin text-[20px] mb-2 pl-4'>AMALI</h1>
                        <div className="flex space-x-3 pl-4 mb-7 text-[16px]">
                            <p className='font-medium'>HTML</p>
                            <p className='font-medium'>CSS</p>
                            <p className='font-medium'>JAVASCRIPT</p>
                            <p className='font-medium'>REACT</p>
                        </div> 
                        <button className='flex justify-center js p-[10px] ml-4 mb-4 rounded-md text-[13px] w-[40%] text-center font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#878e99] animate-bounce' type="button"><a href="https://amali.netlify.app/" target="_blank" rel="noopener noreferrer">View Project</a></button>
                    </div>
                    <div className="cursor-pointer shadow-lg rounded-lg bg-gradient-to-r from-[#e2e8ec] to-[#ffffff]" type='submit'>
                        <img src="./Images/Princess-Simbiat-Weds-Ikechukwu-10-17-2024_08_58_PM.png" className='rounded-md w-full  mb-3' alt="" />
                        <h1 className='text-[#ff014f] text-thin text-[20px] mb-2 pl-4'>HANNASAM EVENTS</h1>
                        <div className="flex space-x-3 pl-4 mb-7 text-[16px]">
                            <p className='font-medium'>HTML</p>
                            <p className='font-medium'>CSS</p>
                            <p className='font-medium'>JAVASCRIPT</p>
                        </div> 
                        <button className='flex justify-center js p-[10px] ml-4 mb-4 rounded-md text-[13px] w-[40%] text-center font-medium shadow-md text-white hover:bg-[#ff014f] hover:text-white bg-[#878e99] animate-bounce' type="button"><a href="https://kalu-emeka.github.io/Princess-simbat-weds-ikechukwu/" target="_blank" rel="noopener noreferrer">View Project</a></button>
                    </div>
                </div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a className='pb-[10px] hover:text-gray-500' href="https://github.com/Kalu-Emeka?tab=repositories" target='_blank'>More projects on my Github</a>
                </div>
            </section>
            <hr className='hh'/>    
            <section id='contact' className='bg-[#E4E4E4] p-20 sm:p-[25px] md:p-[25px] lg:p-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <h1 className='text-[#ff014f] text-thin text-[20px]'>CONTACT</h1>
                <h2 className='text-[60px] text-[#3c3e41] font-bold mt-2 sm:text-[40px] md:text-[50px] lg:text-[60px]'>CONNECT WITH ME</h2>
                <div className="grid grid-cols-2 gap-12 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-start justify-start ml-[auto] mr-[auto]  shadow-lg w-[90%] sm:w-[100%] md:w-[70%] lg:w-[90%] p-4 rounded-lg flex-col mt-10">
                        <img src="./Images/contact1.png" className='rounded-md mb-4 w-full' alt="" />
                        <h1 className='font-medium text-[30px] tracking-wide mb-2'>Emeka Kalu</h1>
                        <p className='text-[20px] tracking-wide mb-2'>Chief Operating Developer</p>
                        <p className='text-[20px] tracking-wide mb-2 w-[95%]'>I am available for remote and freelance work. Connect with me via and call in to my account.</p>
                        <p className='text-[20px] tracking-wide mb-2'>Phone: 09046964772</p>
                        <p className='text-[20px] tracking-wide mb-2'>Email: brickkalu@gmail.com</p>
                        <p className='text-[20px] tracking-wide mb-2'>Connect with me</p>
                        <div className="flex space-x-2 mt-5">
                            <a href="https://web.facebook.com/emeka.kalu.777158" target="_blank" rel="noopener noreferrer"><img src="./Images/Frame 630354.png" className='w-[20%] shadow-md rounded-full p-2 cursor-pointer sm:w-[17%] md:w-[35%]' alt="" /></a>
                            <a href="https://www.linkedin.com/in/chukwuemka-kalu-15378b273/" target="_blank" rel="noopener noreferrer"><img src="./Images/Frame 630355.png" className='w-[20%] shadow-md rounded-full p-2 cursor-pointer sm:w-[17%] md:w-[35%]' alt="" /></a>
                            <a href="https://x.com/KaluChukwu76137" target="_blank" rel="noopener noreferrer"><img src="./Images/download.png" className='w-[20%] shadow-md rounded-full p-2 cursor-pointer sm:w-[17%] md:w-[25%]' alt="" /></a>
                        </div>
                    </div>
                    <div className='border p-4 rounded-lg mt-10 shadow-lg ml-[auto] mr-[auto] sm:w-[100%] w-[90%] md:w-[70%] lg:w-[90%]'>
                        <form action="https://formspree.io/f/mbljjqka" method="POST">
                            <div className="t">
                                <div className="grid grid-cols-2 gap-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                                    <div className='mr-5 sm:mr-0 md:mr-0 lg:mr-5'>
                                        <label htmlFor="" className='mb-3 text-[#3c3e41] text-[16px]'>YOUR NAME</label>
                                        <input type="text" className='p-[12px] rounded-md bg-[#fdfefe] w-[100%]'name='Name' required/>
                                    </div>
                                    <div className='mt-0 sm:mt-2 md:mt-0 lg:mt-0'>
                                        <label htmlFor="" className='mb-3 text-[#3c3e41] text-[16px]'>PHONE NUMBER</label>
                                        <input type="number" className='p-[12px] rounded-md w-[100%] bg-[#fdfefe]' name='Phone Number' required/>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className='mb-3 mt-3 text-[#3c3e41] text-[16px]'>EMAIL</label>
                                    <input type="email" className='p-[12px] rounded-md border border-solid bg-[#fdfefe]' name='Email' required/>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="" className='mb-3 mt-3 text-[#3c3e41] text-[16px]'>SUBJECT</label>
                                    <input type="text" className='p-[12px] rounded-md border border-solid bg-[#fdfefe]' name='Subject' required/>
                                </div>
                                <div className="tx flex flex-col">
                                    <label htmlFor="" className='mb-3 mt-3 text-[#3c3e41] text-[16px]'>MESSAGE</label>
                                    <textarea name="Message" id="" cols="30" rows="6" className='p-2 rounded-md bg-[#fdfefe]' required></textarea>
                                </div>
                                <button type='submit' className='mt-5 flex justify-center items-center bg-[#878e99] p-2 text-white rounded-md hover:bg-[#ff014f] hover:text-white w-full'>SEND MESSAGE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <hr className='hh'/>
            <Footer/>
        </>
    )
}
export default LandingPage