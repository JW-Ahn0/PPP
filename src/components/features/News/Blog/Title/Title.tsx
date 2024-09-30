import styled from "@emotion/styled";
import { TitleProps } from "../../../../../types/News/News";

const Title = ({ titleStr, size }: TitleProps) => {
  const titleSize = size ? size : "default";
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
