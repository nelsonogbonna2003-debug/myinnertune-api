import React from 'react';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Swipers() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Add desired modules
      navigation={true} // Enable navigation arrows
      pagination={{
        type: 'fraction',
        renderFraction: (currentClass, totalClass) => {
          return `<span class="${currentClass}"></span><span style="font-size: 20px;"> Of </span><span class="${totalClass}"></span>`;
        },
      }} // Enable pagination dots
      spaceBetween={30} // Space between slides
      slidesPerView={1} // Number of slides visible at a time
      autoplay={{ delay: 5000 }}
    >
      <SwiperSlide>
        <div className=''>
          <img className='w-[25%]' src="/Images/Rectangle 3966.png" alt="" />
          <h2 className='w-[30%] my-[10px]'>Five Effective Strategies for Managing Anxiety</h2>
          <i className='text-[#BFC6CA] text-[13px]'>Published: August 1, 2024</i>
          <p className='w-[30%] text-[14px] my-[10px]'>Discover practical techniques to help manage and reduce anxiety in your daily life. Learn how mindfulness, exercise, and professional support can make a difference.</p>
          <div>
            <p>Read More</p>
            <img src="/icons/Arrow_right.png" alt="" />
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide>
       
      </SwiperSlide>
      <SwiperSlide>
        
      </SwiperSlide> */}
    </Swiper>
  );
}
export default Swipers;
