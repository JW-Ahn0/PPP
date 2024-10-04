import styled from "@emotion/styled";
import RepoProfileCard from "../RepoProfileCard/RepoProfileCard";
import RepoContentCard from "../RepoContentCard/RepoContentCard";
import { RepoCardProps } from "../../../../../types/News/Repo";

const RepoCard = ({
  repoImgPath,
  repoUserProfileImgPath,
  titleStr,
  descriptionStr,
  url,
  size,
  isDarkMode,
}: RepoCardProps) => {
  const darkmode = isDarkMode ? "darkmode" : "";
  const repoCardSize = size ? (size === "small" ? size : "default") : "default";
  return (
    <RepoCardWrapper
      className={repoCardSize + " " + darkmode}
      href={url}
      target="_blank"
    >
      <RepoProfileCard
        repoImgPath={repoImgPath}
        repoUserProfileImgPath={repoUserProfileImgPath}
        size={repoCardSize}
      ></RepoProfileCard>
      <RepoContentCard
        titleStr={titleStr}
        descriptionStr={descriptionStr}
        isDarkMode={isDarkMode}
        size={repoCardSize}
      ></RepoContentCard>
    </RepoCardWrapper>
  );
};
export default RepoCard;
const RepoCardWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid var(--brand--gray3);
  border-radius: 24px;
  background-color: var(--brand--white);

  text-decoration: none;
  &:visited {
    color: inherit;
  }

  &.default {
    max-width: 300px;
  }
  &.small {
    max-width: 360px;
  }

  &.darkmode {
    background-color: var(--brand--darker--blue);
  }
`;
