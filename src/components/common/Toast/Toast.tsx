import styled from "@emotion/styled";
import { ToastProps } from "../../../types/Common";
import Msg from "../Msg/Msg";

const Toast = ({ isWarning, MsgStr }: ToastProps) => {
  return (
    <ToastWrapper>
      <Msg isWarning={isWarning} MsgStr={MsgStr} />
    </ToastWrapper>
  );
};

export default Toast;
const ToastWrapper = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-radius: 21px;
  background-color: rgba(var(--brand--gray2--rgb), var(--opacity--50));
`;
