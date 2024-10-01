import styled from "@emotion/styled";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { swiperSettings } from "../../../../../constants/NewsConstant";
import BlogContentCard from "../BlogContentCard/BlogContentCard";
import { BlogContentCardSlideProps } from "../../../../../types/News/Blog";
const BlogCardSlide = ({
  BlogContentCardPropsList,
  sliderRef,
}: BlogContentCardSlideProps) => {
  return (
    <BlogCardSlideWrapper>
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
            ></BlogContentCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </BlogCardSlideWrapper>
  );
};

export default BlogCardSlide;
const BlogCardSlideWrapper = styled.div``;
