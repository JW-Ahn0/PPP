import styled from "@emotion/styled";
import FooterLogoList from "./FooterLogoList";
import { FooterimgList } from "../../../constants/FooterConstant";
import { FooterProps } from "../../../types/FooterProps";

const Footer = ({ copyRightText }: FooterProps) => {
  return (
    <FooterWrapper>
      <FooterLogoList imgList={FooterimgList}></FooterLogoList>
      <span>{copyRightText}</span>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
`;
