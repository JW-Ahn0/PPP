import styled from "@emotion/styled";
import SaraminCard from "../SaraminCard/SaraminCard";
import { SaraminCardSlideProps } from "../../../../../types/News/Saramin";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const SaraminCardSlide = ({
  SaraminCardPropsList,
  sliderRef,
}: SaraminCardSlideProps) => {
  return (
    <SaraminCardSlideWrapper>
      <Swiper
        ref={sliderRef}
        slidesPerView={1}
        breakpoints={{
          500: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {SaraminCardPropsList.map((value, index) => (
          <SwiperSlide key={index}>
            <SaraminCard
              logoImgPath={value.logoImgPath}
              titleStr={value.titleStr}
              compnayNameStr={value.compnayNameStr}
              locationImgPath={value.locationImgPath}
              conditionStr={value.conditionStr}
              dateStr={value.dateStr}
            ></SaraminCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </SaraminCardSlideWrapper>
  );
};

export default SaraminCardSlide;
const SaraminCardSlideWrapper = styled.div``;
