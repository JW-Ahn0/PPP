import styled from "@emotion/styled";
import { FooterListItems } from "../../../constants/FooterConstant";
import SideBarItem from "./SideBarItem";

const SideBarItems = ({}) => {
  return (
    <SideBarItemsWrapper>
      {FooterListItems.map((FooterListItem, index) => (
        <SideBarItem
          key={index}
          icon={FooterListItem.icon}
          text={FooterListItem.text}
        ></SideBarItem>
      ))}
    </SideBarItemsWrapper>
  );
};

export default SideBarItems;

const SideBarItemsWrapper = styled.div`
  flex-grow: 1;
`;
