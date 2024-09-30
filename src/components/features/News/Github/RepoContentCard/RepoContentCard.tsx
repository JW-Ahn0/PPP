import styled from "@emotion/styled";
import { RepoContentCardProps } from "../../../../../types/News/Repo";
import RepoTitle from "../RepoTitle/RepoTitle";
import RepoDescription from "../RepoDescription/RepoDescription";

const RepoContentCard = ({
  titleStr,
  descriptionStr,
  size,
  isDarkMode,
}: RepoContentCardProps) => {
  const descriptionStrSize = size
    ? size === "small"
      ? size
      : "default"
    : "default";
  return (
    <RepoContentCardWrapper className={descriptionStrSize}>
      <RepoTitle
        titleStr={titleStr}
        size={size}
        isDarkMode={isDarkMode}
      ></RepoTitle>
      <RepoDescription
        descriptionStr={descriptionStr}
        size={size}
        isDarkMode={isDarkMode}
      ></RepoDescription>
    </RepoContentCardWrapper>
  );
};

export default RepoContentCard;
const RepoContentCardWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 16px;
  &.default {
    max-width: 140px;
  }
  &.small {
    max-width: 165x;
  }
`;
