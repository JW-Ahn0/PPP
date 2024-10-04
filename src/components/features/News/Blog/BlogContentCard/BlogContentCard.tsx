import styled from "@emotion/styled";
import { BlogContentCardProps } from "../../../../../types/News/Blog";
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
  url,
  size,
}: BlogContentCardProps) => {
  const blogContentCardSize = size
    ? size === "small"
      ? size
      : "default"
    : "default";
  return (
    <BlogContentCardWrapper
      className={blogContentCardSize}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
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
const BlogContentCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--brand--white);
  border: 1px solid var(--brand--gray3);
  border-radius: 24px;

  text-decoration: none;
  &:visited {
    color: inherit;
  }

  &.default {
    max-width: 300px;
    padding: 12px;
  }
  &.small {
    max-width: 360px;
    padding: 6px;
  }
`;
