import styled from "@emotion/styled";
import { RecuritConditionProps } from "../../../../../types/News/Saramin";

const RecuritCondition = ({ conditionStr }: RecuritConditionProps) => {
  return (
    <RecuritConditionWrapper>
      <span>{conditionStr}</span>
    </RecuritConditionWrapper>
  );
};
export default RecuritCondition;
const RecuritConditionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: var(--brand--gray3);
  text-decoration: underline;
`;
