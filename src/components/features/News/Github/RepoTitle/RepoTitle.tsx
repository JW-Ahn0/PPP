import styled from "@emotion/styled";
import { RepoTitleProps } from "../../../../../types/News/Repo";

const RepoTitle = ({ titleStr, size, isDarkMode }: RepoTitleProps) => {
  const darkmode = isDarkMode ? "darkmode" : "";
  const titleSize = size ? (size === "small" ? size : "default") : "default";
  return (
    <RepoTitleWrapper className={titleSize + " " + darkmode}>
      {titleStr}
    </RepoTitleWrapper>
  );
};

export default RepoTitle;
const RepoTitleWrapper = styled.p`
  font-weight: bold;
  &.default {
    font-size: 16px;
  }
  &.small {
    font-size: 18px;
  }
  &.darkmode {
    color: var(--brand--white);
  }
`;
