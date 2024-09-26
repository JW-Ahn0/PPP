import styled from "@emotion/styled";
import { FooterListItem } from "../../../types/FooterProps";

const SideBarItem = ({ icon, text, isActive }: FooterListItem) => {
  return (
    <SideBarItemWrapper className={isActive ? "active" : ""}>
      <img src={icon}></img>
      <span>{text}</span>
    </SideBarItemWrapper>
  );
};

export default SideBarItem;

const SideBarItemWrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;

  &.active {
    background-color: rgba(
      var(--brand--primary--color--rgb),
      var(--opacity--30)
    );
  }

  :hover {
    background-color: rgba(
      var(--brand--primary--color--rgb),
      var(--opacity--30)
    );
  }
  img {
    width: 24px;
    height: 24px;
  }
`;
