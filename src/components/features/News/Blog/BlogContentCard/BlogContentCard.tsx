import styled from "@emotion/styled";
import { BlogContentCardProps } from "../../../../../types/News/News";
import BadgeContainer from "../BadgeContainer/BadgeContainer";
import Title from "../Title/Title";
import ProfileDayContainer from "../ProfileDayContainer/ProfileDayContainer";
import Img from "../Img/Img";

const BlogContentCard = ({
  imgPath,
  tagList,
  blogTitle,
  dayStr,
  profileImgPath,
  name,
  size,
}: BlogContentCardProps) => {
  const blogContentCardSize = size ? size : "default";
  return (
    <BlogContentCardWrapper className={blogContentCardSize}>
      <Img imgPath={imgPath} size={blogContentCardSize}></Img>
      <BadgeContainer
        tagList={tagList}
        size={blogContentCardSize}
      ></BadgeContainer>
      <Title titleStr={blogTitle} size={blogContentCardSize}></Title>
      <ProfileDayContainer
        dayStr={dayStr}
        profileImgPath={profileImgPath}
        name={name}
        size={blogContentCardSize}
      ></ProfileDayContainer>
    </BlogContentCardWrapper>
  );
};

export default BlogContentCard;
const BlogContentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--brand--white);
  border-radius: 8px;

  &.default {
    max-width: 300px;
    padding: 12px;
  }
  &.small {
    max-width: 360px;
    padding: 6px;
  }
`;
