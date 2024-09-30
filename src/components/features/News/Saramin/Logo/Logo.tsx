import styled from "@emotion/styled";
import { LogoProps } from "../../../../../types/News/Saramin";

const SaraminLogo = ({ imgPath }: LogoProps) => {
  return <SaraminLogoWrapper src={imgPath} alt="로고"></SaraminLogoWrapper>;
};

export default SaraminLogo;

const SaraminLogoWrapper = styled.img`
  max-width: 150px;
`;
