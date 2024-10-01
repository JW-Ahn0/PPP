import styled from "@emotion/styled";
import SlideButton from "../../../../common/Button/SlideButton";
import { ContainerHeaderProps } from "../../../../../types/Common";

const ContainerHeader = ({ headerStr, sliderRef }: ContainerHeaderProps) => {
  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.swiper.slidePrev();
    }
  };
  return (
    <SContainerHeaderWrapper>
      <p>{headerStr}</p>
      <div>
        <SlideButton type={"prev"} onClick={handlePrev}></SlideButton>
        <SlideButton type={"next"} onClick={handleNext}></SlideButton>
      </div>
    </SContainerHeaderWrapper>
  );
};

export default ContainerHeader;
const SContainerHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
  div {
    display: flex;
    gap: 30px;
  }

  p {
    font-size: 24px;
    font-weight: bold;
  }
`;
