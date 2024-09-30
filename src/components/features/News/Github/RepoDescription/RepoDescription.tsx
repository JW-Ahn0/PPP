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
  text-overflow: ellipsis;

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
