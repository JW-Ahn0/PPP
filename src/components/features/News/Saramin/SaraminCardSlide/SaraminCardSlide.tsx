import styled from "@emotion/styled";
import SaraminCard from "../SaraminCard/SaraminCard";
import { SaraminCardSlideProps } from "../../../../../types/News/Saramin";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { swiperSettings } from "../../../../../constants/NewsConstant";
import { useEffect, useState } from "react";
const SaraminCardSlide = ({
  SaraminCardPropsList,
  sliderRef,
}: SaraminCardSlideProps) => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    SaraminCardPropsList.length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [SaraminCardPropsList]);

  return (
    <SaraminCardSlideWrapper>
      {isLoading ? (
        <div>Loading...</div> // Loading state 표시
      ) : (
        <Swiper ref={sliderRef} {...swiperSettings}>
          {SaraminCardPropsList.map((value, index) => (
            <SwiperSlide key={index}>
              <SaraminCard
                titleStr={value.titleStr}
                compnayNameStr={value.compnayNameStr}
                conditionStr={value.conditionStr}
                dateStr={value.dateStr}
                logoImgPath={value.logoImgPath}
                url={value.url}
              ></SaraminCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </SaraminCardSlideWrapper>
  );
};

export default SaraminCardSlide;
const SaraminCardSlideWrapper = styled.div``;
