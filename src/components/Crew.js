import React from "react";
import { useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Typewriter from "typewriter-effect";
import MembersTypography from "./MembersTypography";

const Crew = () => {
  const movieCrewMember = useSelector((store) => store?.cast?.crewMembers);
  return (
    <div>
      <div className="container my-5">
        <div className="flex mx-5 font-bold text-5xl">
          Production Crew&nbsp;
          <Typewriter
            options={{
              strings: [
                "Director",
                "Art Department",
                "Sound Department",
                "Screenwriter",
              ],
              autoStart: true,
              loop: true,
              delay: 30,
              deleteSpeed: 50,
              pauseFor: 2000,
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
              delay: 2000,
              disableOnInteraction: false,
            }}
            scrollbar={{ draggable: false }}
            modules={[Autoplay, Navigation]}
            className="mySwiper p-2"
          >
            {movieCrewMember
              .filter((filterCast) => filterCast?.profile_path)
              .map((crewMember , index) => (
                <SwiperSlide key={index}>
                  <MembersTypography members={crewMember} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Crew;
