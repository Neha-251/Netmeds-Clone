
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import "swiper/css/navigation";
import "swiper/css/pagination";
 import "./slider.css"

 import { Navigation, Pagination, Autoplay } from "swiper";



export const Slider = () => {
	return (
	  <Swiper
		spaceBetween={50}
		slidesPerView={1}
		onSlideChange={() => console.log('slide change')}
		onSwiper={(swiper) => console.log(swiper)}
		navigation={true} 
		pagination={true}
		autoplay={true}
		modules={[Navigation, Pagination, Autoplay]}
		className="mySwiper"
	  >
		<SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1651585029_Web_Home_Kareena_Banner_Final.jpg"/></SwiperSlide>
		<SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1651498134_sdvbnm.jpg"/></SwiperSlide>
		<SwiperSlide><img src="	https://www.netmeds.com/images/cms/aw_rbslider/slides/1651585128_asddakakasdm.jpg"/></SwiperSlide>
		<SwiperSlide><img src="https://www.netmeds.com/images/cms/aw_rbslider/slides/1651585618_asdfkasf.jpg"/></SwiperSlide>
	  </Swiper>
	);
};