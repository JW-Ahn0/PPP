import styled from "@emotion/styled";
import { DayProps } from "../../../../../types/News/News";

const Day = ({ dayStr, size }: DayProps) => {
  const daySize = size ? size : "default";
  return <DayWrapper className={daySize}>{dayStr}</DayWrapper>;
};

export default Day;
const DayWrapper = styled.span`
  display: flex;
  align-items: center;
  color: var(--brand--gray2);

  &.default {
    font-size: 12px;
  }
  &.small {
    font-size: 9px;
  }
`;
