import styled from "@emotion/styled";
import Msg from "../Msg/Msg";
import { AlertProps } from "../../../types/Common";
import TextButton from "../Button/TextButton";
import {
  AlertButtonNoMsg,
  AlertButtonYesMsg,
} from "../../../constants/FooterConstant";

const Alert = ({ isWarning, MsgStr }: AlertProps) => {
  return (
    <AlertWrapper>
      <Msg isWarning={isWarning} MsgStr={MsgStr}></Msg>
      <div id="con--button">
        <TextButton textStr={AlertButtonNoMsg}></TextButton>
        <TextButton textStr={AlertButtonYesMsg} isActive={true}></TextButton>
      </div>
    </AlertWrapper>
  );
};
export default Alert;
const AlertWrapper = styled.div`
  max-width: 500px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 35px;
  border-radius: 8px;
  padding: 29px 0px;
  background-color: var(--brand--white);
  #con--button {
    display: flex;
    gap: 16px;
  }
`;
