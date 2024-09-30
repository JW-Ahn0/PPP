import styled from "@emotion/styled";
import { ImgProps } from "../../../../../types/News/News";

const Img = ({ imgPath, size }: ImgProps) => {
  const daySize = size ? size : "default";
  return (
    <ImgWrapper
      src={imgPath}
      alt="블로그 포스팅 이미지"
      className={daySize}
    ></ImgWrapper>
  );
};

export default Img;
const ImgWrapper = styled.img`
  &.default {
    height: 182px;
  }
  &.small {
    height: 167px;
  }
`;
