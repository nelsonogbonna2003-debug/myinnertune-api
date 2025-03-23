import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

function LandingPage () {
    return (
        <>
            <Navbar/>
            <div className="header pt-[130px] pr-[100px] pb-[80px] pl-[80px] text-black bg-[#FDFBF4] sm:pr-[30px] sm:pl-[30px] lg:pr-[100px] lg:pl-[80px]" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justify-between items-center sm:flex-col md:flex-col lg:flex-row'>
                    <div>
                        <h2 className="mb-2 w-[48%] text-[50px] text-[#0C394A] font-bold sm:w-full md:w-full lg:w-[48%] sm:text-[25px] md:text-[27px] lg:w-[40px]">Welcome to EasyGold Initiative for Mental Health</h2>
                        <p className='w-[40%] text-[#3c3e41] text-bold text-[14px] mb-7 sm:mt-[15px] md:mt-[15px] lg:mt-0 sm:text-[13.5px] sm:w-[100%] md:w-[70%] lg:w-[70%]'>Empowering your journey to mental well-being</p>
                        <div className='text-[12px] sm:mb-[30px] md:mb-[30px] lg:mb-0'>
                            <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm mr-[20px] px-[10px] py-[8px] border text-white bg-[#E46924] rounded-md hover:bg-[#E46924]" type="button">Get started</button></a>
                            <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm px-[10px] py-[8px] border bg-white rounded-md hover:bg-gray-200" type="button">Learn more</button></a>
                        </div>
                    </div>
                    <div className='ic w-[29%] sm:w-[60%] md:w-[60%] lg:w-[29%]'>
                        <img src="/Images/Group (1).png" className='' alt="" />
                    </div>
                </div>  
            </div>
            <section id="" className='ab mt-[10px] bg-[#FDFBF5] py-10 sm:p-[25px] md:p-[25px] lg:py-12 lg:px-[80px] px-[30px]'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className="grid grid-cols-2 gap-4 mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center">
                    <div className="flex justify-center items-center">
                        <img src="/Images/Group (2).png" className='w-[55%] sm:w-[60%] md:w-[60%] lg:w-[55%]' alt="" />
                    </div>
                    <div className="mt-[30px]">
                        <h1 className='mb-[20px] text-[27px] text-[#0C394A] font-bold'>About Us</h1>
                        <p className='text-[#0C394A] w-[95%] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[13.5px]'>Easygold Initiative for Mental Health was conceived as a response to the growing global mental health crisis. Recognizing the need for a holistic approach to mental health, the initiative’s primary objectives are: to increase awareness and understanding of mental health issues to reduce stigma and discrimination and offer easy access to resources, tools, and information for individuals seeking help or support.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm px-[10px] py-[8px] border bg-white rounded-md hover:bg-gray-200 text-[12px] mt-[20px]" type="button">View more</button></a>
                    </div>
                </div>
            </section>
            <section className='clip mt-[10px] bg-[#FDFBF5] p-20 sm:p-[25px] md:p-[25px] lg:p-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className=''>
                    <h1 className='mb-2 text-center text-[50px] text-[#0C394A] sm:text-[17px] md:text-[30px] font-bold'>Here's preview of our programs</h1>
                </div>
                <div className="flex justify-center sm:flex-col md:flex-col lg:flex-row">
                    <div className='shadow-md text-center bg-[#FDFBF5] rounded-md flex justify-center items-center flex-col py-[10px] w-[25%] mt-[20px] mr-[50px] hover:shadow-lg sm:w-full md:w-full lg:w-[25%]'>
                        <img className='w-[12%]' src="/icons/Frame 73.png" alt="" />
                        <h1 className='text-[#0C394A] text-[16px] my-[20px] w-[70%]'>Personalized Therapy Sessions</h1>
                        <p className='text-[12px] w-[90%]'>One-on-one virtual therapy sessions with licensed mental health professionals.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm px-[25px] py-[8px] border bg-white rounded-md hover:bg-gray-200 text-[12px] mt-[20px]" type="button">More</button></a>
                    </div>
                    <div className='shadow-md text-center bg-[#FDFBF5] rounded-md flex justify-center items-center flex-col py-[10px] w-[25%] mt-[20px]  mr-[50px] hover:shadow-lg sm:w-full md:w-full lg:w-[25%]'>
                        <img className='w-[12%]' src="/icons/Frame 75.png" alt="" />
                        <h1 className='text-[#0C394A] text-[16px] my-[20px] w-[70%]'>Self-Help Resource Library</h1>
                        <p className='text-[12px] w-[90%]'>A comprehensive collection of digital resources, including articles, videos, and interactive tools.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm px-[25px] py-[7px] border bg-white rounded-md hover:bg-gray-200 text-[12px] mt-[20px]" type="button">More</button></a>
                    </div>
                    <div className='shadow-md text-center bg-[#FDFBF5] rounded-md flex justify-center items-center flex-col py-[10px] w-[25%] mt-[20px] mr-[50px] hover:shadow-lg sm:w-full md:w-full lg:w-[25%]'>
                        <img className='w-[12%]' src="/icons/Frame 73 (2).png" alt="" />
                        <h1 className='text-[#0C394A] text-[16px] my-[20px] w-[70%]'>Support Groups</h1>
                        <p className='text-[12px] w-[90%]'>Virtual support groups for individuals facing similar mental health challenges.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm px-[25px] py-[7px] border bg-white rounded-md hover:bg-gray-200 text-[12px] mt-[20px]" type="button">More</button></a>
                    </div>
                </div>
                <div className="flex justify-center mt-[20px] sm:flex-col md:flex-col lg:flex-row">
                    <div className='shadow-md text-center bg-[#FDFBF5] rounded-md flex justify-center items-center flex-col py-[10px] w-[25%] mt-[20px] mr-[50px] hover:shadow-lg sm:w-full md:w-full lg:w-[25%]'>
                        <img className='w-[12%]' src="/icons/Frame 73 (3).png" alt="" />
                        <h1 className='text-[#0C394A] text-[16px] my-[20px] w-[70%]'>Mindfulness and Wellness Programs</h1>
                        <p className='text-[12px] w-[90%]'>Programs focused on mindfulness, meditation, and overall well-being.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm px-[25px] py-[7px] border bg-white rounded-md hover:bg-gray-200 text-[12px] mt-[20px]" type="button">More</button></a>
                    </div>
                    <div className='shadow-md text-center bg-[#FDFBF5] rounded-md flex justify-center items-center flex-col py-[10px] w-[25%] mt-[20px]  mr-[50px] hover:shadow-lg sm:w-full md:w-full lg:w-[25%]'>
                        <img className='w-[12%]' src="/icons/Frame 79.png" alt="" />
                        <h1 className='text-[#0C394A] text-[16px] my-[20px] w-[70%]'>Crisis Support Services</h1>
                        <p className='text-[12px] w-[90%]'>Immediate assistance for individuals in mental health crises.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm px-[25px] py-[8px] border bg-white rounded-md hover:bg-gray-200 text-[12px] mt-[20px]" type="button">More</button></a>
                    </div>
                    <div className='shadow-md text-center bg-[#FDFBF5] rounded-md flex justify-center items-center flex-col py-[10px] w-[25%] mt-[20px] mr-[50px] hover:shadow-lg sm:w-full md:w-full lg:w-[25%]'>
                        <img className='w-[12%]' src="/icons/Frame 73 (4).png" alt="" />
                        <h1 className='text-[#0C394A] text-[16px] my-[20px] w-[70%]'>Educational Workshops and Webinars</h1>
                        <p className='text-[12px] w-[90%]'>Regular workshops and webinars on various mental health topics.</p>
                        <a href="/" target="_blank" rel="noopener noreferrer"><button  className="shadow-sm px-[25px] py-[8px] border bg-white rounded-md hover:bg-gray-200 text-[12px] mt-[20px]" type="button">More</button></a>
                    </div>
                </div>
            </section>
            <section className='clipmt-[10px] bg-[#FDFBF5] p-20 sm:p-[25px] md:p-[25px] lg:p-20'  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                <div className='flex justify-center'>
                    <h1 className='w-[50%] mb-2 text-center text-[50px] text-[#0C394A] sm:text-[20px] md:text-[25px] lg:w-text-[30px] font-bold sm:w-[80%] md:w-[80%] lg:w-[50%]'>Insights, Tips, and Stories for Better Mental Health</h1>
                </div>
                <div className='flex justify-center'>
                    <p className='flex justify-center text-center text-[15px] w-[65%] sm:w-[97%] md:w-[97%] lg:w-[65%]'>Stay informed and inspired with our latest articles and updates. Our blog features expert advice, personal stories, and practical tips to support your mental well-being.</p>
                </div>
                <div className='grid grid-cols-3 gap-2 mt-[40px] place-items-center sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                    <div className='shadow-md rounded-md w-[80%] sm:mb-[20px] md:mb-[20px] lg:mb-0'>
                        <img className='' src="/Images/Rectangle 3966 (1).png" alt="" />
                        <div className='px-[20px]'>
                            <h2 className='mt-[10px] my-[20px] w-[80%] sm:w-full md:w-full lg:w-[80%] sm:my-[10px] md:my-[10px] lg:my-[20px]'>Five Effective Strategies for Managing Anxiety</h2>
                            <i className='text-[#BFC6CA] text-[13px]'>August 5, 2023</i>
                            <p className='text-[14px] mt-[30px] sm:mt-[10px] md:mt-[10px] lg:mt-[30px]'>Discover practical techniques to help manage and reduce anxiety in your daily life. Learn how mindfulness, exercise, and professional support can make a difference.</p>
                        </div>
                        <div className='flex pl-[20px] my-[20px]'>
                            <p className='text-[13px]  text-[#A184CF]'>Read More</p>
                            <img className='w-[4%] object-contain ml-[5px]' src="/icons/Arrow_right.png" alt="" />
                        </div>
                    </div>
                    <div className='shadow-md rounded-md w-[80%] sm:mb-[20px] md:mb-[20px] lg:mb-0'>
                        <img className='' src="/Images/Rectangle 3966.png" alt="" />
                        <div className='px-[20px]'>
                            <h2 className='mt-[10px] my-[20px] w-[80%] sm:w-full md:w-full lg:w-[80%] sm:my-[10px] md:my-[10px] lg:my-[20px]'>The Power of Community in Mental Health</h2>
                            <i className='text-[#BFC6CA] text-[13px]'>July 25, 2024</i>
                            <p className='text-[14px] mt-[30px] sm:mt-[10px] md:mt-[10px] lg:mt-[30px]'>Explore how connecting with others can enhance your mental well-being. Understand the benefits of support groups and community engagement in your journey to better mental health.</p>  
                        </div>
                        <div className='flex pl-[20px] my-[20px]'>
                            <p className='text-[13px] text-[#A184CF]'>Read More</p>
                            <img className='w-[4%] object-contain ml-[5px]' src="/icons/Arrow_right.png" alt="" />
                        </div>
                    </div>
                    <div className='shadow-md rounded-md w-[80%]'>
                        <img className='' src="/Images/Rectangle 3966 (2).png" alt="" />
                        <div className='px-[20px]'>
                            <h2 className='mt-[10px] my-[20px] w-[80%] sm:w-full md:w-full lg:w-[80%] sm:my-[10px] md:my-[10px] lg:my-[20px]'>How to Create a Healthy Work-Life Balance</h2>
                            <i className='text-[#BFC6CA] text-[13px]'>Published: August 1, 2024</i>
                            <p className='text-[14px] mt-[30px] sm:mt-[10px] md:mt-[10px] lg:mt-[30px]'>Find out how to balance your professional and personal responsibilities. Tips and strategies for setting boundaries, managing stress, and finding time to rest & care.</p> 
                        </div>
                         <div className='flex pl-[20px] my-[20px]'>
                            <p className='text-[13px]  text-[#A184CF]'>Read More</p>
                            <img className='w-[4%] object-contain ml-[5px]' src="/icons/Arrow_right.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default LandingPage