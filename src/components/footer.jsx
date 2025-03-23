function Footer() {
    return (
        <>
            <div className="bg-[#FDFBF4] mt-[30px] sm:p-2 md:p-2 lg:p-4">
                <div className="grid grid-cols-3 gap-12 px-[30px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 p-4">
                    <div>
                        <img className="w-[35%] mb-[20px] sm:w-[50%] md:w-[50%] lg:w-[35%]" src="/icons/easygold icon.png" alt="" />
                        <p className="text-[15px]">At EasyGold, we are dedicated to providing accessible mental health support and resources. Our mission is to empower individuals on their journey to mental well-being through personalized care, community support, and expert guidance.</p>
                    </div>
                    <div>
                        <h1 className='mb-2 text-[50px] text-[#0C394A] sm:text-[17px] md:text-[25px] font-bold'>Useful Links</h1>
                        <div className="mt-[20px] flex flex-col space-y-4 text-[15px]">
                            <a href="">About Us</a>
                            <a href="">Programs</a>
                            <a href="">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h1 className='mb-2 text-[50px] text-[#0C394A] sm:text-[17px] md:text-[25px] font-bold'>Contact Details</h1>
                        <div className="text-[15px]">
                            <p className="w-[50%] sm:w-[95%] md:w-[80%] lg:w-[50%]">1234 Wellness Blvd, Suite 567 VGC, Lekki, Lagos.</p>
                            <p>Email: support@easygold.org</p>
                            <p>Phone: 08021996733</p>
                            <div className="flex space-x-3 mt-[10px]">
                                <img className="w-[5%] object-contain" src="/icons/Path_2520.png" alt="" />
                                <img className="w-[5%] object-contain" src="/icons/facebook.png" alt="" />
                                <img className="w-[5%] object-contain" src="/icons/instagram.png" alt="" />
                                <img className="w-[5%] object-contain" src="/icons/skill-icons_twitter.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <footer className="py-[20px] flex justify-center items-center bg-[#FDFBF4] text-gray-500">&copy;Copyrights 2025 Easygold. All Rights Reserved.</footer>
        </>
    )
}
export default Footer