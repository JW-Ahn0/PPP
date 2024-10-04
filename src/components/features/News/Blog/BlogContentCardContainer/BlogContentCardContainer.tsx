import styled from "@emotion/styled";
import { useRef } from "react";
import { SwiperRef } from "swiper/react";
import ContainerHeader from "../../Common/Header/ContainerHeader";
import { BlogHeaderStr } from "../../../../../constants/NewsConstant";
import BlogContentCardSlide from "../BlogContentCardSlide/BlogContentCardSlide";
import { BlogContentCardContainerProps } from "../../../../../types/News/Blog";

const BlogContentCardContainer = ({
  BlogContentCardPropsList,
}: BlogContentCardContainerProps) => {
  const sliderRef = useRef<SwiperRef>(null);
  return (
    <BlogContentCardContainerWrapper>
      <ContainerHeader
        sliderRef={sliderRef}
        headerStr={BlogHeaderStr}
      ></ContainerHeader>
      <BlogContentCardSlide
        BlogContentCardPropsList={BlogContentCardPropsList}
        sliderRef={sliderRef}
      ></BlogContentCardSlide>
    </BlogContentCardContainerWrapper>
  );
};

export default BlogContentCardContainer;
const BlogContentCardContainerWrapper = styled.div`
  padding: 20px;
`;
