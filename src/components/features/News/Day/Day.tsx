import styled from "@emotion/styled";
import { DayProps } from "../../../../types/News/News";

const Day = ({ dayStr }: DayProps) => {
  return <DayWrapper>{dayStr}</DayWrapper>;
};

export default Day;
const DayWrapper = styled.span`
  color: var(--brand--gray2);
`;
