import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
function About () {
    return (
        <>
            <Navbar/>
            <section className='about block py-[190px] sm:py-[50px] md:py-[50px] lg:py-[40px]'>
                <div className='flex justify-center'>
                    <h2 className="text-[50px] text-white sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold">About Us</h2>
                </div>
            </section>
            <section>
                <div className='flex justify-center items-center mt-[80px] flex-col'>
                <div className="relative flex items-center justify-center w-48 h-48">
                    <svg width="100%" height="100%" viewBox="0 0 200 200" className="absolute">
                        <defs>
                        <path
                            id="circlePath"
                            d="M 100, 100
                            m -80, 0
                            a 80,80 0 1,1 160,0
                            a 80,80 0 1,1 -160,0"
                        />
                        </defs>
                        <text fill="black" fontSize="15">
                        <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                            · EasyGold Initiative · Empowering your journey to mental well-being ·
                        </textPath>
                        </text>
                    </svg>
                    <img
                        src="/icons/easygold icon.png" // Replace with actual path
                        alt="EasyGold Initiative"
                        className="w-[80%]"
                    />
                    </div>
                    <p className='mt-[40px] text-center w-[60%] sm:w-[90%] md:w-[90%] lg:w-[60%]'>We are defined by compassion, integrity, and commitment. We pledge not only to offer innovative mental wellbeing support but also to share years of expertise and experience in fostering emotional resilience and holistic wellness.</p>
                </div>
            </section>
            <section>
                <div className='mt-[70px] bg-[#E46924] flex justify-center items-center px-[60px] py-[70px] sm:flex-col md:flex-col lg:flex-row sm:px-[20px] md:px-[20px] lg:px-[60px]'>
                    <img className='rounded-[120px] w-[45%] sm:w-full md:w-full lg:w-[45%] sm:mb-[20px] md:mb-[20px] lg:mb-0' src="/Images/easy2_geil4i.jpg" alt="" />
                    <div className='pl-[40px] sm:pl-[20px] md:pl-[20px] lg:pl-[40px]'>
                        <h2 className="text-[30px] text-white sm:text-[25px] md:text-[27px] lg:text-[30px] font-bold mb-[10px]">Our Mission</h2>
                        <p className='text-white w-[80%] sm:w-full md:w-full lg:w-[80%]'>To empower individuals and communities through innovative mental wellbeing services that promote resilience, enhance emotional balance, and foster sustainable personal growth in an ever-evolving world.</p>    
                    </div>
                </div>
            </section>
            <section>
                <div className='mt-[70px] bg-white flex justify-center items-center px-[60px] py-[70px] sm:flex-col md:flex-col lg:flex-row sm:px-[20px] md:px-[20px] lg:px-[60px]'>
                    <div className='pr-[40px] sm:pr-[20px] md:pr-[20px] lg:pr-[40px]'>
                        <h2 className="text-[30px] sm:text-[25px] md:text-[27px] lg:text-[30px] font-bold mb-[10px]">Our Vision</h2>
                        <p className='w-[70%] sm:w-full md:w-full lg:w-[70%]'>To be the leading provider of transformative mental wellbeing services, setting the standard for innovation, compassion, and reliability in Nigeria and, ultimately, the global community.</p>    
                    </div>
                    <img className='rounded-[120px] w-[40%] sm:w-[90%] md:w-[90%] lg:w-[40%] sm:mt-[20px] md:mt-[20px] lg:mt-0' src="/Images/easy3_ufkftn.jpg" alt="" />
                  
                </div>
            </section>
            <section>
                <div className='grid grid-cols-3 gap-4 pl-[80px] place-items-center bg-[#F9FAFB] py-[30px] sm:pl-[30px] md:pl-[30px] lg:pl-[80px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                    <div>
                        <img className='w-[15%]' src="/icons/icon1_kfixrw.png" alt="" />
                        <h2 className='text-[#E46924] font-medium'>Clear Minds</h2>
                        <p className='text-[14px] w-[70%]'>To make the vision of accessible and transparent mental wellbeing a reality.</p>
                    </div>
                    <div>
                        <img className='w-[15%]' src="/icons/icon3_rtz1rv.png" alt="" />
                        <h2 className='text-[#E46924] font-medium'>Cutting-Edge Tools</h2>
                        <p className='text-[14px] w-[70%]'>Empowering wellbeing with AI-driven insights and Big Data technology.</p>
                    </div>
                    <div>
                        <img className='w-[15%]' src="/icons/icon2_efrllt.png" alt="" />
                        <h2 className='text-[#E46924] font-medium'>Empowered Growth</h2>
                        <p className='text-[14px] w-[70%]'>TDedicated to continuously innovating solutions for sustainable wellbeing.</p>
                    </div>
                </div>
            </section>
            <section className='bg-[#F9FAFB] mt-[40px] py-[30px]'>
                <h2 className="text-[30px] text-center sm:text-[17px] md:text-[30px] font-bold mb-[10px]">Our Partner</h2>
                <div className='grid grid-cols-6 gap-4 pl-[80px] py-[30px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
                   <img className='w-[30%]' src="/icons/hp-hewlett-packard_201-min_ppjgqb.png" alt="" />
                   <img className='w-[50%]' src="/icons/download_20_5_-min_ki1cw7.png" alt="" />
                   <img className='w-[50%]' src="/icons/Vector-min_mcehtv.png" alt="" />
                   <img className='w-[40%]' src="/icons/unival_group_gmbh_logo-min_gdxrlt.jpg" alt="" />
                   <img className='w-[50%]' src="/icons/download_20_5_-min_ki1cw7.png" alt="" />
                   <img className='w-[50%]' src="/icons/download_20_5_-min_ki1cw7.png" alt="" />
                </div>
            </section>
            <section>
                <div className='grid grid-cols-3 gap-4 standard py-[120px] px-[30px] sm:pt-[20px] md:pt-[20px] lg:pt-[120px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3'>
                    <div>
                        <div className='bg-white px-[20px] py-[20px] rounded-md'>
                            <h2 className='font-medium mb-[5px]'>Global Standard</h2>
                            <p className='text-[13px]'>We maintain a process that is globally accepted.</p>
                        </div>
                        <div className='bg-white px-[20px] py-[20px] rounded-md mt-[130px] sm:mt-[10px] md:mt-[10px] lg:mt-[130px]'>
                            <h2 className='font-medium mb-[5px]'>Advanced Technology</h2>
                            <p className='text-[13px]'>We use the latest technology to drive innovative solutions.</p>
                        </div>
                    </div>
                    <div className='sm:flex sm:justify-center sm:items-center'>
                        <img className='sm:w-[40%] md:w-[40%] lg:w-full cl' src="/Images/Africa_20Vectoe_l1jnju.png" alt="" />
                    </div>
                    <div>
                        <div className='bg-white px-[20px] py-[20px] rounded-md'>
                            <h2 className='font-medium mb-[5px]'>Partnerships</h2>
                            <p className='text-[13px]'>Our international partnerships ensure seamless delivery.</p>
                        </div>
                        <div className='bg-white px-[20px] py-[20px] rounded-md mt-[130px] sm:mt-[10px] md:mt-[10px] lg:mt-[130px]'>
                            <h2 className='font-medium mb-[5px]'>Accountability</h2>
                            <p className='text-[13px]'>Accountability is our foundation. We ensure transparency and efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex justify-center items-center px-[60px] py-[70px] bg-[#FDFBF4] sm:flex-col md:flex-col lg:flex-row sm:px-[20px] md:px-[20px] lg:px-[60px]'>
                    <img className='rounded-[120px] w-[40%]  sm:w-[90%] md:w-[90%] lg:w-[40%] sm:mb-[20px] md:mb-[20px] lg:mb-0' src="/Images/Frame_201597882168_qriry8.png" alt="" />
                    <div className='pl-[60px] sm:pl-[20px] md:pl-[20px] lg:pl-[60px]'>
                        <h2 className="text-[25px] sm:text-[17px] md:text-[25px] font-bold mb-[10px]">Expanding Mental Health Support Globally</h2>
                        <p className='w-[80%] sm:w-full md:w-full lg:w-[80%]'>Devoted to broadening its reach beyond Africa, delivering exceptional mental health solutions. Our goal is to foster innovation while providing accessible, compassionate, and effective support systems that uplift individuals and communities worldwide.</p>    
                    </div>                  
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default About