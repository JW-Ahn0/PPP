import styled from "@emotion/styled";
import { SlideButtonProps } from "../../../types/Common";

const SlideButton = ({ type, onClick }: SlideButtonProps) => {
  return (
    <SlideButtonWrapper onClick={onClick} className={type}></SlideButtonWrapper>
  );
};
export default SlideButton;

const SlideButtonWrapper = styled.button`
  width: 45px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid var(--brand--gray3);
  border-radius: 8px;
  background-color: var(--brand--white);
  cursor: pointer;

  &.prev::before {
    content: url("/icons/Arrow_left.svg");
  }
  &.next::before {
    content: url("/icons/Arrow_right.svg");
  }
`;
