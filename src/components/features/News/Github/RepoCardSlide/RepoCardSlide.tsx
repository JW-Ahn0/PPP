import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RepoCard from "../RepoCard/RepoCard";
import { RepoCardSlideProps } from "../../../../../types/News/Repo";
import { swiperSettings } from "../../../../../constants/NewsConstant";
const RepoCardSlide = ({
  RepoCardPropsList,
  sliderRef,
}: RepoCardSlideProps) => {
  return (
    <RepoCardSlideWrapper>
      <Swiper ref={sliderRef} {...swiperSettings}>
        {RepoCardPropsList.map((value, index) => (
          <SwiperSlide key={index}>
            <RepoCard
              repoImgPath={value.repoImgPath}
              repoUserProfileImgPath={value.repoUserProfileImgPath}
              titleStr={value.titleStr}
              descriptionStr={value.descriptionStr}
              isDarkMode={true}
              url={value.url}
            ></RepoCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </RepoCardSlideWrapper>
  );
};

export default RepoCardSlide;
const RepoCardSlideWrapper = styled.div``;
