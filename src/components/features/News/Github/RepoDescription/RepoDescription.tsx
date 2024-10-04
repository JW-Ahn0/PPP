import styled from "@emotion/styled";
import { RepoDescriptionProps } from "../../../../../types/News/Repo";

const RepoDescription = ({
  descriptionStr,
  size,
  isDarkMode,
}: RepoDescriptionProps) => {
  const darkmode = isDarkMode ? "darkmode" : "";
  const descriptionStrSize = size
    ? size === "small"
      ? size
      : "default"
    : "default";
  return (
    <RepoDescriptionWrapper className={descriptionStrSize + " " + darkmode}>
      {descriptionStr}
    </RepoDescriptionWrapper>
  );
};

export default RepoDescription;
const RepoDescriptionWrapper = styled.span`
  display: -webkit-box; /* flexbox의 기능을 사용 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  -webkit-box-orient: vertical; /* 수직 방향으로 정렬 */
  -webkit-line-clamp: 4; /* 표시할 줄 수 */

  &.default {
    font-size: 10px;
  }
  &.small {
    font-size: 12px;
  }

  &.darkmode {
    color: var(--brand--white);
  }
`;
