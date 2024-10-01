import styled from "@emotion/styled";
import { SaraminCardContainerProps } from "../../../../../types/News/Saramin";
import { useRef } from "react";
import SaraminCardListHeader from "../SaraminCardListHeader/SaraminCardListHeader";
import SaraminCardSlide from "../SaraminCardSlide/SaraminCardSlide";
import { SwiperRef } from "swiper/react";

const SaraminCardContainer = ({
  SaraminCardPropsList,
}: SaraminCardContainerProps) => {
  const sliderRef = useRef<SwiperRef>(null);

  return (
    <SaraminCardContainerWrapper>
      <SaraminCardListHeader sliderRef={sliderRef}></SaraminCardListHeader>
      <SaraminCardSlide
        SaraminCardPropsList={SaraminCardPropsList}
        sliderRef={sliderRef}
      ></SaraminCardSlide>
    </SaraminCardContainerWrapper>
  );
};

export default SaraminCardContainer;
const SaraminCardContainerWrapper = styled.div``;
