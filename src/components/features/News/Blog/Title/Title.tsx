import styled from "@emotion/styled";
import { TitleProps } from "../../../../../types/News/Blog";

const Title = ({ titleStr, size }: TitleProps) => {
  const titleSize = size ? (size === "small" ? size : "default") : "default";
  return <TitleWrapper className={titleSize}>{titleStr}</TitleWrapper>;
};

export default Title;
const TitleWrapper = styled.span`
  display: -webkit-box; /* flexbox의 기능을 사용 */
  -webkit-box-orient: vertical; /* 수직 방향으로 정렬 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  -webkit-line-clamp: 2; /* 표시할 줄 수 */
  min-height: 51px;
  max-height: 51px;
  color: black;
  &.default {
    font-size: 18px;
  }
  &.small {
    font-size: 12px;
  }
  font-weight: bold;
`;
