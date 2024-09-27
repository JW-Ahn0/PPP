import styled from "@emotion/styled";
import { CheckBoxProps } from "../../../types/Common";

const CheckBox = ({ textStr, isChecked }: CheckBoxProps) => {
  return (
    <CheckBoxWrapper>
      <input type="checkbox" checked={isChecked} />
      <label>{textStr}</label>
    </CheckBoxWrapper>
  );
};
export default CheckBox;

const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;

  input[type="checkbox"] {
    appearance: none; /* 기본 체크박스 스타일 숨김 */
    width: 19px;
    height: 19px;
    border-radius: 5px;

    border: 2px solid var(--brand--sucess);
  }
  font-size: 1.25rem;

  input[type="checkbox"]:checked {
    border: none;
    background-color: var(--brand--sucess);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input[type="checkbox"]:checked::before {
    content: url("/icons/Checkbox.svg");
    color: var(--brand--white);
  }
`;
