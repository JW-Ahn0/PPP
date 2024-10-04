import styled from "@emotion/styled";
import { RepoUserProfileImgProps } from "../../../../../types/News/Repo";

const RepoUserProfile = ({ imgPath, size }: RepoUserProfileImgProps) => {
  const imgSize = size ? (size === "small" ? size : "default") : "default";
  return (
    <RepoUserProfileWrapper
      src={imgPath}
      alt="레포 유저 프로필 이미지"
      className={imgSize}
    ></RepoUserProfileWrapper>
  );
};

export default RepoUserProfile;

const RepoUserProfileWrapper = styled.img`
  border-radius: 50%;
  &.default {
    width: 35px;
    height: 35px;
  }
  &.small {
    width: 41px;
    height: 41px;
  }
`;
