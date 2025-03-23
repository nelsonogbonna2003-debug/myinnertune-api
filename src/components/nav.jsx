import { useState } from "react";
import { NavLink } from "react-router-dom";
function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    const colorChange =  () => {
        
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-[#FDFBF5] shadow-md">
                <nav className="flex justify-between items-center  my-[7px] mx-20 h-10 pb-13 sm:mx-5 lg:mx-20">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a href="/"><img className="w-[40%] sm:w-[30%] md:w-[30%] lg:w-[40%]" src="icons/easygold icon.png" alt="" /></a>
                        </div>
                        <div className="w-0 sm:w-10 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/icons/menu.png" alt=""/> : <img className="cursor-pointer" src="/icons/close.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-between items-center text-[14px] space-x-5 text-black sm:hidden md:hidden lg:flex">
                        <li className="text-center font-medium active:text-[#E46924]"><a aria-current="page"  className='hover:text-[#E46924] pr-3' href="/" data-discover="true">Home</a></li>
                        <li className="text-center font-medium active:text-[#E46924]"><a className='hover:text-[#E46924] pr-3' href="/about" data-discover="true">About</a></li>
                        <li className="text-center font-medium active:text-[#E46924]"><a className='hover:text-[#E46924] pr-3' href="/contacts" data-discover="true">Contatcs</a></li>
                    </ul>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[70px] h-full bg-[#e6c4b0] shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="uppercase w-full p-12 space-y-6">
                            <li className="font-medium"><a className='hover:text-[#E46924] font-medium' onClick={showNav} href="/">Home</a></li>
                            <li className="font-medium"><a className='hover:text-[#E46924] font-medium' onClick={showNav} href="/about">About Us</a></li>
                            <li className="font-medium"><a className='hover:text-[#E46924] font-medium' onClick={showNav}  href="/contacts">Contacts</a></li>
                        </ul>
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default NavBar