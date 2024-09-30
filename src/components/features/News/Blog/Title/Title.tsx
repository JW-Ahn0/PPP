import styled from "@emotion/styled";
import { TitleProps } from "../../../../../types/News/Blog";

const Title = ({ titleStr, size }: TitleProps) => {
  const titleSize = size ? (size === "small" ? size : "default") : "default";
  return <TitleWrapper className={titleSize}>{titleStr}</TitleWrapper>;
};

export default Title;
const TitleWrapper = styled.span`
  &.default {
    font-size: 18px;
  }
  &.small {
    font-size: 12px;
  }
  font-weight: bold;
`;
