import styled from "@emotion/styled";
import { FooterLogoListProps } from "../../../types/FooterProps";

const FooterLogoList = ({ imgList }: FooterLogoListProps) => {
  return (
    <FooterLogoListWrapper>
      {imgList.map((img, index) => (
        <img key={index} src={img} alt={`Footer Image ${index}`}></img>
      ))}
    </FooterLogoListWrapper>
  );
};

export default FooterLogoList;

const FooterLogoListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  img {
    width: 60px;
    height: 60px;
    cursor: pointer;
  }
`;
