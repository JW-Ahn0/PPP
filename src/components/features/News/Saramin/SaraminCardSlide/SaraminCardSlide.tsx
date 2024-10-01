import styled from "@emotion/styled";
import SaraminCard from "../SaraminCard/SaraminCard";
import { SaraminCardSlideProps } from "../../../../../types/News/Saramin";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { swiperSettings } from "../../../../../constants/NewsConstant";
const SaraminCardSlide = ({
  SaraminCardPropsList,
  sliderRef,
}: SaraminCardSlideProps) => {
  return (
    <SaraminCardSlideWrapper>
      <Swiper ref={sliderRef} {...swiperSettings}>
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
