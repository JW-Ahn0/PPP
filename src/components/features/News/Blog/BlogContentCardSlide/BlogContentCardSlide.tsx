import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { swiperSettings } from "../../../../../constants/NewsConstant";
import BlogContentCard from "../BlogContentCard/BlogContentCard";
import { BlogContentCardSlideProps } from "../../../../../types/News/Blog";
import { useEffect, useState } from "react";

const BlogCardSlide = ({
  BlogContentCardPropsList,
  sliderRef,
}: BlogContentCardSlideProps) => {
  useEffect(() => {
    BlogContentCardPropsList.length === 0
      ? setIsLoading(true)
      : setIsLoading(false);
  }, [BlogContentCardPropsList]);

  const [isLoading, setIsLoading] = useState(true); // Loading state

  return (
    <BlogCardSlideWrapper>
      {isLoading ? (
        <div>Loading...</div> // Loading state 표시
      ) : (
        <Swiper ref={sliderRef} {...swiperSettings}>
          {BlogContentCardPropsList.map((value, index) => (
            <SwiperSlide key={index}>
              <BlogContentCard
                imgPath={value.imgPath}
                blogTitle={value.blogTitle}
                dayStr={value.dayStr}
                tagList={value.tagList}
                profileImgPath={value.profileImgPath}
                name={value.name}
                url={value.url}
              ></BlogContentCard>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </BlogCardSlideWrapper>
  );
};

export default BlogCardSlide;
const BlogCardSlideWrapper = styled.div``;
