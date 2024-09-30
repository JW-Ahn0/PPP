import styled from "@emotion/styled";
import { RecuritDueDateProps } from "../../../../../types/News/Saramin";

const RecuritDueDate = ({ dateStr }: RecuritDueDateProps) => {
  return <RecuritDueDateWrapper>{dateStr}</RecuritDueDateWrapper>;
};

export default RecuritDueDate;
const RecuritDueDateWrapper = styled.span`
  font-size: 14px;
  color: var(--brand--gray4);
  text-decoration: underline;
`;
