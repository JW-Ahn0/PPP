import styled from "@emotion/styled";
import { DayProps } from "../../../../types/News/News";

const Day = ({ dayStr, size }: DayProps) => {
  const daySize = size ? size : "default";
  return <DayWrapper className={daySize}>{dayStr}</DayWrapper>;
};

export default Day;
const DayWrapper = styled.span`
  &.default {
    font-size: 12px;
  }
  &.small {
    font-size: 9px;
  }
  color: var(--brand--gray2);
`;
