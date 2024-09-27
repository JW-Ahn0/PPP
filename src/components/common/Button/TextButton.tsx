import styled from "@emotion/styled";
import { TextButtonProps } from "../../../types/Common";

const TextButton = ({
  textStr,
  isActive,
  isHoverEnabled = false,
}: TextButtonProps) => {
  return (
    <TextButtonWrapper
      className={isActive ? "active" : ""}
      isHoverEnabled={isHoverEnabled}
    >
      {textStr}
    </TextButtonWrapper>
  );
};
export default TextButton;

const TextButtonWrapper = styled.button<{ isHoverEnabled: boolean }>`
  display: flex;
  padding: 8px;
  border: 1px solid var(--brand--border--gray);
  background-color: var(--brand--white);
  border-radius: 8px;

  cursor: pointer;

  // isHoverEnabled가 true일 때만 hover 스타일 적용
  ${({ isHoverEnabled }) =>
    isHoverEnabled &&
    `
    :hover {
      background-color: var(--brand--secondary--color);
      color: var(--brand--white);
    }
  `}

  &.active {
    background-color: var(--brand--secondary--color);
    color: var(--brand--white);
  }
`;
