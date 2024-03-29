
"use client";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";

import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "../../components//Products/SingleProduct";
import productsData from "../../components/Products/productsData";


export default function Products() {
  return (
    <section
      id="products"
      className="bg-[green]/[.03] py-16"
    >
      <div className="container max-w-full sm:max-w-screen-xl">
        <SectionTitle
          title="Sản phẩm"
          paragraph=""
          center
        />
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          autoplay={true}
          className='swiper-container'
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2
            },
            1479: {
              slidesPerView: 3
            }
          }}
        >
          {productsData.map((item, index) => (
            <SwiperSlide key={index} >
              <SingleProduct key={item.id} product={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
