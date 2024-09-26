import styled from "@emotion/styled";
import Logo from "../../common/Logo";
import SideBarItems from "./SideBarItems";
import Footer from "../Footer/Footer";
import { CopyRightText } from "../../../constants/FooterConstant";
const SideBar = () => {
  return (
    <SideBarWrapper>
      <div id="logoCon">
        <Logo></Logo>
      </div>
      <SideBarItems></SideBarItems>
      <hr></hr>
      <Footer copyRightText={CopyRightText}></Footer>
    </SideBarWrapper>
  );
};
export default SideBar;

const SideBarWrapper = styled.div`
  height: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 16px;
  hr {
    margin: 0;
    border: none;
    border-top: 1px solid
      rgba(var(--brand--primary--color--rgb), var(--opacity--60));
  }
  #logoCon {
    padding-left: 8px;
    padding-right: 199px;
  }
`;
