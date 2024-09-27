import styled from "@emotion/styled";
import { TextButtonProps } from "../../../types/Common";

const TextButton = ({ textStr, isActive }: TextButtonProps) => {
  return (
    <TextButtonWrapper className={isActive ? "active" : ""}>
      {textStr}
    </TextButtonWrapper>
  );
};
export default TextButton;

const TextButtonWrapper = styled.button`
  display: flex;
  padding: 8px;
  border: 1px solid var(--brand--border--gray);
  background-color: var(--brand--white);
  border-radius: 8px;

  cursor: pointer;

  :hover {
    background-color: var(--brand--secondary--color);
    color: var(--brand--white);
  }

  &.active {
    background-color: var(--brand--secondary--color);
    color: var(--brand--white);
  }
`;
