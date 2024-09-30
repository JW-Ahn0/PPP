import styled from "@emotion/styled";
import RepoImg from "../RepoImg/RepoImg";
import RepoUserProfile from "../RepoUserProfile/RepoUserProfile";
import { RepoProfileCardProps } from "../../../../../types/News/Repo";

const RepoProfileCard = ({
  repoImgPath,
  repoUserProfileImgPath,
  size,
}: RepoProfileCardProps) => {
  const cardSize = size ? (size === "small" ? size : "default") : "default";
  return (
    <RepoProfileCardWrapper>
      <RepoImg imgPath={repoImgPath} size={cardSize}></RepoImg>
      <RepoUserProfile
        imgPath={repoUserProfileImgPath}
        size={cardSize}
      ></RepoUserProfile>
    </RepoProfileCardWrapper>
  );
};

export default RepoProfileCard;
const RepoProfileCardWrapper = styled.div`
  position: relative;
  // RepoUserProfile을 오른쪽 구석에 위치시키기
  & > :nth-child(2) {
    position: absolute;
    bottom: 0;
    transform: translateX(-110%) translateY(-20%);
  }
`;
