import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'
function Contacts  () {
    return (
        <>
            <Navbar/>
            <section className='con block py-[190px] sm:py-[50px] md:py-[50px] lg:py-[190px]'>
                <div className='flex justify-center'>
                    <h2 className="text-[50px] text-white font-bold sm:text-[30px] md:text-[40px] lg:w-[50px]">Contact Us</h2>
                </div>
            </section>
            <section>
                <div className='grid grid-cols-2 gap-4 bg-gray-100 place-items-center py-[40px] px-[40px] sm:px-[10px] md:px-[10px] lg:px-[40px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='flex flex-col bg-white py-[20px] px-[30px] rounded-md w-[90%]'>
                        <h2 className='font-medium text-[19px]'>Contact Us</h2>
                        <p className='text-[14px] my-[10px]'>Reach out to us, we always respond</p>
                        <form action="">
                            <div className='flex flex-col'>
                                <label htmlFor="name" className='mb-[10px]'>Name</label>
                                <input className='pl-[10px] py-[5px] mb-[10px] outline-none bg-transparent border-b border-b' type="text" placeholder='Full Name *' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="name"  className='mb-[10px]'>Email</label>
                                <input className='pl-[10px] py-[5px] mb-[10px] outline-none bg-transparent border-b border-b' type="email" placeholder='eg Jamesbond@gmail.com' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="subject" className='mb-[10px]'>Subject</label>
                                <input className='pl-[10px] py-[5px] mb-[10px] outline-none bg-transparent border-b border-b' type="text" placeholder='Give it a title' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="message" className='mb-[10px]'>Message</label>
                                <textarea className='pl-[10px] py-[5px] mb-[10px] outline-none bg-transparent border-b border-b' name="message" id="" cols="3" rows="2"></textarea>
                            </div>
                            <button type="submit" className='w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700'>Send Message</button>
                        </form>
                    </div>
                    <div className='flex flex-col bg-white py-[20px] px-[30px] rounded-md w-[90%] sm:px-[10px] md:px-[10px] lg:px-[40px]'>
                        <h2 className='font-medium text-[19px]'>More ways to find us</h2>
                        <p className='text-[14px] my-[10px]'>Reach out to us, we always respond</p>
                        <div className='flex items-center space-x-4'>
                            <span className='text-green-500 text-2xl'>📞</span>
                            <p className='text-gray-700'>+2347047600061</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-green-500 text-2xl'>📧</span>
                            <p className='text-gray-700'>info@metadigitalservices.ng</p>
                        </div>
                        <div className='flex items-center space-x-4'>
                            <span className='text-green-500 text-2xl'>📧</span>
                            <p className='text-gray-700'>Metadigitalservices@icloud.com</p>
                        </div>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31717.7608172036!2d3.4020720652254584!3d6.429992133944634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52dc0328169%3A0x7885a1a33689a576!2sVictoria%20Island%2C%20Lagos%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1742747947707!5m2!1sen!2sng" className='w-full h-[41vh] border-none' allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Contacts