import { motion } from "framer-motion";
import React from "react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, EffectFade } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../assets/main-slider-1-1.jpg";
import Img2 from "../../assets/main-slider-1-2.jpg";
import Img3 from "../../assets/main-slider-1-3.jpg";
import "./styles.css";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, EffectFade]);

const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    // eslint-disable-next-line no-useless-concat
    return '<span class="' + className + '">' + "</span>";
  },
};

const slideDown = {
  initial: { opacity: 0, y: -120 },
  transition: { duration: 2 },
  whileInView: { opacity: 1, y: 0 },
};

const slideUp = {
  initial: { opacity: 0, y: 120 },
  transition: { duration: 2 },
  whileInView: { opacity: 1, y: 0 },
};

const scaleIn = {
  initial: { opacity: 0.3, scale: 1 },
  transition: { duration: 5 },
  whileInView: { opacity: 0.6, scale: 1.5 },
};

const Hero = () => {
  const [imgKey, setImgKey] = React.useState(new Date());
  return (
    <div className="relative overflow-hidden">
      <Swiper
        pagination={pagination}
        className="mySwiper relative"
        loop={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        effect={"fade"}
        onSlideChange={() => {
          setImgKey(new Date());
        }}
      >
        <SwiperSlide>
          <div className="bg-moniz-black w-full">
            <motion.img
              {...scaleIn}
              className="opacity-60"
              src={Img1}
              alt="Hero1"
              key={imgKey}
            />
            <div className="absolute top-0 flex flex-col h-full justify-center w-full max-w-7xl left-1/2 -translate-x-1/2">
              <motion.p
                {...slideDown}
                key={imgKey + 1}
                className="w-fit text-white uppercase text-base font-bold pb-5 tracking-widest"
              >
                welcome to Moniz Web agency
              </motion.p>
              <motion.h2
                {...slideUp}
                key={imgKey + 2}
                className="w-fit text-white text-8.5xl font-bold mb-9 leading-none"
              >
                Smart web <br /> design agency
              </motion.h2>
              <motion.a
                {...slideUp}
                key={imgKey + 3}
                href="https://layerdrops.com/monizwp/contact/"
                className="bg-primary-moniz rounded-full px-12 py-4 text-white w-fit"
              >
                <span>Free consultation</span>
              </motion.a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-moniz-black w-full">
            <motion.img
              {...scaleIn}
              className="opacity-60"
              src={Img2}
              alt="Hero2"
              key={imgKey + 4}
            />
            <div className="absolute top-0 flex flex-col h-full justify-center w-full max-w-7xl left-1/2 -translate-x-1/2">
              <motion.p
                {...slideDown}
                key={imgKey + 5}
                className="w-fit text-white uppercase text-base font-bold pb-5 tracking-widest"
              >
                welcome to Moniz Web agency
              </motion.p>
              <motion.h2
                {...slideUp}
                key={imgKey + 6}
                className="w-fit text-white text-8.5xl font-bold mb-9 leading-none"
              >
                Smart web <br /> design agency
              </motion.h2>
              <motion.a
                {...slideUp}
                key={imgKey + 7}
                href="https://layerdrops.com/monizwp/contact/"
                className="bg-primary-moniz rounded-full px-12 py-4 text-white w-fit"
              >
                <span>Free consultation</span>
              </motion.a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-moniz-black w-full">
            <motion.img
              {...scaleIn}
              key={imgKey + 8}
              className="opacity-60"
              src={Img3}
              alt="Hero3"
            />
            <div className="absolute top-0 flex flex-col h-full justify-center w-full max-w-7xl left-1/2 -translate-x-1/2">
              <motion.p
                {...slideDown}
                key={imgKey + 9}
                className="w-fit text-white uppercase text-base font-bold pb-5 tracking-widest"
              >
                welcome to Moniz Web agency
              </motion.p>
              <motion.h2
                {...slideUp}
                key={imgKey + 10}
                className="w-fit text-white text-8.5xl font-bold mb-9 leading-none"
              >
                Smart web <br /> design agency
              </motion.h2>
              <motion.a
                {...slideUp}
                key={imgKey + 11}
                href="https://layerdrops.com/monizwp/contact/"
                className="bg-primary-moniz rounded-full px-12 py-4 text-white w-fit"
              >
                <span>Free consultation</span>
              </motion.a>
            </div>
          </div>
        </SwiperSlide>
        <div className="flex absolute z-50 bottom-16 w-full max-w-7xl left-1/2 -translate-x-1/2 gap-x-2">
          <div className="prev rounded-full bg-white/20 cursor-pointer w-14 h-14 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
          </div>
          <div className="next rounded-full bg-white/20 cursor-pointer w-14 h-14 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </Swiper>
      <div>
        <motion.div
          className="rounded-full bg-primary-moniz absolute banner-rotate-right-1"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
        />
        <motion.div
          className="rounded-full absolute banner-rotate-right-2"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
        />
        <motion.div
          className="rounded-full bg-primary-moniz absolute banner-rotate-left-1"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
        />
        <motion.div
          className="rounded-full absolute banner-rotate-left-2"
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 2, repeat: Infinity }}
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
        />
      </div>
    </div>
  );
};
export default Hero;
