import styled from "@emotion/styled";
import { BadgeContainerProps } from "../../../../../types/News/News";
import Badge from "../Badge/Badge";

const BadgeContainer = ({ tagList, size }: BadgeContainerProps) => {
  const badgeContainerSize = size ? size : "default";
  return (
    <BadgeContainerWrapper className={badgeContainerSize}>
      {tagList?.map((tag, index) => (
        <Badge key={index} badgeStr={tag} size={badgeContainerSize}></Badge>
      ))}
    </BadgeContainerWrapper>
  );
};

export default BadgeContainer;
const BadgeContainerWrapper = styled.div`
  display: flex;
  &.default {
    gap: 6px;
  }
  &.small {
    gap: 4px;
  }
`;
