import styled from "@emotion/styled";
import { MsgProps } from "../../../types/Common";
import { MsgIcons } from "../../../constants/FooterConstant";

const Msg = ({ isWarning, MsgStr }: MsgProps) => {
  const iconPath = isWarning ? MsgIcons["warning"] : MsgIcons["checked"];
  return (
    <MsgWrapper>
      <img src={iconPath} alt="메시지 아이콘 이미지" />
      <span>{MsgStr}</span>
    </MsgWrapper>
  );
};
export default Msg;
const MsgWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-dirction: 8px;
  gap: 8px;
  span {
    font-size: 24px;
    font-weight: bold;
  }
`;
