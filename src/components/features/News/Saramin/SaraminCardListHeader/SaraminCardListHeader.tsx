import styled from "@emotion/styled";
import { SaraminCardListHeaderProps } from "../../../../../types/News/Saramin";

const SaraminCardListHeader = ({ sliderRef }: SaraminCardListHeaderProps) => {
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
    <SaraminCardListHeaderWrapper>
      <p>어머, 이건 꼭 봐야돼! 채용 정보</p>
      <div>
        <button className="left" onClick={handlePrev}></button>
        <button className="right" onClick={handleNext}></button>
      </div>
    </SaraminCardListHeaderWrapper>
  );
};

export default SaraminCardListHeader;
const SaraminCardListHeaderWrapper = styled.div`
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
  button {
    width: 45px;
    height: 45px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid var(--brand--gray3);
    border-radius: 8px;
    background-color: var(--brand--white);
    cursor: pointer;
  }
  button.left::before {
    content: url("/icons/Arrow_left.svg");
  }
  button.right::before {
    content: url("/icons/Arrow_right.svg");
  }
`;
