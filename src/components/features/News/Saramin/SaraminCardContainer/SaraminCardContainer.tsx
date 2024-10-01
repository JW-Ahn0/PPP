import styled from "@emotion/styled";
import { SaraminCardContainerProps } from "../../../../../types/News/Saramin";
import { useRef } from "react";
import SaraminCardSlide from "../SaraminCardSlide/SaraminCardSlide";
import { SwiperRef } from "swiper/react";
import ContainerHeader from "../../Common/Header/ContainerHeader";
import { SaraminHeaderStr } from "../../../../../constants/NewsConstant";

const SaraminCardContainer = ({
  SaraminCardPropsList,
}: SaraminCardContainerProps) => {
  const sliderRef = useRef<SwiperRef>(null);

  return (
    <SaraminCardContainerWrapper>
      <ContainerHeader
        sliderRef={sliderRef}
        headerStr={SaraminHeaderStr}
      ></ContainerHeader>
      <SaraminCardSlide
        SaraminCardPropsList={SaraminCardPropsList}
        sliderRef={sliderRef}
      ></SaraminCardSlide>
    </SaraminCardContainerWrapper>
  );
};

export default SaraminCardContainer;
const SaraminCardContainerWrapper = styled.div``;
