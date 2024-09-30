import styled from "@emotion/styled";
import { RepoImgProps } from "../../../../../types/News/Repo";

const RepoImg = ({ imgPath, size }: RepoImgProps) => {
  const imgSize = size ? (size === "small" ? size : "default") : "default";
  return (
    <RepoImgWrapper
      src={imgPath}
      alt="레포 이미지"
      className={imgSize}
    ></RepoImgWrapper>
  );
};

export default RepoImg;
const RepoImgWrapper = styled.img`
  &.default {
    height: 132px;
  }
  &.small {
    height: 155px;
  }
`;
