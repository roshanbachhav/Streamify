import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import useRecommandedMovies from "../hooks/useRecommandedMovies";
import { useSelector } from "react-redux";
import { POSTER_URL } from "../utils/constants";

const MiniSwiper = ({ id }) => {
  useRecommandedMovies(id);
  const recommendedMovieLists = useSelector(
    (store) => store?.movies?.recommendedMovies
  );

  const rm =
    recommendedMovieLists.length > 0 ? recommendedMovieLists.flat() : [];

  return (
    <div className="absolute container flex justify-start w-96 mt-44">
      {/* <h1 className="text-white text-3xl flex absolute justify-center -top-10 right-24">Recommanded</h1> */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {recommendedMovieLists
          .filter((filteredPhoto) => filteredPhoto.poster_path && filteredPhoto?.backdrop_path)
          .map((rm) => (
            <SwiperSlide key={rm.id}>
              <img
                alt="recommended-movies"
                src={POSTER_URL + rm?.poster_path || rm?.backdrop_path}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MiniSwiper;
