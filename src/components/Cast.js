import React from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Typewriter from "typewriter-effect";
import MembersTypography from "./MembersTypography";

const Cast = () => {
  const movieCastMember = useSelector((store) => store?.cast?.castMembers);
  return (
    <div>
      <div className="container my-5">
        <div className="flex mx-5 font-bold text-5xl">
          Cast&nbsp;Of&nbsp;
          <Typewriter
            options={{
              strings: ["Main Cast", "Supporting Cast"],
              autoStart: true,
              loop: true,
              delay: 30,
              deleteSpeed: 50,
              pauseFor: 4000,
            }}
          />
        </div>

        <div className="flex flex-wrap my-3">
          <Swiper
            spaceBetween={25}
            slidesPerView={4}
            pagination={false}
            navigation={false}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: false }}
            modules={[Autoplay , Navigation]}
            className="mySwiper p-2"
          >
            {movieCastMember
              .filter((filterCast) => filterCast?.profile_path)
              .map((castMember , index) => (
                <SwiperSlide key={index}>
                  <MembersTypography members={castMember} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Cast;
