import styled from "@emotion/styled";
import RepoProfileCard from "../RepoProfileCard/RepoProfileCard";
import RepoContentCard from "../RepoContentCard/RepoContentCard";
import { RepoCardProps } from "../../../../../types/News/Repo";

const RepoCard = ({
  repoImgPath,
  repoUserProfileImgPath,
  titleStr,
  descriptionStr,
  size,
  isDarkMode,
}: RepoCardProps) => {
  const darkmode = isDarkMode ? "darkmode" : "";
  const repoCardSize = size ? (size === "small" ? size : "default") : "default";
  return (
    <RepoCardWrapper className={repoCardSize + " " + darkmode}>
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
const RepoCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  background-color: var(--brand--white);
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
