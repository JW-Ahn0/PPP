import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import RepoCard from "../RepoCard/RepoCard";
import { RepoCardSlideProps } from "../../../../../types/News/Repo";
import { swiperSettings } from "../../../../../constants/NewsConstant";
import { useEffect, useState } from "react";
const RepoCardSlide = ({
  RepoCardPropsList,
  sliderRef,
}: RepoCardSlideProps) => {
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    RepoCardPropsList.length === 0 ? setIsLoading(true) : setIsLoading(false);
  }, [RepoCardPropsList]);

  return (
    <RepoCardSlideWrapper>
      {isLoading ? (
        <div>Loading...</div> // Loading state 표시
      ) : (
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
      )}
    </RepoCardSlideWrapper>
  );
};

export default RepoCardSlide;
const RepoCardSlideWrapper = styled.div``;
