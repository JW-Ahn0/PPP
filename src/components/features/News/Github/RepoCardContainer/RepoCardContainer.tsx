import styled from "@emotion/styled";
import { useRef } from "react";
import { SwiperRef } from "swiper/react";
import ContainerHeader from "../../Common/Header/ContainerHeader";
import { GithubHeaderStr } from "../../../../../constants/NewsConstant";
import RepoCardSlide from "../RepoCardSlide/RepoCardSlide";
import { RepoCardContainerProps } from "../../../../../types/News/Repo";

const RepoCardContainer = ({ RepoCardPropsList }: RepoCardContainerProps) => {
  const sliderRef = useRef<SwiperRef>(null);

  return (
    <RepoCardContainerWrapper>
      <ContainerHeader
        sliderRef={sliderRef}
        headerStr={GithubHeaderStr}
      ></ContainerHeader>
      <RepoCardSlide
        RepoCardPropsList={RepoCardPropsList}
        sliderRef={sliderRef}
      ></RepoCardSlide>
    </RepoCardContainerWrapper>
  );
};

export default RepoCardContainer;
const RepoCardContainerWrapper = styled.div``;
